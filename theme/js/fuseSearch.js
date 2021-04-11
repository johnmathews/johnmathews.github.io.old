/* global hotkeys indexURL */

import Fuse from './fuse.esm.js'
import _ from './underscore.js'
import './hotkeys.min.js'

async function get () {
  const obj = await (await fetch(indexURL)).json()
  return obj
}

var searchIndex

window.resultsLength = 0
window.focussedResult = -1;

(async () => {
  searchIndex = await get() // get isnt a built in, its defined up stairs
  const options = {
    shouldSort: true,
    includeScore: false,
    isCaseSensite: false,
    minMatchCharLength: 3,
    findAllMatches: true,
    threshold: 0.4, // 0 is perfect, 1 is anything
    ignoreLocation: true, // it doesn't matter where the text is in the article
    useExtendedSearch: true, // https://fusejs.io/examples.html#extended-search
    // distance: 8000, //  how close the match can be from the expected location
    // location: 0, // where in the text is the match expected
    // threshold: 1, // match anything within `distance` of `location`
    keys: [
      { name: 'title', weight: 1.0 },
      { name: 'tags', weight: 0.7 },
      { name: 'body', weight: 0.4 }
      // {name: "category", weight: 0.3},
      // {name: "url", weight: 0.3},
    ]
  }
  window.fuse = new Fuse(searchIndex, options)
})()

$(document).ready(function () {
  // show search modal if link is clicked
  function showFuseSearch () {
    window.focussedResult = -1
    $('#fuseModal').toggleClass('hidden')
    $('#searchBox').focus()
  }

  $('#fuseSearch').click(showFuseSearch)
  $('#searchButton').click(showFuseSearch)
  $('#searchButton2').click(showFuseSearch)
  $('#searchButton3').click(showFuseSearch)

  $('#searchModalBackground').click(function () {
    $('#fuseModal').toggleClass('hidden')
  })

  hotkeys('command+k,/,esc,return', function (event, handler) {
    event.preventDefault()
    switch (handler.key) {
      case 'command+k':
        window.focussedResult = -1
        $('#fuseModal').toggleClass('hidden')
        $('#searchBox').focus()
        break
      case '/':
        window.focussedResult = -1
        $('#fuseModal').toggleClass('hidden')
        $('#searchBox').focus()
        break
    }
  })

  function incrementFocus (b) {
    if (!$('#fuseModal').hasClass('hidden') && window.resultsLength > 0) {
      if (b == true) {
        if (window.focussedResult < window.resultsLength - 1) {
          window.focussedResult++
        } else {
          window.focussedResult = 0
        }
      } else if (b == false) {
        if (window.focussedResult > 0) {
          window.focussedResult--
        } else {
          window.focussedResult = window.resultsLength - 1
        }
      }
    }
  }

  function focussResult (n) {
    if (window.resultsLength > 0) {
      for (var i = 0; i < window.resultsLength; i++) {
        if (i == n) {
          $('#searchResults > li').eq(i).find('div').attr('id', 'selected')
        } else {
          $('#searchResults > li').eq(i).find('div').attr('id', 'notSelected')
        }
      }
    }
  }

  // whenever a key is pressed with searchbox in focus, do a search
  function doSearch (fuse) {
    const value = document.getElementById('searchBox').value
    const results = fuse.search(value)
    window.resultsLength = results.length

    const ul = document.getElementById('searchResults')
    ul.innerHTML = ''

    for (let i = 0; i < results.length; i++) {
      const item = results[i].item

      const li = document.createElement('li')

      const link = document.createElement('a')
      link.setAttribute('href', item.url)
      link.innerHTML = `<div class="w-100">${item.title}</div>`

      li.appendChild(link)
      ul.appendChild(li)
    }

    if (window.focussedResult >= 0) {
      focussResult(window.focussedResult)
    }
  }

  var lazySearch = _.debounce(function () {
    doSearch(window.fuse)
  }, 250)

  $('#searchBox').on('keydown', function (event) {
    if (event.which == 40) {
      incrementFocus(true)
      focussResult(window.focussedResult)
    } else if (event.which == 74 && event.ctrlKey) {
      incrementFocus(true)
      focussResult(window.focussedResult)
    } else if (event.which == 38) {
      incrementFocus(false)
      focussResult(window.focussedResult)
    } else if (event.which == 75 && event.ctrlKey) {
      incrementFocus(false)
      focussResult(window.focussedResult)
    } else if (event.keyCode == 13) { // return key
      if (window.focussedResult >= 0) {
        $('#selected').trigger('click')
      } else {
        focussResult(0)
        $('#selected').trigger('click')
      }
    } else if (event.keyCode == 27) { // escape key
      document.getElementById('searchBox').blur()
      $('#fuseModal').addClass('hidden')
    } else {
      lazySearch()
    }
  })
})
