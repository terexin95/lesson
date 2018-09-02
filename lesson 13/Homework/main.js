$(function(){
	$('.main_btna, .main_btn, .main_nav>nav>ul>li>a:eq(1)').click(function(){
		$('.modal').slideDown(1000);
		$('.overlay').fadeIn();
		$('.modal > .close').click(function(){
			$('.modal').slideUp(1000);
			$('.overlay').fadeOut();
		});
	})
});