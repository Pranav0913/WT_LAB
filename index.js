// Hide the element when the 'Hide' button is clicked
$(".hide").on("click", function() {
    $(".hi").hide();
});

// Function to hide the element with an alert
function hide() {
    alert("hidden");
    $(".hi").hide();
}

// Show the element when the 'Show' button is clicked
$(".show").on("click", function() {
    $(".hi").show();
});

// Slide the element up when the 'Slide Up' button is clicked
$(".slideUp").on("click", function() {
    $(".hi").slideUp();
});

// Slide the element down when the 'Slide Down' button is clicked
$(".slideDown").on("click", function() {
    $(".hi").slideDown();
});

// Hide the element when the 'Double Click' event occurs
$(".dbclick").on("dblclick", function() {
    $(".hi").hide();
});

// Hide the element when the 'Mouseover' event occurs
$(".mouseover").on("mouseover", function() {
    $(".hi").hide();
});

// Load content from 'abc.txt' when the 'AJAX' button is clicked
$(".ajax").on("click", function() {
    $(".div1").load("abc.txt", function(response, status, xhr) {
        if (status == "success") {
            console.log("Content loaded successfully!");
        } else {
            console.log("Error loading content: " + xhr.status);
        }
    });
});
