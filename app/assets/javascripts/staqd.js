$(function(){

  $('#push_btn').click(add_box);
  $('#pop_btn').click(remove_box);

});

function add_box(){
  var color = $('input[name=color_field]').val();

    $.ajax({
    type: "POST",
    url: "/",
    data: { color: color }

  }).done(function( msg ) {
  });

}

function remove_box(){
  $('#')

}