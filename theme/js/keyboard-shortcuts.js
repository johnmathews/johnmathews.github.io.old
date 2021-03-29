import './mouseTrap.js'

$( document ).ready(function() {
  Mousetrap.bind('g i', function() {
    console.log('go to index');
  });
  Mousetrap.bind('g b', function() {
    console.log('browser back');
  });
  Mousetrap.bind('g n', function() {
    console.log('go to next article');
  });
  Mousetrap.bind('g p', function() {
    console.log('go to previous article');
  });
  Mousetrap.bind('g a', function() {
    console.log('go to about');
  });
  Mousetrap.bind('g o', function() {
    console.log('go to portfolio');
  });
  Mousetrap.bind('g e', function() {
    console.log('go to experience');
  });
  Mousetrap.bind('g l', function() {
    console.log('go to landing page');
  });
  Mousetrap.bind('t t', function() {
    console.log('toggle theme');
  });
  Mousetrap.bind('c t', function() {
    console.log('show technical articles only');
  });
  Mousetrap.bind('c n', function() {
    console.log('show non-technical articles only');
  });
  Mousetrap.bind('c a', function() {
    console.log('show all articles regardless of category');
  });
  Mousetrap.bind('g p', function() {
    console.log('go to portfolio');
  });
  Mousetrap.bind('?', function() {
    console.log('show a modal');
    $('#keyboardShortcuts').toggleClass('hidden');
  });
});
