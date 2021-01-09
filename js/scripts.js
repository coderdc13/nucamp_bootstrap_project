$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        // $(".carousel").carousel("pause);")
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");

        }
    });

/*
Below Is Week Four, Task Two of Three, 1/3
Add JavaScript (in the form of jQuery) to the scripts.js file that will activate the Reserve Campsite and Login modals when the corresponding button is clicked.

*/


$("#reserveButton").click(function() {
    $("#reserveModal").modal("show");
});

$("#loginButton").click(function() {
    $("#loginModal").modal("show");
});

});


/*
Above Is Week Four, Task Two of Three, 1/3
Add JavaScript (in the form of jQuery) to the scripts.js file that will activate the Reserve Campsite and Login modals when the corresponding button is clicked.

*/

/*
Below Is Week Four, Task Two of Three, 2/3
To figure out how to do this, refer back to how you used the click() jQuery method with the carousel Play/Pause button to trigger an action. 

The best answer that the student author (me, Franklin Bueno) can provide is that the student author copied the jQuery structure... 

Above Is Week Four, Task Two of Three, 2/3
To figure out how to do this, refer back to how you used the click() jQuery method with the carousel Play/Pause button to trigger an action. 
*/

/*
Below Is Week Four, Task Two of Three, 3/3
Also refer to the Bootstrap documentation on how to show a modal using JavaScript (jQuery): Bootstrap Modal Usage Via JavaScript.

In https://getbootstrap.com/docs/4.0/components/modal/#via-javascript, the student author definitely leveraged the helpful code snippet that was 

".modal('show')
Manually opens a modal. Returns to the caller before the modal has actually been shown (i.e. before the shown.bs.modal event occurs).
$('#myModal').modal('show')"

Above Is Week Four, Task Two of Three, 3/3
Also refer to the Bootstrap documentation on how to show a modal using JavaScript (jQuery): Bootstrap Modal Usage Via JavaScript.
*/