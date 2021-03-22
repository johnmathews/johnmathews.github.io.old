import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.esm.js'

async function get() {
  let obj = await (await fetch(indexURL)).json();
  return obj;
}

var searchIndex;

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

  hotkeys('ctrl+k,command+k,/,esc', function (event, handler){
    event.preventDefault();
    switch (handler.key) {
      case 'ctrl+k':
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'command+k':
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case '/':
        $('#fuseModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'esc':
        document.getElementById("searchBox").blur();
        $('#fuseModal').addClass('hidden');
        break;
      default: alert(event);
    }
  });

  // need this in addition to hotkeys if the search box is in focus
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) { //27 is the code for escape
      document.getElementById("searchBox").blur();
      $('#fuseModal').addClass('hidden');
    }
  };


  // whenever a key is pressed with searchbox in focus, do a search
  function doSearch(fuse) {
    let value = document.getElementById("searchBox").value;
    const results = fuse.search(value);
    window.resultsLength = results.length;
    window.focussedResult = 0;

    let ul = document.getElementById("results");
    ul.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      let item = results[i].item;

      let li = document.createElement("li");
      li.setAttribute('onClick', item['url']);

      let link = document.createElement('a');
      link.setAttribute('href', item['url']);
      link.innerHTML = `<div class='w-100'>${item['title']}</div>`;

      li.appendChild(link);
      ul.appendChild(li);
    }
  }

  $( "#searchBox" ).keyup(function(){
    doSearch(window.fuse)
  });
})

