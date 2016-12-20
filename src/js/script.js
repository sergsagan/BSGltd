$(function() {

    $("head").append("<link rel='stylesheet' type='text/css' href='css/vendor.css' />");

    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
	//anchor links
	
	/*$(".navbar-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});*/
	
	$('nav li a').click(function () {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
		return true;
	});
	
	//Scroll Top
	
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('.header').fadeIn('fast').addClass("fixed");
		} else {
			$('.header').fadeOut('fast').removeClass("fixed");
		}
	});
	
	
	//modal
	
	$('.slider .page-indicator').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#menu').css('display', 'block');
			$('#menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('#overlay, a').click( function(){
		$('#menu').animate({opacity: 0, top: '50%', left: '-400px'}, 300,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			}
		);
	});
	
	$('.main-2 .page-indicator').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#menu').css('display', 'block');
			$('#menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('#overlay, a').click( function(){
		$('#menu').animate({opacity: 0, top: '50%', left: '-400px'}, 300,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			}
		);
	});
	
	$(".menu-list a").click(function() {
		$("a").removeClass('active');
		$(this).addClass('active').fadeIn(200);
	});
	
	//change
	// $('.form-of-training .order-form').click(function() {
	// 	$('.form-of-training').find(".name, .price, .price .rub").removeClass("active");
	// 	$(this).parents('.form-of-training').find(".name").toggleClass("active").fadeIn(400);
	// 	$(this).parents('.form-of-training').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	// });
	//
	// $('.practices .order-form').click(function() {
	// 	$('.practices').find(".name, .price, .price .rub").removeClass("active");
	// 	$(this).parents('.practices').find(".name").toggleClass("active").fadeIn(400);
	// 	$(this).parents('.practices').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	// });
	//
	// $('.course .order-form').click(function() {
	// 	$('.course').find(".name, .price, .price .rub").removeClass("active");
	// 	$(this).parents('.course').find(".name").toggleClass("active").fadeIn(400);
	// 	$(this).parents('.course').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	// });
	
	new WOW().init();
	
	$('#carousel').carousel({
		interval: 5000
	});
	
	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
	
	
	$(".step").on("click", ".top-line", function(){
		$(".step .top-line").removeClass("active");
		$(this).addClass("active");
	});
	
	$("figure").on("click", "", function(){
		$(".three figure").removeClass("select");
		$(this).addClass("select");
	});

    $("#phone").mask("+38 (999) 999-99-99");
	
	/*var today = new Date(),
		ts = new Date( today.getFullYear(), today.getMonth(), today.getDate() + 7),
		newYear = true;
	
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " <i>дней</i> " + ( days==1 ? '':'' ) + "";
			message += hours + "" + ( hours==1 ? '':':' ) + "";
			message += minutes + "" + ( minutes==1 ? '':':' ) + "";
			message += seconds + " " + ( seconds==1 ? '':' ' ) + " ";
			
			if(newYear){
				message += "";
			}
			else {
				message += "";
			}
		}
	});*/

    
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	$("#feadback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#feadback-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			
			$('#popUpMessage').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
});
