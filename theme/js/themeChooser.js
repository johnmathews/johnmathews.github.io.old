$(document).ready(function () {
    if (document.getElementById('hamburger') != null) {
        $('.fa-bars').click(function () {
            window.hamburgerUsed = true
        })
        document.getElementById('hamburger').onclick = toggleMenu
    };

    function toggleMenu () {
        const navToggle = document.getElementsByClassName('toggle')
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle('hidden')
        }
    };

    // change theme if theme switcher button is clicked
    $('#theme-toggle').click(modeSwitcher)
    $('#modeSwitcher1').click(modeSwitcher)
    $('#modeSwitcher2').click(modeSwitcher)
    $('#modeSwitcher3').click(modeSwitcher)
})

function changePygmentsCSS(){
    $(document).ready(function () {
        if (document.getElementById('PygmentCSS') != null) {
            // swap out pygment CSS files based on dark/light theme
            return function changePygmentsCSS(updated) {
                var PygmentCSS = document.getElementById('PygmentCSS')
                PygmentCSS.setAttribute('href', updated)
            }
        } else {
            // need to define the function to avoid errors
            return function changePygmentsCSS() {}
        };
    })
}

function modeSwitcher () {
    if (localStorage.getItem('theme') === 'dark') {
        window.localStorage.setItem('theme', 'light')
        $('#baz').removeClass('dark')
        changePygmentsCSS(light)

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.add('hidden')
        }
        const nightElement = document.getElementsByClassName('night')
        for (let i = 0; i < nightElement.length; i++) {
            nightElement.item(i).classList.remove('hidden')
        }
    } else {
        window.localStorage.setItem('theme', 'dark')
        $('#baz').addClass('dark')
        changePygmentsCSS(dark)

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.remove('hidden')
        }
        const nightElement = document.getElementsByClassName('night')
        for (let i = 0; i < nightElement.length; i++) {
            nightElement.item(i).classList.add('hidden')
        }
    }

    if (window.hamburgerUsed === true) {
        toggleMenu()
        window.hamburgerUsed = false // reset
    };
}

// this avoids a flash of white is dark mode is set
function setThemeBeforeDOMIsLoaded(){
    if (localStorage.getItem('theme') === 'dark') {
        document.getElementById('baz').classList.add('dark')
    }
}
setThemeBeforeDOMIsLoaded()
