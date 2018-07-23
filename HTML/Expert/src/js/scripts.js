// // Dropdown Menu Fade    
// $(document).ready(function(){
//     $(".nav__item").hover(
//         function() { $('.submenu', this).fadeIn();
//         },
//         function() { $('.submenu', this).fadeOut();
//     });
// });


//Modal


var modal = document.getElementById('modalMenu');

var btn = document.getElementById("modalMenuBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}