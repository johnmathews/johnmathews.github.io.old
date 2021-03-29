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

if (document.getElementById('PygmentCSS') != null) {
    // swap out pygment CSS files based on dark/light theme
    function changePygmentsCSS (updated) {
        var PygmentCSS = document.getElementById('PygmentCSS')
        PygmentCSS.setAttribute('href', updated)
    }
} else {
    // need to define the function to avoid errors
    function changePygmentsCSS () {}
};

$(document).ready(function () {
    function toggleMenu () {
        const navToggle = document.getElementsByClassName('toggle')
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle('hidden')
        }
    };

    if (document.getElementById('hamburger') != null) {
        $('.fa-bars').click(function () {
            window.hamburgerUsed = true
        })
        document.getElementById('hamburger').onclick = toggleMenu
    };

    // set dark theme based on local storage settings
    if (localStorage.getItem('theme') === 'dark') {
        document.getElementById('baz').classList.add('dark')

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.remove('hidden')
        }

        const nightElement = document.getElementsByClassName('night')
        for (let i = 0; i < nightElement.length; i++) {
            nightElement.item(i).classList.add('hidden')
        }
        changePygmentsCSS(dark)
    } else {
        document.getElementById('baz').classList.remove('dark')
        window.localStorage.setItem('theme', 'light')

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.add('hidden')
        }

        const nightElement = document.getElementsByClassName('night')
        for (let i = 0; i < nightElement.length; i++) {
            nightElement.item(i).classList.remove('hidden')
        }
        changePygmentsCSS(light)
    }

    // change theme if theme switcher button is clicked
    $('#theme-toggle').click(modeSwitcher)
    $('#modeSwitcher1').click(modeSwitcher)
    $('#modeSwitcher2').click(modeSwitcher)
    $('#modeSwitcher3').click(modeSwitcher)
})
