import './mouseTrap.js'

/* global Mousetrap siteURL chooseBoth chooseTechnical chooseNonTechnical */

function goToSelected () {
  $('.selected')[$('.selected').length-1].click()
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
  var url = `https://us-central1-johnmathews-website.cloudfunctions.net/client-event-logger?path=${window.location.pathname}`
  window.selectedListItem = -1

  Mousetrap.bind('ctrl+j', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'ctrl+j'});
    navigator.sendBeacon(url, data);
    incrementFocus('f')
  })
  Mousetrap.bind('ctrl+k', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'ctrl+k'});
    navigator.sendBeacon(url, data);
    incrementFocus('b')
  })
  Mousetrap.bind('return', goToSelected)
  Mousetrap.bind('j', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'j'});
    navigator.sendBeacon(url, data);
    window.scrollBy({ top: 200, left: 0, behavior: 'smooth' })
  })
  Mousetrap.bind('k', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'k'});
    navigator.sendBeacon(url, data);
    window.scrollBy({ top: -200, left: 0, behavior: 'smooth' })
  })
  Mousetrap.bind('g i', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gi'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/blog.html`
  })
  Mousetrap.bind('G', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'G'});
    navigator.sendBeacon(url, data);
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 500)
  })
  Mousetrap.bind('g a', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'a'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/about.html`
  })
  Mousetrap.bind('g b', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'b'});
    navigator.sendBeacon(url, data);
    window.history.back()
  })
  Mousetrap.bind('g c', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gc'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/categories.html`
  })
  Mousetrap.bind('g e', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'ge'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/experience.html`
  })
  Mousetrap.bind('g f', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gf'});
    navigator.sendBeacon(url, data);
    window.history.forward()
  })
  Mousetrap.bind('g g', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gg'});
    navigator.sendBeacon(url, data);
    $('html, body').animate({ scrollTop: 0 }, 500)
  })
  Mousetrap.bind('g k', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gk'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/book-notes.html`
  })
  Mousetrap.bind('g l', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gl'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}`
  })
  Mousetrap.bind('g m', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gm'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/analytics.html`
  })
  Mousetrap.bind('g n', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gn'});
    navigator.sendBeacon(url, data);
    if ($('#nextArticleInCategory').length) {
      $('#nextArticleInCategory')[0].click()
    }
  })
  Mousetrap.bind('g o', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'go'});
    navigator.sendBeacon(url, data);
    if ($('#otherArticlesInCategory').length) {
      $('#otherArticlesInCategory')[0].click()
    }
  })
  Mousetrap.bind('g p', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gp'});
    navigator.sendBeacon(url, data);
    if ($('#previousArticleInCategory').length) {
      $('#previousArticleInCategory')[0].click()
    } else {
      window.location.href = `${siteURL}/pages.html`
    }
  })
  Mousetrap.bind('g r', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gr'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/portfolio.html`
  })
  Mousetrap.bind('g s', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gs'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/snippets.html`
  })
  Mousetrap.bind('g t', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'gt'});
    navigator.sendBeacon(url, data);
    window.location.href = `${siteURL}/tags.html`
  })
  Mousetrap.bind('v t', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'vt'});
    navigator.sendBeacon(url, data);
    window.localStorage.setItem('categoryChoice', 'Technical')
    if (typeof chooseTechnical === 'function') {
      chooseTechnical()
    }
  })
  Mousetrap.bind('v n', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'vn'});
    navigator.sendBeacon(url, data);
    window.localStorage.setItem('categoryChoice', 'nonTechnical')
    if (typeof chooseNonTechnical === 'function') {
      chooseNonTechnical()
    }
  })
  Mousetrap.bind('v a', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'va'});
    navigator.sendBeacon(url, data);
    window.localStorage.setItem('categoryChoice', 'all')
    if (typeof chooseBoth === 'function') {
      chooseBoth()
    }
  })
  Mousetrap.bind('?', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'?'});
    navigator.sendBeacon(url, data);
    $('#keyboardShortcuts').toggleClass('hidden')
  })
  Mousetrap.bind('esc', function () {
    var data = JSON.stringify({'category':'keyboard-shortcut','event':'esc'});
    navigator.sendBeacon(url, data);
    document.getElementById('searchBox').blur()
    if ($('#fuseModal').hasClass('hidden') === false) {
      document.getElementById('searchBox').blur()
      $('#fuseModal').addClass('hidden')
    } else if ($('#keyboardShortcuts').hasClass('hidden') === false) {
      $('#keyboardShortcuts').addClass('hidden')
    }
  })
})
