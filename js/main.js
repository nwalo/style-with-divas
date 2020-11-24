  $(function () {

    // Toggle when an item is selected and display the selected items on cart.
    $('#products button i').on('click', function (e) {
      var color = $(this).hasClass('black');

      if(color === true){
        $(this).removeClass("far fa-heart black");
        $(this).addClass("fas fa-heart red");
        var app = $(this).attr("class");
        var num = $('.fas.fa-heart.red').length;
        $('nav small').html(num);
        console.log(app, num);
      }
      else if(color === false ){
        $(this).removeClass("fas fa-heart red");
        $(this).addClass("far fa-heart black");
        var app = $(this).attr("class");
        var num = $('.fas.fa-heart.red').length;
        $('nav small').html(num);
        console.log(app, num);
      }
    });

});
