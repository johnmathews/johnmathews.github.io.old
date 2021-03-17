$( document ).ready(function() {

    // swap out pygment CSS files based on dark/light theme
    function changePygmentsCSS(existing, updated) {
        var PygmentCSS = document.getElementById("PygmentCSS");
        PygmentCSS.setAttribute("href", updated);
    }

    // set dark theme based on local storage settings
    if (localStorage.getItem('theme') === "dark") {
        document.getElementById("baz").classList.add("dark");
        document.getElementsByClassName("day")[0].classList.remove("hidden");
        document.getElementsByClassName("night")[0].classList.add("hidden");
        document.getElementsByClassName("day")[1].classList.remove("hidden");
        document.getElementsByClassName("night")[1].classList.add("hidden");
        document.getElementsByClassName("day")[2].classList.remove("hidden");
        document.getElementsByClassName("night")[2].classList.add("hidden");
        changePygmentsCSS(light, dark);
    } else {
        document.getElementById("baz").classList.remove("dark");
        window.localStorage.setItem('theme', 'light');
        document.getElementsByClassName("day")[0].classList.add("hidden");
        document.getElementsByClassName("night")[0].classList.remove("hidden");
        document.getElementsByClassName("day")[1].classList.add("hidden");
        document.getElementsByClassName("night")[1].classList.remove("hidden");
        document.getElementsByClassName("day")[2].classList.add("hidden");
        document.getElementsByClassName("night")[2].classList.remove("hidden");
        changePygmentsCSS(dark, light);
    }

    // change theme if theme switcher button is clicked
    function modeSwitcher() {
        console.log('called!');
        if (localStorage.getItem('theme') === "dark") {
            window.localStorage.setItem('theme', 'light');
            $( "#baz" ).removeClass( "dark" );
            changePygmentsCSS(dark, light);

            document.getElementsByClassName("day")[0].classList.add("hidden");
            document.getElementsByClassName("night")[0].classList.remove("hidden");
            document.getElementsByClassName("day")[1].classList.add("hidden");
            document.getElementsByClassName("night")[1].classList.remove("hidden");
            document.getElementsByClassName("day")[2].classList.add("hidden");
            document.getElementsByClassName("night")[2].classList.remove("hidden");
        } else {
            window.localStorage.setItem('theme', 'dark');
            $( "#baz" ).addClass( "dark" );
            changePygmentsCSS(light, dark);

            document.getElementsByClassName("day")[0].classList.remove("hidden");
            document.getElementsByClassName("night")[0].classList.add("hidden");
            document.getElementsByClassName("day")[1].classList.remove("hidden");
            document.getElementsByClassName("night")[1].classList.add("hidden");
            document.getElementsByClassName("day")[2].classList.remove("hidden");
            document.getElementsByClassName("night")[2].classList.add("hidden");
        }

        // TODO: close the hamburge menu after dark mode is clicked
    }

    $( "#modeSwitcher1" ).click(modeSwitcher);
    $( "#modeSwitcher2" ).click(modeSwitcher);
    $( "#modeSwitcher3" ).click(modeSwitcher);

    console.log( "ready!" );
});
