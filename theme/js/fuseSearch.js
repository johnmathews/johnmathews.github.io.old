import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.esm.min.js'
// import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.basic.esm.min.js'

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
    threshold: 0.4, // 0 is perfect, 1 is anything
    useExtendedSearch: true, // https://fusejs.io/examples.html#extended-search
    keys: [
      {name: "title", weight: 0.9},
      {name: "tags", weight: 0.7},
      {name: "body", weight: 0.4},
      {name: "category", weight: 0.3},
      {name: "url", weight: 0.3},
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
    if (evt.keyCode == 27) { //27 is the code for escape
      document.getElementById("searchBox").blur();
      $('#fuseModal').addClass('hidden');
    };
    if (evt.keyCode == 40) { // down arrow
      incrementFocus(true);
    };
    if (evt.keyCode == 38) { // up arrow
      incrementFocus(false);
    };
    if (evt.keyCode == 13) { // return
      if (window.focussedResult >= 0){
        $("#selected").trigger("click");
      };
    };
  };

  // whenever a key is pressed with searchbox in focus, do a search
  function doSearch(fuse) {
    let value = document.getElementById("searchBox").value;
    const results = fuse.search(value);
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

  $( "#searchBox" ).keyup(function(){
    doSearch(window.fuse)
  });
})

