/**
 * Created by manhnv on 8/31/17.
 */
$(document).ready(function () {
    app.init();
});

var app = {};
app.init = function () {
    $(window).on('hashchange', function () {
        app.load();
    });

    $('#menu-navbar li').removeClass('active');
    $('#menu-navbar li').click(function () {
        //set active menu every clicked
        $('#menu-navbar li').removeClass('active');
        $(this).addClass('active');
    });

    //load current page
    app.load();
};


app.load = function () {
    var router = window.location.hash.trim();
    var url;
    if (router == '') {
        url = '/site/dashboard';
    } else {
        url = '/' + router.slice(1, router.length);
    }

    $.ajax({
        url: url,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Ignore-Layout-Renderer", true);
        }
    }).done(function (data) {
        document.title = $(data).find('.page-header').text();
        $('#page-wrapper').html(data);
    });
};

