$( document ).ready(function() {
  $( "#searchButton" ).click(function() {
    $('#searchModal').toggleClass('hidden');
    $("#searchBox").focus();
  });
  $( "#searchButton2" ).click(function() {
    $('#searchModal').toggleClass('hidden');
    $("#searchBox").focus();
  });
  $( "#searchButton3" ).click(function() {
    $('#searchModal').toggleClass('hidden');
    $("#searchBox").focus();
  });

  $( "#searchModalBackground" ).click(function() {
    $('#searchModal').toggleClass('hidden');
  });

  hotkeys('ctrl+k,command+k,/,esc', function (event, handler){
    event.preventDefault();
    switch (handler.key) {
      case 'ctrl+k':
        $('#searchModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'command+k':
        $('#searchModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case '/':
        $('#searchModal').toggleClass('hidden');
        $('#searchBox').focus();
        break;
      case 'esc':
        $('#searchModal').addClass('hidden');
        break;
      default: alert(event);
    }
  });

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {//27 is the code for escape
      document.getElementById("searchBox").blur();
      $('#searchModal').addClass('hidden');
    }
  };

  // And afterwards we can use all the functionality defined in wasm.
  function doSearch() {
    let value = document.getElementById("searchBox").value;
    const arr = search(value, 10);
    let ul = document.getElementById("results");
    ul.innerHTML = "";

    for (i = 0; i < arr.length; i++) {
      var li = document.createElement("li");

      let elem = arr[i];
      let elemlink = document.createElement('a');
      elemlink.innerHTML = elem[0];
      elemlink.setAttribute('href', elem[1]);
      li.appendChild(elemlink);

      ul.appendChild(li);
    }
  }

});
