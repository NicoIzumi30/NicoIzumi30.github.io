$(document).ready(function () {
    $('#mobile-menu').on('click', function () {
        $('.mobile-nav').removeClass('closed-menu');
    });

    $('#close').on('click', function () {
        $('.mobile-nav').addClass('closed-menu');
    });
    function toggleDarkMode(darkMode) {
        if (darkMode) {
            $("body").addClass("dark");
            $(".light-mode").removeClass("hidden");
            $(".dark-mode").addClass("hidden");
        } else {
            $("body").removeClass("dark");
            $(".light-mode").addClass("hidden");
            $(".dark-mode").removeClass("hidden");
        }
    }

    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'false2') {
        toggleDarkMode(false);
    } else if (darkModePreference === 'true') {
        toggleDarkMode(true);
    }

    $('.dark-mode').on('click', function () {
        toggleDarkMode(true);
        localStorage.setItem('darkMode', 'true');
    });

    $('.light-mode').on('click', function () {
        toggleDarkMode(false);
        localStorage.setItem('darkMode', 'false2');
    });
    function toggleBahasa(bahasa) {
        if (bahasa === 'indonesia') {
            $(".id").removeClass("hidden");
            $(".en").addClass("hidden");
            $("#en").removeClass("hidden");
            $("#id").addClass("hidden");

        } else {
            $(".id").addClass("hidden");
            $(".en").removeClass("hidden");
            $("#en").addClass("hidden");
            $("#id").removeClass("hidden");
        }
    }

    const bahasaPreference = localStorage.getItem('bahasa');
    if (bahasaPreference === 'indonesia') {
        toggleBahasa('indonesia');
    } else if (bahasaPreference === 'english') {
        toggleBahasa('english');
    }

    $('#en').on('click', function () {
        toggleBahasa('english');
        localStorage.setItem('bahasa', 'english');
    });

    $('#id').on('click', function () {
        toggleBahasa('indonesia');
        localStorage.setItem('bahasa', 'indonesia');
    });
});