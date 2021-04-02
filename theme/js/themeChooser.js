import './mouseTrap.js'

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

    function modeSwitcher () {
        if (localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'light')
            $('#baz').removeClass('dark')
            $("#PygmentCSS").attr('href', light)

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
            $("#PygmentCSS").attr('href', dark)

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
            window.hamburgerUsed = false
        };
    }

    // change theme if theme switcher button is clicked
    $('#theme-toggle').click(modeSwitcher)
    $('#modeSwitcher1').click(modeSwitcher)
    $('#modeSwitcher2').click(modeSwitcher)
    $('#modeSwitcher3').click(modeSwitcher)

    Mousetrap.bind('t t', function () {
        modeSwitcher()
    })
})

// this is supposed to avoid a flash of white if dark mode is set
function setThemeBeforeDOMIsLoaded(){
    if (localStorage.getItem('theme') === 'dark') {
        document.getElementById('baz').classList.add('dark')
        $("#PygmentCSS").attr('href', dark)
    }
}
setThemeBeforeDOMIsLoaded()
