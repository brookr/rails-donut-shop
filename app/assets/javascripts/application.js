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
$(function() {
  var goForDonut = function(e) {
    var getDonutMessage = "Let's go get one!";
    var wantDonutMessage = document.getElementById('want-donut');
    wantDonutMessage.textContent = getDonutMessage;
  }

  var donutEl = document.getElementById('want-donut');
  donutEl.addEventListener('mouseover', goForDonut, false);

  var noDonut = function(e) {
    var noDonutMessage = "Great. Now I want a donut.";
    var noWantDonutMessage = document.getElementById('want-donut');
    noWantDonutMessage.textContent = noDonutMessage;
  }

  var noDonutEl = document.getElementById('want-donut');
  noDonutEl.addEventListener('mouseout', noDonut, false);
})
