$(document).ready(function() {
    $(".btn").click(function() {
        $("p").hide()
    })
})

$(document).ready(function() {
    $(".btn2").click(function() {
        $("li").hide()
    })
})

$(document).ready(function() {
    $(".alert").click(function() {
        alert("You clicked me")
    })
})

$(document).ready(function() {
    $(".thisClass").click(function() {
        $(this).hide()
    })
})

$(document).ready(function() {
    $("h2").hover(function() {
        alert("You entered")
    }, 
    function() {
        alert("You left")
    })
})

$(document).ready(function() {
    $(".multiple-events").on({
        mouseenter: function() {
            $(this).css("background-color", "lightblue")
        },
        mouseleave: function() {
            $(this).css("background-color", "dodgerblue")
        },
        click: function() {
            $(this).css("background-color", "yellow")
        }
    })
})

$(document).ready(function() {
    $(".show").click(function() {
        $(".show-hide").show()
    });
    $(".hide").click(function() {
        $(".show-hide").hide()
    });
})

$(document).ready(function() {
    $(".toggle-btn").click(function() {
        $(".heading-3").toggle()
    })
})


$(document).ready(function() {
    $(".txt").click(function() {
        alert("Text: " + $(".text").text())
    })
    $(".html").click(function() {
        alert("Text with html: " + $(".text").html())
    })
})

$(document).ready(function() {
    $("#value").click(function() {
        alert("Your value: " + $("#val").val())
    })
})

$(document).ready(function() {
    $("#set-txt").click(function() {
        $(".set-text").text("Change to jquery text")
    })
    $("#set-htm").click(function() {
        $(".set-html").html("<strong>This text contains strong text</strong>")
    })
    $("#set-val").click(function() {
        $("#input-val").val("donald duck")
    })
})

$(document).ready(function() {
    $("#append-txt").click(function() {
        $(".append-text").append(" some text added")
    })
    $("#append-li").click(function() {
        $(".append-list").append("<li>list item</li>")
    })
})

$(document).ready(function() {
    $("#prepend-txt").click(function() {
        $(".prepend-text").prepend("Text added at beginning ")
    })
    $("#prepend-li").click(function() {
        $(".prepend-list").prepend("<li>List prepend</li>")
    })
})

const txt1 = "<p>This is some text added with some variables</p>"
const txt2 =  $("<p></p>").text("This is some text added with jquery method")
const txt3 = document.createElement("h1")
txt3.innerHTML = "This heading three added with pure vanilla javascript"

$("body").append(txt1, txt2, txt3)

$(document).ready(function() {
    $("#after").click(function() {
        $(".before-after").after("<p>Added after</p>")
    })
    $("#before").click(function() {
        $(".before-after").before("<p>Text is added after</p>")
    })
})

$(document).ready(function() {
    let ele1 = "First element"
    let ele2 = $("<p></p>").text("This another element")
    let ele3 = document.createElement("h4")
    ele3.textContent = "This is third time text"

    $("#add-elements").click(function() {
        $(".elements").after(ele1, ele2, ele3)
    })
})

$(document).ready(function() {
    $("#remove-element").click(function() {
        $(".remove-elements").remove()
    })
})

$(document).ready(function() {
    $("#remove-child").click(function() {
        $(".remove-child-elements").empty()
    })
})

$(document).ready(function() {
    $("#remove-test").click(function() {
        $("p").remove(".test")
    })
})

$(document).ready(function() {
    $("#multiple-ele").click(function() {
        $("h3").remove(".demo, .demo-2")
    })
})

