import './mouseTrap.js'

/* global Mousetrap siteURL chooseBoth chooseTechnical chooseNonTechnical */

function goToSelected () {
  $('.selected')[0].click()
}

function focusSelectedListItem (n) {
  var focusClasses = 'selected underline'

  var listLength = $('.listItem').length
  for (var i = 0; i < listLength; i++) {
    if (i == n) {
      $('#primaryList .listItem').eq(i).find('a').addClass(focusClasses)
    } else {
      $('#primaryList .listItem').eq(i).find('a').removeClass(focusClasses)
    }
  }
}

function incrementFocus (direction) {
  // if there isn't a list, dont do anything
  if (!$('.listItem')[0]) {
    return
  } else {
    var listLength = $('.listItem').length
  }

  // check that search interface isnt showing
  if ($('#fuseModal').hasClass('hidden')) {
    if (direction === 'f') {
      if (window.selectedListItem == listLength) {
        window.selectedListItem = 0
      } else {
        window.selectedListItem++
      }
    } else if (direction === 'b') {
      if (window.selectedListItem == 0) {
        window.selectedListItem = listLength
      } else {
        window.selectedListItem--
      }
    }
    focusSelectedListItem(window.selectedListItem)
  }
}

$(document).ready(function () {
  window.selectedListItem = -1

  Mousetrap.bind('ctrl+j', function () { incrementFocus('f') })
  Mousetrap.bind('ctrl+k', function () { incrementFocus('b') })
  Mousetrap.bind('return', goToSelected)
  Mousetrap.bind('j', function () {
    window.scrollBy({ top: 200, left: 0, behavior: 'smooth' })
  })
  Mousetrap.bind('k', function () {
    window.scrollBy({ top: -200, left: 0, behavior: 'smooth' })
  })
  Mousetrap.bind('g i', function () {
    window.location.href = `${siteURL}/blog.html`
  })
  Mousetrap.bind('G', function () {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 500)
  })
  Mousetrap.bind('g a', function () {
    window.location.href = `${siteURL}/about.html`
  })
  Mousetrap.bind('g b', function () {
    window.history.back()
  })
  Mousetrap.bind('g c', function () {
    window.location.href = `${siteURL}/categories.html`
  })
  Mousetrap.bind('g e', function () {
    window.location.href = `${siteURL}/experience.html`
  })
  Mousetrap.bind('g f', function () {
    window.history.forward()
  })
  Mousetrap.bind('g g', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
  })
  Mousetrap.bind('g k', function () {
    window.location.href = `${siteURL}/book-notes.html`
  })
  Mousetrap.bind('g l', function () {
    window.location.href = `${siteURL}`
  })
  Mousetrap.bind('g m', function () {
    window.location.href = `${siteURL}/analytics.html`
  })
  Mousetrap.bind('g n', function () {
    if ($('#nextArticleInCategory').length) {
      $('#nextArticleInCategory')[0].click()
    }
  })
  Mousetrap.bind('g o', function () {
    if ($('#otherArticlesInCategory').length) {
      $('#otherArticlesInCategory')[0].click()
    }
  })
  Mousetrap.bind('g p', function () {
    if ($('#previousArticleInCategory').length) {
      $('#previousArticleInCategory')[0].click()
    } else {
      window.location.href = `${siteURL}/pages.html`
    }
  })
  Mousetrap.bind('g r', function () {
    window.location.href = `${siteURL}/portfolio.html`
  })
  Mousetrap.bind('g s', function () {
    window.location.href = `${siteURL}/snippets.html`
  })
  Mousetrap.bind('v t', function () {
    window.localStorage.setItem('categoryChoice', 'Technical')
    if (typeof chooseTechnical === 'function') {
      chooseTechnical()
    }
  })
  Mousetrap.bind('v n', function () {
    window.localStorage.setItem('categoryChoice', 'nonTechnical')
    if (typeof chooseNonTechnical === 'function') {
      chooseNonTechnical()
    }
  })
  Mousetrap.bind('v a', function () {
    window.localStorage.setItem('categoryChoice', 'all')
    if (typeof chooseBoth === 'function') {
      chooseBoth()
    }
  })
  Mousetrap.bind('?', function () {
    $('#keyboardShortcuts').toggleClass('hidden')
  })
  Mousetrap.bind('esc', function () {
    document.getElementById('searchBox').blur()
    if ($('#fuseModal').hasClass('hidden') === false) {
      document.getElementById('searchBox').blur()
      $('#fuseModal').addClass('hidden')
    } else if ($('#keyboardShortcuts').hasClass('hidden') === false) {
      $('#keyboardShortcuts').addClass('hidden')
    }
  })
})
