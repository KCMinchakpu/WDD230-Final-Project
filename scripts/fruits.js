$(document).ready(  function(){
  var url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
  $.getJSON(url, function(data) {
    $.each(data, function(i, field){
      $('.fruitSelect').append('<option data-carbohydrates="'+ field.nutritions.carbohydrates +
        '" data-carbohydrates="'+ field.nutritions.carbohydrates +
        '" data-protein="'+ field.nutritions.protein +
        '" data-fat="'+ field.nutritions.fat +
        '" data-calories="'+ field.nutritions.calories +
        '" data-sugar="'+ field.nutritions.sugar +
        '" data-name="'+ field.name +
        '" value="' + field.name + '">' + field.name + '</option>');
    });
  });
 $(".fruitSelect").change( function (){
  var carbohydrates = $(this).find(':selected').data('carbohydrates');
 });

 $("#btnSubmit").click( function(){
  var fruit1 = $("#fruit1").find(':selected').data('name');
  var fruit2 = $("#fruit2").find(':selected').data('name');
  var fruit3 = $("#fruit3").find(':selected').data('name');

  var total_carbohydrates = 0;
  var total_protein = 0;
  var total_fat = 0;
  var total_calories = 0;
  var total_sugar = 0;

  var fullname = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();



  $('.fruitSelect').each(function(i, obj) {

      

      var carbohydrates = $(this).find(':selected').data('carbohydrates');
      total_carbohydrates += carbohydrates;

      var protein = $(this).find(':selected').data('protein');
      total_protein += protein;

      var fat = $(this).find(':selected').data('fat');
      total_fat += fat;

      var calories = $(this).find(':selected').data('calories');
      total_calories += calories;

      var sugar = $(this).find(':selected').data('sugar');
      total_sugar += sugar;
  });

  var information = "<div class='container'>"+
                    "<div><strong>Name:</strong> "+fullname+"</div>"+
                    "<div><b>Phone:</b> "+phone+"</div>"+
                    "<div><b>Email:</b> "+email+"</div>"+
                    "<div><b>Messasge:</b> "+message+"</div>"+
                    "<h3><b>Fruits:<b></h3>"+ 
                    "<span class='label label-primary'>"+fruit1+"</span>"+
                    "<span class='label label-danger'>"+fruit2+"</span>"+
                    "<span class='label label-info'>"+fruit3+"</span>"+
                    "<h3>Nutritions:</h3>"+ 
                      "<ul class='container list-group' style='color: #000;'>"+
                      "<li >Carbohydrates: "+total_carbohydrates+"</li>"+
                      "<li >Protein: "+total_protein+"</li>"+
                      "<li >Fat: "+total_fat+"</li>"+
                      "<li >Calories: "+total_calories+"</li>"+
                      "<li >Sugar: "+total_sugar+"</li>"+
                      +"</ul></div>";
  $("#divResult").html(information);
  $('#myModal').modal('show');

 });
});
