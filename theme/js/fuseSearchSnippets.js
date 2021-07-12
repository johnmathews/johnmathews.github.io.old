/* global snippetIndexURL */

import Fuse from './fuse.esm.js'
import _ from './underscore.js'
import './hotkeys.min.js'

async function get () {
  const obj = await (await fetch(snippetIndexURL)).json()
  return obj
}

var snippetSearchIndex

window.snippetResultsLength = 0
window.snippetFocussedResult = -1;

(async () => {
  snippetSearchIndex = await get() // get isnt a built in, its defined in this file
  const snippetOptions = {
    shouldSort: true,
    includeScore: false,
    isCaseSensite: false,
    minMatchCharLength: 0,
    findAllMatches: true,
    threshold: 0.2, // 0 is perfect, 1 is anything
    ignoreLocation: true, // it doesn't matter where the text is in the article
    useExtendedSearch: true, // https://fusejs.io/examples.html#extended-search
    keys: [
      { name: 'title', weight: 1.0 },
      { name: 'tags', weight: 0.7 },
      { name: 'body', weight: 0.4 },
      { name: 'url', weight: 0.001 } // url is used as a UUID only for hiding/showing results
    ]
  }
  window.fuseSnippets = new Fuse(snippetSearchIndex, snippetOptions)
})()

$(document).ready(function () {
  function doSearch(fuse){
    const value = document.getElementById('snippetSearchBox').value
    const results = fuse.search(value)
    window.snippetResultsLength = results.length

    var resultURLs = []
    for (let i = 0; i < results.length; i++) {
      resultURLs.push(results[i].item.url)
    }

    $( ".snippet" ).each(function() {
      if ( !resultURLs.includes($(this).attr('id')) ){
        $(this).addClass('hidden')
      } else {
        $(this).removeClass('hidden')
      }
    });

    if (document.getElementById('snippetSearchBox').value.length == 0 ){
      $( ".snippet" ).each(function() {
        $(this).removeClass('hidden')
      })
    }
  }

  var lazySearch = _.debounce(function () {
    doSearch(window.fuseSnippets)
  }, 250)

  $('#snippetSearchBox').on('keydown', function(){
    lazySearch()
  })
})
