//for showing the chat conversation while click
$(document).ready(function () {

    $(".chat2").click(function () {
        $("#c2-jegan").show();
    });

    $(".i3").click(function (e) {
        var vas = $(".dot-menu").is(":hidden");
        if (vas) {
            $(".dot-menu").show();
        } else {
            $(".dot-menu").hide();
        }
        e.stopPropagation();
    });

    // for context menu
    $(".cht").each(function () {
        $(this).bind("contextmenu", function () {
            $("#right-click-menu").show();
            event.preventDefault();
        })
    })

    // for disable the right click
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    }


    //for click somewere to hide the div
    $(document).click(function (e) {
        if (!$("#dot-menu").is(":hidden")) {
            $("#dot-menu").hide();
        }
    });



    //for menu show and hide profile info
    $("#profile-pic").click(function () {
        $("#profile-vasu").show();
    });

    $("#pro-vasu-img").click(function () {
        $("#profile-vasu").hide();
    });

    //for menu show and hide profile info animation
    $("#profile-pic").click(function () {
        $("#profile-vasu").animate({ width: "show" }, "fast")
    })


    //for viewing the status
    $("#i1").click(function () {
        $("#status").show();
    });
    $("#close-btn").click(function () {
        $("#status").hide();
    });


    //for viewing the chat
    $("#i2").click(function () {
        $("#new-chat").show();
    });
    $("#left-arrow").click(function () {
        $("#new-chat").hide();
    });






    var clonex = $(".chat1")
    for (i = 0; i < data.length; i++) {
        var cloned = clonex.clone();
        // var x = "a000" + i;
        $(".layer1-left-c").append(cloned);
        $(cloned).find(".chat-1-img img").attr("src", data[i].img);
        $(cloned).find(".name").html(data[i].name);
        $(cloned).find(".time").html(data[i].time);
        $(cloned).find(".phto").html(data[i].description);
        $(cloned).find(".num").remove();
        $(cloned).find(".camera").remove();

    }
    $(".chat1").bind("click", function () {
        $("#c2-jegan").show();
        var img = $(this).find(".chat-1-img img").attr("src");
        var name = $(this).find(".name").html();
        $("#c2-jegan").find(".jegan-img img").attr("src", img);
        $("#c2-jegan").find(".jegan-img p").html(name);
    });


    
    var clonex1 = $("#st-lft-2")
    for (i = 2; i < data1.length; i++) {
        var cloned1 = clonex1.clone();
        $(".status-scroll").append(cloned1);
        $(cloned1).find("#status-img").attr("src", data1[i].img);
        $(cloned1).find("#status-name").html(data1[i].name);
        $(cloned1).find("#status-time").html(data1[i].time);
    }

    //for filtering the contacts
    $("#search-cont").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".chat1").filter(function () {
            $(this).toggle($(this).find("#name").text().toLowerCase().indexOf(value) > -1)
            
        });
    });



});















