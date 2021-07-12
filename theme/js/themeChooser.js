$(document).ready(function () {

    $("#viewShortcuts").click(function(){
        $("#keyboardShortcuts").toggleClass("hidden")
    })
    $("#keyboardShortcuts").click(function(){
        $("#keyboardShortcuts").toggleClass("hidden")
    })

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
            const nightElements = document.getElementsByClassName('night')
            for (let i = 0; i < nightElements.length; i++) {
                nightElements.item(i).classList.remove('hidden')
            }
        } else {
            window.localStorage.setItem('theme', 'dark')
            $('#baz').addClass('dark')
            $("#PygmentCSS").attr('href', dark)

            const dayElement = document.getElementsByClassName('day')
            for (let i = 0; i < dayElement.length; i++) {
                dayElement.item(i).classList.remove('hidden')
            }
            const nightElements = document.getElementsByClassName('night')
            for (let i = 0; i < nightElements.length; i++) {
                nightElements.item(i).classList.add('hidden')
            }
        }

        if (window.hamburgerUsed === true) {
            toggleMenu()
            window.hamburgerUsed = false
        };
    }

    Mousetrap.bind('t t', function () {
        modeSwitcher()
    })

    // change theme if theme switcher button is clicked
    $('#theme-toggle').click(modeSwitcher)
    $('#modeSwitcher1').click(modeSwitcher)
    $('#modeSwitcher2').click(modeSwitcher)
    $('#modeSwitcher3').click(modeSwitcher)

    // set correct theme icon on page load
    if (localStorage.getItem('theme') === 'dark') {
        $("#PygmentCSS").attr('href', dark)
        $('#baz').addClass('dark')

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.remove('hidden')
        }
        const nightElements = document.getElementsByClassName('night')
        for (let i = 0; i < nightElements.length; i++) {
            nightElements.item(i).classList.add('hidden')
        }
    } else {
        $("#PygmentCSS").attr('href', light)
        $('#baz').removeClass('dark')

        const dayElement = document.getElementsByClassName('day')
        for (let i = 0; i < dayElement.length; i++) {
            dayElement.item(i).classList.add('hidden')
        }
        const nightElements = document.getElementsByClassName('night')
        for (let i = 0; i < nightElements.length; i++) {
            nightElements.item(i).classList.remove('hidden')
        }
    }

})
