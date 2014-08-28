// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  var body = $('body');
  body.append("<h1>Todoly</h1>");
  body.append("<form><form name=checkListItem><input type=text id=checkListItem></form>");
  $("form").append("<button>Create ToDo</button>");



  $("button").one("click", function () {
    body.append("<h2>ToDo!</h2>");
  $('h2').before("<div id='Completed'>Completed</div>");
    });


  $('button').click(function (e) {
    e.preventDefault();
    var checkListItem = $("#checkListItem").val();

    $.ajax({
      type: "POST",
      url: "/todos",
      data: { todo: { name: checkListItem }}
    })

    $('h2').append("<li class='checkListItem'>" + checkListItem + "<p id='close'> X </p>", "<p id='check'>&#10003</p>");
    $("check").css({"display": "inline"})

    $.ajax({
      url: '/todos',
      type: "GET"
    })

    $('p').css({"display": "inline"});
    $('#checkListItem').val("")
    $('h2').before("<div id='flash'>Todo Created<p id='closed'>X</p></div>");
    $('#flash').fadeOut(5000, function () {
      $(this).remove();
    })
  });

  body.on('click', '#closed', function () {
    $('#flash').remove();
  });


  body.on('click', '#close', function () {

    body.on('click', '#close', function () {
      $('.checkListItem').remove();
      $('h2').before("<div id='deleteflash'>Todo deleted<p id='closeDelete'>X</p></div>");


      $.ajax({
        type: "DELETE",
        url: '/todos/:id'
      })

      $('#deleteflash').fadeOut(5000, function () {
        $(this).remove();
      });

      body.on('click', '#closeDelete', function () {
        $('#deleteflash').remove();
      });



      body.on('click', '#check', function () {
        $('h2').before("<div id='completeflash'>Todo Completed<p id='closeflash'>X</p></div>");
        $('#completeflash').fadeOut(5000, function () {
          $(this).remove();
        });
      });
    });
  });
});


// $(body).on('click', '#closeDelete', function() {
//   $('#deleteFlash').remove();
// });


// var html = "";
// html += "<h1>Todoly</h1>";
// html += "<form>";
// html += "<input type='text' name 'todo' />";
// $('body').append(html);
// });


// var todos = "";
// todos += "<h2>ToDo!</h2>"

// $("form").on("submit", function () {
//  alert("Clicked");    // creates a pop up that says clicked
// });

//  $("form").on("submit", function (e) {
//    e.preventDefault();
//    var todo =
//  }





