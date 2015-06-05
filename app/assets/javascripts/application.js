// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

var ready;
ready = function() {
  var eye = $(".eye");
  var box = eye.children("img");
  boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2+225];

  $(document).mousemove(function(e){


    var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);
    console.log('pagex' + e.pageX);
    console.log(e.pageY);
    console.log(boxCenter);
    console.log(angle);
      box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});
      box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
      box.css({ 'transform': 'rotate(' + angle + 'deg)'});

  });


};


$(document).ready(ready);
$(document).on('page:load', ready);
