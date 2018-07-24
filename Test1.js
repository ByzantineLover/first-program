$(document).ready(function () {
    $("*").keypress(function () {
        $("*").css("color", "black").animate({
            left: '0px',
            opacity: '1.0',
        }, 2500).show();
    });
    $("button").on({
        click: function () {
            $("*").css("color", "red");
        },
        dblclick: function () {
            $("p").fadeToggle("slow").fadeTo("fast", 0.05).animate({
                left: '250px',
            });
        },
        mouseenter: function () {
            $("button").css("backgroundColor", "cyan");
        },
        mouseleave: function () {
            $("button").css("backgroundColor", "lightgrey");
        }
    });
    $("p").mouseover(function () {
        $(this).css("backgroundColor", "yellow");
    });
    $("p").mouseleave(function () {
        $(this).css("backgroundColor", "white");
    });

});