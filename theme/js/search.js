console.log('smoke!');



<!-- Note the usage of `type=module` here as this is an ES6 module -->
// Use ES module import syntax to import functionality from the module
// that we have compiled.
//
// Note that the `default` import is an initialization function which
// will "boot" the module and make it ready to use. Currently browsers
// don't support natively imported WebAssembly as an ES module, but
// eventually the manual initialization won't be required!
// import { search, default as init } from './tinysearch_engine.js';
import { search, default as init } from '{{ SITEURL }}/tinysearch_engine.js';
window.search = search;

async function run() {
  // First up we need to actually load the wasm file, so we use the
  // default export to inform it where the wasm file is located on the
  // server, and then we wait on the returned promise to wait for the
  // wasm to be loaded.
  //
  // Note that instead of a string here you can also pass in an instance
  // of `WebAssembly.Module` which allows you to compile your own module.
  // Also note that the promise, when resolved, yields the wasm module's
  // exports which is the same as importing the `*_bg` module in other
  // modes
  await init('{{ SITEURL }}/tinysearch_engine_bg.wasm');
}

run();

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

console.log('test!');
