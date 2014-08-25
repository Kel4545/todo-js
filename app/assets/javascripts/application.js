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



$(document).ready(function() {
  $('body').append("<h1>Todoly</h1>");
  $("body").append("<form><form name=checkListItem><input type=text id=checkListItem></form>");
  $("form").append("<button>Create ToDo</button>");
  $("button").one("click", function() {
    $("body").append("<h2>ToDo!</h2>")
  });

  $('button').click(function (e) {
    e.preventDefault();
     var checkListItem = $("#checkListItem").val();
     $('body').append("<li>" + checkListItem + "</li>")
     $('')
    setTimeout(hideFlashes, 2000);
  });
});



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





