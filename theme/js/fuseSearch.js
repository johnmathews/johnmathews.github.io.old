import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.esm.js'

async function get() {
  let obj = await (await fetch(indexURL)).json();
  return obj;
}

var searchIndex;

var resultsLength = 0;
window.focussedResult = -1;

(async () => {
  searchIndex = await get()
  const options = {
    shouldSort: true,
    includeScore: false,
    isCaseSensite: false,
    minMatchCharLength: 3,
    findAllMatches: true,
    threshold: 0.4, // 0 is perfect, 1 is anything
    ignoreLocation: true, // it doesn't matter where the text is in the article
    useExtendedSearch: false, // https://fusejs.io/examples.html#extended-search
    // distance: 8000, //  how close the match can be from the expected location
    // location: 0, // where in the text is the match expected
    // threshold: 1, // match anything within `distance` of `location`
    keys: [
      {name: "title", weight: 0.9},
      {name: "tags", weight: 0.7},
      {name: "body", weight: 0.6},
      // {name: "category", weight: 0.3},
      // {name: "url", weight: 0.3},
    ]
  };

  window.fuse = new Fuse(searchIndex, options);
})()



$( document ).ready(function() {

  // show search modal if link is clicked
  function showFuseSearch() {
    window.focussedResult = -1;
    $('#fuseModal').toggleClass('hidden');
    $('#searchBox').focus();
  }


  $( "#fuseSearch" ).click(showFuseSearch);
  $( "#searchButton" ).click(showFuseSearch);
  $( "#searchButton2" ).click(showFuseSearch);
  $( "#searchButton3" ).click(showFuseSearch);

  $( "#searchModalBackground" ).click(function() {
    $('#fuseModal').toggleClass('hidden');
  });

  hotkeys('ctrl+k,command+k,/,esc,return', function (event, handler){
    event.preventDefault();
    switch (handler.key) {
      case 'ctrl+k':
        window.focussedResult = -1;
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'command+k':
        window.focussedResult = -1;
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case '/':
        window.focussedResult = -1;
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'esc':
        document.getElementById("searchBox").blur();
        $('#fuseModal').addClass('hidden');
        break;
    }
  });

  function incrementFocus(b){
    if (!$('#fuseModal').hasClass('hidden') && resultsLength > 0) {
      if (b == true){
        if (window.focussedResult < resultsLength - 1) {
          window.focussedResult++ ;
        } else {
          window.focussedResult = 0;
        };
      } else if (b == false){
        if (window.focussedResult > 0) {
          window.focussedResult-- ;
        } else {
          window.focussedResult = resultsLength - 1 ;
        };
      }
    }
  };

  function focussResult (n) {
    // searchbox can be open with no results, check if there are results
    if (resultsLength > 0){
      $("#results > li").eq(n).find("div").attr("id", "selected");
    }
  };

  // need this in addition to hotkeys if the search box is in focus
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) { // escape
      document.getElementById("searchBox").blur();
      $('#fuseModal').addClass('hidden');
    } else if (evt.keyCode == 40) { // down arrow
      incrementFocus(true);
    } else if (evt.keyCode == 38) { // up arrow
      incrementFocus(false);
    } else if (evt.keyCode == 13) { // return key
      if (window.focussedResult >= 0){
        $("#selected").trigger("click");
      };
    };
  };

  // whenever a key is pressed with searchbox in focus, do a search
  function doSearch(fuse) {
    let value = document.getElementById("searchBox").value;
    let results = fuse.search(value); //.reverse(); // results are sorted, make the best at the top
    // results = results.reverse()
    resultsLength = results.length;

    let ul = document.getElementById("results");
    ul.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      let item = results[i].item ;

      let li = document.createElement("li");

      let link = document.createElement('a');
      link.setAttribute('href', item['url']);
      link.innerHTML = `<div class="w-100">${item["title"]}</div>`;

      li.appendChild(link);
      ul.appendChild(li);
    }

    if (window.focussedResult >= 0){
      focussResult(window.focussedResult);
    };
  }

  function delay(fn, ms) {
    let timer = 0
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
  }

  $('#searchBox').keyup(
    delay(function(e){
      doSearch(window.fuse);
    }, 300)
  );

})

