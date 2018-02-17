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
