import './mouseTrap.js'

function traverseList(direction){
  // f is forwards
  // b is backwards
  if (direction==='f'){
    incrementFocus('f')
  }
  if (direction==='b'){
    incrementFocus('b')
  }
}

function goToSelected(){
  // this preserves browser back/forwards history
  $(".selected")[0].click()
}

function focusSelectedListItem(n){
  var focusClasses = "selected underline"

  var listLength = $('.listItem').length
  for (var i = 0; i < listLength; i++) {
    if ( i == n ) {
      $("#primaryList .listItem").eq(i).find('a').addClass(focusClasses);
    } else {
      $("#primaryList .listItem").eq(i).find('a').removeClass(focusClasses);
    }
  }
}



function incrementFocus(direction){
  // if there isn't a list, dont do anything
  if (!$(".listItem")[0]) {
    return
  } else {
    var listLength = $('.listItem').length - 1
  }

  // check that search interface isnt showing
  if ($('#fuseModal').hasClass('hidden')) {
    if (direction === 'f'){
      if (window.selectedListItem == listLength) {
        window.selectedListItem = 0 ;
      } else {
        window.selectedListItem++;
      };
    } else if (direction === 'b'){
      if (window.selectedListItem == 0) {
        window.selectedListItem = listLength
      } else {
        window.selectedListItem-- ;
      };
    }
    focusSelectedListItem(window.selectedListItem)
  }
};

$(document).ready(function () {
  window.selectedListItem = -1

  Mousetrap.bind('ctrl+j', function(){traverseList('f')})
  Mousetrap.bind('ctrl+k', function(){traverseList('b')})
  Mousetrap.bind('return', goToSelected)
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
  Mousetrap.bind('g o', function () {
    if ($( "#otherArticlesInCategory").length ) {
      $('#otherArticlesInCategory')[0].click()
    }
  })
  Mousetrap.bind('g c', function () {
    window.location.href = `${siteURL}/categories.html`
  })
  Mousetrap.bind('g a', function () {
    window.location.href = `${siteURL}/about.html`
  })
  Mousetrap.bind('g e', function () {
    window.location.href = `${siteURL}/experience.html`
  })
  Mousetrap.bind('g r', function () {
    window.location.href = `${siteURL}/portfolio.html`
  })
  Mousetrap.bind('g l', function () {
    window.location.href = `${siteURL}`
  })
  Mousetrap.bind('t t', function () {
    modeSwitcher()
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
    document.getElementById("searchBox").blur();
    if ($("#fuseModal").hasClass('hidden') === false) {
      document.getElementById("searchBox").blur();
      $('#fuseModal').addClass('hidden');
    } else if ($("#keyboardShortcuts").hasClass('hidden') === false) {
      $('#keyboardShortcuts').addClass('hidden');
    }
  })
})
