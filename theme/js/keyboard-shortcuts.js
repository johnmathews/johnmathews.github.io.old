import './mouseTrap.js'

$(document).ready(function () {
  Mousetrap.bind('j', function () {
    window.scrollBy({top: 110, left: 0, behavior: 'smooth'})
  })
  Mousetrap.bind('k', function () {
    window.scrollBy({top: -110, left: 0, behavior: 'smooth'})
  })
  Mousetrap.bind('g i', function () {
    // console.log('go to index');
    window.location.href = `${siteURL}/blog.html`
  })
  Mousetrap.bind('g b', function () {
    // console.log('browser back');
    window.history.back()
  })
  Mousetrap.bind('g f', function () {
    // console.log('browser forward');
    window.history.forward()
  })
  Mousetrap.bind('g n', function () {
    // console.log('go to next article');
    $('#nextArticleInCategory')[0].click()
  })
  Mousetrap.bind('g p', function () {
    // console.log('go to previous article');
    $('#previousArticleInCategory')[0].click()
  })
  Mousetrap.bind('g c', function () {
    // console.log('go to category page');
    $('#otherArticlesInCategory')[0].click()
  })
  Mousetrap.bind('g a', function () {
    // console.log('go to about');
    window.location.href = `${siteURL}/about.html`
  })
  Mousetrap.bind('g c c', function () {
    // console.log('go to categories');
    window.location.href = `${siteURL}/categories.html`
  })
  Mousetrap.bind('g o', function () {
    // console.log('go to portfolio');
    window.location.href = `${siteURL}/portfolio.html`
  })
  Mousetrap.bind('g e', function () {
    // console.log('go to experience');
    window.location.href = `${siteURL}/experience.html`
  })
  Mousetrap.bind('g l', function () {
    // console.log('go to landing page');
    window.location.href = `${siteURL}`
  })
  Mousetrap.bind('t t', function () {
    // console.log('toggle theme');
    modeSwitcher()
  })
  Mousetrap.bind('c t', function () {
    // console.log('show technical articles only');
    window.localStorage.setItem('categoryChoice', 'Technical')
    if (typeof chooseTechnical === 'function') {
      chooseTechnical()
    }
  })
  Mousetrap.bind('c n', function () {
    // console.log('show non-technical articles only');
    window.localStorage.setItem('categoryChoice', 'nonTechnical')
    if (typeof chooseNonTechnical === 'function') {
      chooseNonTechnical()
    }
  })
  Mousetrap.bind('c a', function () {
    // console.log('show all articles regardless of category');
    window.localStorage.setItem('categoryChoice', 'all')
    if (typeof chooseBoth === 'function') {
      chooseBoth()
    }
  })
  Mousetrap.bind('?', function () {
    console.log('show a modal')
    $('#keyboardShortcuts').toggleClass('hidden')
  })
})
