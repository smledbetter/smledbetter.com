// This is js for the site smledbetter.com

// nav
 (function() {
    var header = document.querySelector(".main-nav-trigger");

    if(window.location.hash) {
      header.classList.add("is-visible");
    }

		var headroom = new Headroom(header, {
		  "offset": 205,
		  "tolerance": 5,
		  "classes": {
		    "initial": "is-visible",
		    "pinned": "is-visible",
		  }
		});
    headroom.init();

}());


$('.main-nav-trigger').click(function(){

  if($(this).hasClass('is-visible')) {
  if ($(this).hasClass('is-closeable'))  {
  $('.main-nav').removeClass('is-visible'),
  $('.main-nav-trigger').removeClass('is-closeable');
} else {
  $('.main-nav').addClass('is-visible'),
  $('.main-nav-trigger').addClass('is-closeable');
}
}
});
