$(document).ready(function() {
    $("#hide-pg").click(function() {
        $(".hide-p").hide()
    })
})

$(document).ready(function() {
    $("#hide-para").click(function() {
        $("#hide-id").hide()
    })
})

$(document).ready(function() {
    $(".heading-1").click(function() {
        $(this).hide()
    })
})

$(document).ready(function() {
    $("h4").html("Hello world")
})

$(document).ready(function() {
    $(".alert").click(function() {
        alert("Hello world")
    })
})

$(document).ready(function() {
    $(".style").css("color","orange")
})

$(document).ready(function() {
    $(".change-bg").css("background-color","lightgray")
})

$(document).ready(function() {
    $("#change-color").css("background-color","lightblue")
})

$(document).ready(function() {
    $(".click-event").click(function() {
        alert("You clicked on heading tag")
    })
})

$(document).ready(function() {
    $(".mouse-enter").mouseenter(function() {
        $(".mouse-enter").css("background-color","orange")
    })
})

$(document).ready(function() {
    $(".mouse-leave").mouseleave(function() {
        $(".mouse-leave").css("background-color","yellow")
    })
})

$(document).ready(function() {
    $(".mouse-down").mousedown(function() {
        alert("Mouse down even")
    })
})

$(document).ready(function() {
    $(".mouse-up").mouseup(function() {
        $(".mouse-up").css("background-color","tomato")
    })
})

$(document).ready(function() {
    $(".alert-clk").click(function() {
        alert($(this).html())
    })
})

$(document).ready(function() {
    $(".attr-values").click(function() {
        let text1 = $(".attrs").attr("id")
        let text2 = $(".attrs").attr("name")
        $(".attr-value1").text(text1)
        $(".attr-value2").text(text2)
    })
})