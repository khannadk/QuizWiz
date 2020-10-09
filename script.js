{/* <script> */}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  //call q1a and q1b
  // if q1a chosen, "correct"/if q1b "wrong"  

// var qb1 = true;

//   if(qb1 === true){
//     $("#flash").text("correct")
//   }esle  ($("#flash").text("Wrong!"));

$(document).ready(function() {
 


$("q1a").on("click", function() {
  $("#flash").append("Correct!");
  // alert("whoops");
});

});
// </script>