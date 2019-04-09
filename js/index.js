$(document).ready(function() {
	
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	    $('body').css("background-color", "#000");
	    $('#mobilesplash').show();
	    $('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
	}

	//need counter to determine if window is shrinking or growing
	var prev = 0;
	//need booleans to check if modals and header are displayed
	var modal1on = false;
	var modal2on = false;
	var modal3on = false;
	var headeron = false;

	window.onload = function() {
		var w = window.innerWidth;
		prev = w;

		if (w >= 1700) {
			$('#img1440, #mainheader, #pointer').css("width", "1700px");
			$('#img1440, #mainheader').fadeIn(700);
			$('#pointer').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
			headeron = true;
		} else if (w >= 1440) {
			$('#img1440, #pointer').css("width", "100%");
			$('#img1440, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
		} else if (w >= 1400) {
			$('#img1400, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer').css({width: "1340px", height: "728px", left: "55px"});
			$('#pointer').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
		} else if (w >= 1350) {
			$('#img1350, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer').css({width: "1280px", height: "728px", left: "65px"});
			$('#pointer').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
		} else if (w >= 1300) {
			$('#img1300, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer2').css({width: "1500px", height: "728px", left: "-200px"});
			$('#pointer2').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 1250) {
			$('#img1250, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer2').css({width: "1440px", height: "735px", left: "-195px", top: "-8px"});
			$('#pointer2').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 1200) {
			$('#img1200, #mainheader').fadeIn(700);
			headeron = true;
			$('#pointer2').css({width: "1390px", height: "748px", left: "-190px", top: "-18px"});
			$('#pointer2').delay(1000).fadeIn(300).delay(300).fadeOut(300).delay(300).fadeIn(300).delay(300).fadeOut(300);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 1150) {
			$('#img1150, #mainheader').fadeIn(700);
			headeron = true;
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 1100) {
			$('#img1100').fadeIn(700);
		} else if (w >= 1050) {
			$('#img1050').fadeIn(700);
		} else if (w >= 1000) {
			$('#img1000').fadeIn(700);
			$('#modal2').css("left", "570px");
			$('#modal2').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal2on = true;
		} else if (w >= 950) {
			$('#img950').fadeIn(700);
			$('#modal2').css("left", "520px");
			$('#modal2').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal2on = true;
		} else if (w >= 900) {
			$('#img900').fadeIn(700);
			$('#modal2').css("left", "470px");
			$('#modal2').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal2on = true;
		} else if (w >= 850) {
			$('#img850').fadeIn(700);
			$('#modal2').css("left", "420px");
			$('#modal2').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal2on = true;
		} else if (w >= 800) {
			$('#img800').fadeIn(700);
		} else if (w >= 750) {
			$('#img750').fadeIn(700);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 700) {
			$('#img700').fadeIn(700);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
		} else if (w >= 650) {
			$('#img650').fadeIn(700);
			$('#modal1').fadeIn(700);
			console.log("Window is " + w + " and previous was n/a");
			modal1on = true;
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
			if (prev < w) {
				$('#mainheader').css("width", "1700px");
			}
		} else if (w >= 1440) {
			$('#img1440').css("width", "100%");
			$('#img1440').show();
			$('#img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			if (prev > w) {
				$('#mainheader').css("width", "100%");
			}
		} else if (w >= 1400) {
			$('#img1440, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1400').show();
		} else if (w >= 1350) {
			$('#img1440, #img1400, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1350').show();
		} else if (w >= 1300) {
			$('#img1440, #img1400, #img1350, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1300').show();
			//modal1 fades in/out
			if (prev > w && !modal1on) {
				$('#modal1').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal1on = true;
			} else if (prev < w && modal1on) {
				$('#modal1').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal1on = false;
			}
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
			//modal1 fades in/out
			if (prev > w && modal1on) {
				$('#modal1').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal1on = false;
			} else if (prev < w && !modal1on) {
				$('#modal1').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal1on = true;
			}
			if (prev > w && headeron) {
				$('#mainheader').fadeOut(300);
				headeron = false;
			} else if (prev < w && !headeron) {
				$('#mainheader').fadeIn(300);
				headeron = true;
			}
		} else if (w >= 1050) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1050').show();
		} else if (w >= 1000) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img1000').show();
			//modal2 fades in/out
			if (prev > w && !modal2on) {
				$('#modal2').css("left", "570px");
				$('#modal2').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal2on = true;
			} else if (prev < w && modal2on) {
				$('#modal2').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal2on = false;
			}
		} else if (w >= 950) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img900, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img950').show();
			$('#modal2').css("left", "520px");
		} else if (w >= 900) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img850, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img900').show();
			$('#modal2').css("left", "470px");
		} else if (w >= 850) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img800, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img850').show();
			$('#modal2').css("left", "420px");
		} else if (w >= 800) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img750, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img800').show();
			$('#modal2').css("left", "370px");
			//modal2 fades in/out
			if (prev > w && modal2on) {
				$('#modal2').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal2on = false;
			} else if (prev < w && !modal2on) {
				$('#modal2').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal2on = true;
			}
		} else if (w >= 750) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img700, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img750').show();
			//modal3 fades in/out
			if (prev > w && !modal3on) {
				$('#modal3').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal3on = true;
			} else if (prev < w && modal3on) {
				$('#modal3').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal3on = false;
			}
		} else if (w >= 700) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img650, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img700').show();
		} else if (w >= 650) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img600, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img650').show();
		} else if (w >= 600) {
			$('#img1440, #img1400, #img1350, #img1300, #img1250, #img1200, #img1150, #img1100, #img1050, #img1000, #img950, #img900, #img850, #img800, #img750, #img700, #img650, #img550, #img520, #img500, #img480, #img460, #img445').hide();
			$('#img600').show();
			//modal3 fades in/out
			if (prev > w && modal3on) {
				$('#modal3').fadeOut(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal3on = false;
			} else if (prev < w && !modal3on) {
				$('#modal3').fadeIn(300);
				console.log("Window is " + w + " and previous was " + prev);
				modal3on = true;
			}
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

		//set previous counter to remember last size
		prev = w;
	};

	//link out to donation page
	$('#img445').click(function () {
		var url = 'https://rescue.org';
		var win = window.open(url, "_blank", "width=1366,height=768");
  		win.focus();
	});

});





