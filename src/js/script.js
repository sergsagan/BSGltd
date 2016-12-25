$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
    //anchor links
	
	$(".slider").on("click","a.scroll-down-home", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$(".main-2, .main-3").on("click","a.scroll-down", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	
	$(".main-2, .main-3, .main-4").on("click","a.scroll-up", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	
	$(".menu-list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	
	//charts
	
	/*google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart);
	
	function drawChart() {
		
		var data = google.visualization.arrayToDataTable([
			['Task', 'тарифы'],
			['Тариф 1', 3.3],
			['Тариф 2', 5.8],
			['Тариф 3', 7.1],
			['Тариф 4', 8.5]
		]);
		
		var options = {
			title: ''
		};
		
		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		
		chart.draw(data, options);
	}*/
	
	//menu
	
	$('nav li a').click(function () {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
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
	
	/*$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});*/
	
	var $w = $(window);
	$w.on('scroll', function(){
		$('.header').toggleClass("fixed orange", $w.scrollTop() > 0);
	}).trigger('scroll');
	
	//modal
	
	$('.slider .page-indicator').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, function(){
			$('.menu').css('display', 'block');
			$('.menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('.overlay, a').click( function(){
		$('.menu').animate({opacity: 0, top: '50%', left: '-400px'}, 300,
			function(){
				$(this).css('display', 'none');
				$('.overlay').fadeOut(400);
			}
		);
	});
	
	$('.main-2 .page-indicator').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, function(){
			$('.menu').css('display', 'block');
			$('.menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('.main-3 .page-indicator').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, function(){
			$('.menu').css('display', 'block');
			$('.menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('.main-4 .page-indicator').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, function(){
			$('.menu').css('display', 'block');
			$('.menu').animate({opacity: 1, top: '50%', left:'0'}, 300);
		});
	});
	
	$('.overlay, a').click( function(){
		$('.menu').animate({opacity: 0, top: '50%', left: '-400px'}, 300,
			function(){
				$(this).css('display', 'none');
				$('.overlay').fadeOut(400);
			}
		);
	});
	
	$('.calc').click( function(event){
		event.preventDefault();
		$('.overlay2').fadeIn(400, function(){
			$('#calculator').css('display', 'block');
			$('#calculator').animate({opacity: 1, top: '30%'}, 300);
		});
	});
	
	$('.close').click( function(){
		$('#calculator').animate({opacity: 0, top: '30%'}, 300,
			function(){
				$(this).css('display', 'none');
				$('.overlay2').fadeOut(400);
			}
		);
	});
	
	$(".menu-list li a").click(function() {
		$(".menu-list a").removeClass('active');
		$(this).addClass('active').fadeIn(200);
	});
	
	//ion slider range
	
	var $range1 = $(".js-range-slider");
	
	$range1.ionRangeSlider({
		grid: false,
		min: 10,
		max: 100,
		from: 0,
		to: 100,
		step: 1,
		prettify_enabled: true,
		prefix: "$"
	});
	
	
	new WOW().init();
	
	//slider Bootstrap
	
	$('#carousel').carousel({
		interval: 5000
	});
	
	//slick-slider
	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
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
	
	//vertical slider
	
	$('.vertical-slider').slick({
		dots: true,
		arrows: true,
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		verticalSwiping: true,
		centerMode: true
	});
	
	//change selector
	
	$('.step span').click(function() {
		$('.slider-nav .step').find(".top-line").removeClass("active orange");
		$(this).parents('.step').find(".top-line").addClass("active orange").fadeIn(200);
	});
	
	
	$(".task").on("click", "", function(){
		$(".step-for-three .task").removeClass("select");
		$(this).addClass("select").fadeIn(200);
	});
	
	$(".rate").on("click", "", function(){
		$(".rate").removeClass("select");
		$(this).addClass("select").fadeIn(200);
	});

    $("#phone").mask("+38 (999) 999-99-99");
	
    
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
