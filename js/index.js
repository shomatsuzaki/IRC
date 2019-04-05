$(document).ready(function() {

	window.onload = function() {
		var w = window.innerWidth;

		if (w >= 1700) {
			$('#img1440').css("width", "1700px");
			$('#img1440').fadeIn(700);
		} else if (w >= 1440) {
			$('#img1440').css("width", "100%");
			$('#img1440').fadeIn(700);
		} else if (w >= 1400) {
			$('#img1400').fadeIn(700);
		} else if (w >= 1350) {
			$('#img1350').fadeIn(700);
		} else if (w >= 1300) {
			$('#img1300').fadeIn(700);
		} else if (w >= 1250) {
			$('#img1250').fadeIn(700);
		} else if (w >= 1200) {
			$('#img1200').fadeIn(700);
		} else if (w >= 1150) {
			$('#img1150').fadeIn(700);
		} else if (w >= 1100) {
			$('#img1100').fadeIn(700);
		} else if (w >= 1050) {
			$('#img1050').fadeIn(700);
		} else if (w >= 1000) {
			$('#img1000').fadeIn(700);
		} else if (w >= 950) {
			$('#img950').fadeIn(700);
		} else if (w >= 900) {
			$('#img900').fadeIn(700);
		} else if (w >= 850) {
			$('#img850').fadeIn(700);
		} else if (w >= 800) {
			$('#img800').fadeIn(700);
		} else if (w >= 750) {
			$('#img750').fadeIn(700);
		} else if (w >= 700) {
			$('#img700').fadeIn(700);
		} else if (w >= 650) {
			$('#img650').fadeIn(700);
		} else if (w >= 600) {
			$('#img600').fadeIn(700);
		} else if (w >= 550) {
			$('#img550').fadeIn(700);
		} else if (w >= 520) {
			$('#img520').fadeIn(700);
		}
		// else if (w >= 500) {
		// 	$('#img500').fadeIn(700);
		// }
		else if (w >= 480) {
			$('#img480').fadeIn(700);
		}
		// else if (w >= 460) {
		// 	$('#img460').fadeIn(700);
		// }
		else if (w >= 445) {
			$('#img445').css("width", "445px");
			$('#img445').fadeIn(700);
		} else if (w >= 200) {
			$('#img445').css("width", "100%");
			$('#img445').fadeIn(700);
		}
	};

	window.onresize = function() {
		var w = window.innerWidth;

		if (w >= 1700) {
			$('#img1440').css("width", "1700px");
			$('#img1440').show();
			$('#img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
		} else if (w >= 1440) {
			$('#img1440').css("width", "100%");
			$('#img1440').show();
			$('#img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
		} else if (w >= 1400) {
			$('#img1440, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1400').show();
		} else if (w >= 1350) {
			$('#img1440, #img1400, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1350').show();
		} else if (w >= 1300) {
			$('#img1440, #img1400, #img1350, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1300').show();
		} else if (w >= 1250) {
			$('#img1440, #img1400, #img1350, #img1300, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1250').show();
		} else if (w >= 1200) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1200').show();
		} else if (w >= 1150) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1150').show();
		} else if (w >= 1100) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1100').show();
		} else if (w >= 1050) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1050').show();
		} else if (w >= 1000) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1000').show();
		} else if (w >= 950) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img950').show();
		} else if (w >= 900) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img900').show();
		} else if (w >= 850) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img850').show();
		} else if (w >= 800) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img800').show();
		} else if (w >= 750) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img750').show();
		} else if (w >= 700) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img700').show();
		} else if (w >= 650) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img650').show();
		} else if (w >= 600) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img600').show();
		} else if (w >= 550) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img550').show();
		} else if (w >= 520) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img500, #img480, #img460, #img445').hide();
			$('#img520').show();
		}
		// else if (w >= 500) {
		// 	$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img480, #img460, #img445').hide();
		// 	$('#img500').show();
		// }
		else if (w >= 480) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img460, #img445').hide();
			$('#img480').show();
		}
		// else if (w >= 460) {
		// 	$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img445').hide();
		// 	$('#img460').show();
		// }
		else if (w >= 445) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460').hide();
			$('#img445').css("width", "445px");
			$('#img445').show();
		} else if (w >= 200) {
			$('#img445').css("width", "100%");
		}
	};

	$('#img445').click(function () {
		var url = 'https://rescue.org';
		var win = window.open(url, "_blank", "width=1366,height=768");
  		win.focus();
	});

});





