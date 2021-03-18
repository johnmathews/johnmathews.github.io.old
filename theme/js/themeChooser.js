$( document ).ready(function() {

    if (document.getElementById('PygmentCSS') !=null) {
        // swap out pygment CSS files based on dark/light theme
        function changePygmentsCSS(existing, updated) {
            var PygmentCSS = document.getElementById("PygmentCSS");
            PygmentCSS.setAttribute("href", updated);
        }
    } else {
        function changePygmentsCSS(a, b) {}
    };


    if (document.getElementById('hamburger') !=null) {
        document.getElementById("hamburger").onclick = function toggleMenu() {
            const navToggle = document.getElementsByClassName("toggle");
            for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
            }
        };
    };

    // set dark theme based on local storage settings
    if (localStorage.getItem('theme') === "dark") {
        document.getElementById("baz").classList.add("dark");

        const dayElement = document.getElementsByClassName("day");
        for (let i = 0; i < dayElement.length; i++) {
          dayElement.item(i).classList.remove("hidden");
        }

        const nightElement = document.getElementsByClassName("night");
        for (let i = 0; i < nightElement.length; i++) {
          nightElement.item(i).classList.add("hidden");
        }

        changePygmentsCSS(light, dark);

    } else {

        document.getElementById("baz").classList.remove("dark");
        window.localStorage.setItem('theme', 'light');

        const dayElement = document.getElementsByClassName("day");
        for (let i = 0; i < dayElement.length; i++) {
          dayElement.item(i).classList.add("hidden");
        }

        const nightElement = document.getElementsByClassName("night");
        for (let i = 0; i < nightElement.length; i++) {
          nightElement.item(i).classList.remove("hidden");
        }

        changePygmentsCSS(dark, light);
    }

    // change theme if theme switcher button is clicked
    function modeSwitcher() {
        if (localStorage.getItem('theme') === "dark") {
            window.localStorage.setItem('theme', 'light');
            $( "#baz" ).removeClass( "dark" );
            changePygmentsCSS(dark, light);

            const dayElement = document.getElementsByClassName("day");
            for (let i = 0; i < dayElement.length; i++) {
              dayElement.item(i).classList.add("hidden");
            }
            const nightElement = document.getElementsByClassName("night");
            for (let i = 0; i < nightElement.length; i++) {
              nightElement.item(i).classList.remove("hidden");
            }

        } else {
            window.localStorage.setItem('theme', 'dark');
            $( "#baz" ).addClass( "dark" );
            changePygmentsCSS(light, dark);

            const dayElement = document.getElementsByClassName("day");
            for (let i = 0; i < dayElement.length; i++) {
              dayElement.item(i).classList.remove("hidden");
            }
            const nightElement = document.getElementsByClassName("night");
            for (let i = 0; i < nightElement.length; i++) {
              nightElement.item(i).classList.add("hidden");
            }
        }

        // TODO: close the hamburge menu after dark mode is clicked
    }

    $( "#theme-toggle" ).click(modeSwitcher);
    $( "#modeSwitcher1" ).click(modeSwitcher);
    $( "#modeSwitcher2" ).click(modeSwitcher);
    $( "#modeSwitcher3" ).click(modeSwitcher);

});
