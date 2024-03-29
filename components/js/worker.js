function svg(a = "white", t = "black", e = "Technology", o = "name", r = "black", l = "black") {
    return ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="114" height="20" role="img" aria-label="custom svg"><title>custom svg</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="114" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="69" height="20" fill="' + a + '"/><rect x="69" width="45" height="20" fill="' + t + '"/><rect width="114" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="590">' + e + '</text><text x="355" y="140" transform="scale(.1)" fill="' + r + '" textLength="590">' + e + '</text><text aria-hidden="true" x="905" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">' + o + '</text><text x="905" y="140" transform="scale(.1)" fill="' + l + '" textLength="350">' + o + "</text></g></svg>"
}

function lightOrDark(a) {
    return a.match(/^rgb/) ? (a = a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/), r = a[1], g = a[2], b = a[3]) : (a = +("0x" + a.slice(1).replace(a.length < 5 && /./g, "$&$&")), r = a >> 16, g = a >> 8 & 255, b = 255 & a), hsp = Math.sqrt(r * r * .299 + g * g * .587 + b * b * .114), hsp > 127.5 ? "black" : "white"
}

function ranColor() {
    return ("#" + (16777215 * Math.random() << 0).toString(16).padStart(6, "0")).toString()
}
$(document).ready(function() {
    $("#project-container").html('<img src="components/img/gif5.gif" alt="Loading.." id="load">');
    var a = 0;
    if (null != localStorage.getItem("mode") || null != localStorage.getItem("mode")) {
        var t = JSON.parse(localStorage.getItem("mode"));
        $("#main_nav").removeClass(t.remove), $("#main_nav").addClass(t.add), $("body").css("background-color", t.body_color), $("body").css("color", t.link), $(".para").css("background-color", t["para-bg"]), $(".para").css("color", t["para-col"]), $("#load").css("filter", t.load), a = t.x
    }! function a() {
        if (navigator.onLine) {
            var t = {};
            $.post("https://script.google.com/macros/s/AKfycbwi1CH-KOYCOiyo7IjUOjVeHqfcH3uFVMf-bCkwXQVsmI51oAjI/exec", {
                req: "r"
            }, function(a, e) {
                $("#load").remove();
                var o = 0;
                a.forEach(a => {
                    var e = Math.floor(1e3 * Math.random()) + 1;
                    t.link = a.link, t.name = a.name, t.t1 = a.text1, t.t2 = a.text2, t.description = a.description, localStorage.setItem("app" + o.toString(), JSON.stringify(t));
                    var r = ranColor(),
                        l = ranColor();
                    $("#project-container").append('<div class="column"><div class="card proj-card"><center><span  class="proj-heading ">' + a.name + '</span><br><span id="' + e + '" class="des-svg"></span></center><div><a class="btn btn-primary proj-btn" href="'+a.link.toString()+'" target="_blank" >View Project</a></div></div> </div>'), $("#" + e).html(svg(color1 = r, color2 = l, text1 = a.text1, text2 = a.text2, t1col = lightOrDark(r), t2col = lightOrDark(l))), o++
                });
                var r = document.getElementsByTagName("body")[0],
                    l = document.defaultView.getComputedStyle(r, null).getPropertyValue("background-color");
                $(".proj-heading").css("color", lightOrDark(l).toString())
            })
        } else setTimeout(() => {
            a()
        }, 1e3)
    }(), $("#send").click(function() {
        "" == $("#name").val() ? alert("Name box is empty") : "" == $("#company_name").val() ? alert("Mention your company name") : "" == $("#email").val() ? alert("email box is empty") : "" == $("#message").val() ? alert("Message box is empty") : function() {
            $("#send").removeClass("btn-primary"), $("#send").addClass("btn-info text-black"), $("#send").html("Sending... <img id='gif2' src='components/img/gif2.gif'>"), $(".read").attr("readonly", !0), $("#send").attr("disabled", !0);
            var a = new Date;
            $.get("https://script.google.com/macros/s/AKfycbxio_v12Dj_TI3kLZdCcfi1f3Vq6K2yrRA3zfxvuEvpgK0WMc6z_tC1HsDuU0B9L2VaNw/exec", {
                date: a,
                name: $("#name").val(),
                email: $("#email").val(),
                company: $("#company_name").val(),
                message: $("#message").val()
            }, function(a, t) {
                "SUCCESS" == a.status ? ($("#send").removeClass("btn-info text-black"), $("#send").addClass("btn-success"), $("#send").html("Sent")) : ($("#send").html("Send"), $("#send").removeClass("btn-info text-black"), $("#send").addClass("btn-primary"), $(".read").attr("readonly", !1), $("#send").attr("disabled", !1), alert("Fail tosend message"))
            })
        }()
    }), 0 == a ? $(".intro").width() <= 542 ? $(".para").css("color", "black") : $(".para").css("color", "white") : ($(".intro").width(), $(".para").css("color", "white")), $(window).resize(function() {
        0 == a ? $(".intro").width() <= 542 ? $(".para").css("color", "black") : $(".para").css("color", "white") : ($(".intro").width(), $(".para").css("color", "white"))
    }), $("#colormode").click(function() {
        var t = {};
        0 == a ? (a = 1, $("body").css("color", "white"), $(".para").css("background-color", "rgba(255, 255, 255, 0.2)"), $(".para").css("color", "white"), $("#main_nav").removeClass("navbar-default"), $("#main_nav").addClass("navbar-inverse"), $("body").css("background-color", "rgb(0, 0, 0,0.8)"), $(".link").css("color", "white"), $("#load").css("filter", "invert(80%)"), $("#information").css("color", "white"), $(".proj-heading").css("color", "white"), t.remove = "navbar-default", t.add = "navbar-inverse", t.load = "invert(80%)", t.info = "white", t.body_color = "rgb(0, 0, 0,0.8)", t.link = "white", t["para-col"] = "white", t["para-bg"] = "rgba(255, 255, 255, 0.2)", t.x = 1, localStorage.setItem("mode", JSON.stringify(t))) : (a = 0, $(".para").css("background-color", "rgba(0, 0, 0, 0.1)"), $(".intro").width() <= 542 ? ($(".para").css("color", "black"), t["para-col"] = "black") : ($(".para").css("color", "white"), t["para-col"] = "white"), $(".proj-heading").css("color", "black"), $("#main_nav").removeClass(), $("body").css("color", "black"), $("#load").css("filter", "invert(0%)"), $("#main_nav").addClass("navbar navbar-default"), $("body").css("background-color", "white"), $(".link").css("color", "black"), $("#information").css("color", "rgb(0, 0, 0,0.8)"), t.remove = "navbar-inverse", t.load = "invert(0%)", t.add = "navbar-default", t.body_color = "white", t.info = "rgb(0, 0, 0,0.8)", t.link = "black", t["para-bg"] = "rgba(0, 0, 0, 0.1)", t.x = 0, localStorage.setItem("mode", JSON.stringify(t)))
    })
});