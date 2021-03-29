import './mouseTrap.js'

$(document).ready(function () {
  Mousetrap.bind('j', function () {
    window.scrollBy({top: 110, left: 0, behavior: 'smooth'})
  })
  Mousetrap.bind('k', function () {
    window.scrollBy({top: -110, left: 0, behavior: 'smooth'})
  })
  Mousetrap.bind('g i', function () {
    window.location.href = `${siteURL}/blog.html`
  })
  Mousetrap.bind('g b', function () {
    window.history.back()
  })
  Mousetrap.bind('g f', function () {
    window.history.forward()
  })
  Mousetrap.bind('g n', function () {
    if ($( "#nextArticleInCategory").length ) {
      $('#nextArticleInCategory')[0].click()
    }
  })
  Mousetrap.bind('g p', function () {
    if ($( "#previousArticleInCategory").length ) {
      $('#previousArticleInCategory')[0].click()
    }
  })
  Mousetrap.bind('g c', function () {
    if ($( "#otherArticlesInCategory").length ) {
      $('#otherArticlesInCategory')[0].click()
    }
  })
  Mousetrap.bind('g a', function () {
    window.location.href = `${siteURL}/about.html`
  })
  Mousetrap.bind('g c c', function () {
    window.location.href = `${siteURL}/categories.html`
  })
  Mousetrap.bind('g o', function () {
    window.location.href = `${siteURL}/portfolio.html`
  })
  Mousetrap.bind('g e', function () {
    window.location.href = `${siteURL}/experience.html`
  })
  Mousetrap.bind('g l', function () {
    window.location.href = `${siteURL}`
  })
  Mousetrap.bind('t t', function () {
    modeSwitcher()
  })
  Mousetrap.bind('c t', function () {
    window.localStorage.setItem('categoryChoice', 'Technical')
    if (typeof chooseTechnical === 'function') {
      chooseTechnical()
    }
  })
  Mousetrap.bind('c n', function () {
    window.localStorage.setItem('categoryChoice', 'nonTechnical')
    if (typeof chooseNonTechnical === 'function') {
      chooseNonTechnical()
    }
  })
  Mousetrap.bind('c a', function () {
    window.localStorage.setItem('categoryChoice', 'all')
    if (typeof chooseBoth === 'function') {
      chooseBoth()
    }
  })
  Mousetrap.bind('?', function () {
    $('#keyboardShortcuts').toggleClass('hidden')
  })
  Mousetrap.bind('esc', function () {
    document.getElementById("searchBox").blur();
    if ($("#fuseModal").hasClass('hidden') === false) {
      document.getElementById("searchBox").blur();
      $('#fuseModal').addClass('hidden');
    } else if ($("#keyboardShortcuts").hasClass('hidden') === false) {
      $('#keyboardShortcuts').addClass('hidden');
    }
  })
})
