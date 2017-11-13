$(document).ready(function(e) {
	
	
	/*var feeHeight = $('.feedback-get-height').outerHeight();
	alert(feeHeight);*/
	
});
function hetFeeHeight() {
	
	
	
	
}
function nextSlide($para1, $para2) {
	
	$('.feedback-slideshow-content').removeClass('currentSlide');
	$('.feedback-slideshow-content').removeClass('slideDownFeedback');
	$('.feedback-slideshow-content').removeClass('slideFocusFeedback');
	
	$('.' + $para1).addClass('slideUpFeedback').addClass('slideFocusFeedback');
	$('.' + $para2).addClass('currentSlide');
	
	var scrollfee = 0;
	var showBottomSec = 0;
	//var scrollPartial = 1;
	//alert('hi');
	if($para1=='feedback-slide-1')
	{
		$('#nextbutton1').css('display','none');
		$('#backbutton1').css('display','');
		
		scrollfee = 1;
	}
	else if($para1=='feedback-slide-2')
	{
		$('#slidediv1').css('display','none');
		$('#slidediv2').css('display','');
		
		scrollfee = 1;
	}
	else if($para1=='feedback-slide-3')
	{
		$('#slidediv2').css('display','none');
		$('#slidediv3').css('display','');
		
		scrollfee = 2;
		showBottomSec = 1;
		
		$('.feedback-slide-5').css('top', '378px');
	}
	else if($para1=='feedback-slide-4')
	{
		$('#slidediv3').css('display','none');
		$('#slidediv4').css('display','');
		
		scrollfee = 3;
		
		$('.feedback-slide-6').css('top', '378px');
		
	}
	else if($para1=='feedback-slide-5')
	{
		$('#slidediv4').css('display','none');
		$('#slidediv5').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-7').css('top', '378px');
	}
	else if($para1=='feedback-slide-6')
	{
		$('#slidediv5').css('display','none');
		$('#slidediv6').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-8').css('top', '378px');
	}
	else if($para1=='feedback-slide-7')
	{
		$('#slidediv6').css('display','none');
		$('#slidediv7').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-9').css('top', '378px');
	}
	else if($para1=='feedback-slide-8')
	{
		$('#slidediv7').css('display','none');
		$('#slidediv8').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-10').css('top', '378px');
	}
	else if($para1=='feedback-slide-9')
	{
		$('#slidediv8').css('display','none');
		$('#slidediv9').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-11').css('top', '378px');
	}
	else if($para1=='feedback-slide-10')
	{
		$('#slidediv9').css('display','none');
		$('#slidediv10').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-12').css('top', '378px');
	}
	else if($para1=='feedback-slide-11')
	{
		$('#slidediv10').css('display','none');
		$('#slidediv11').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-13').css('top', '378px');
	}
	else if($para1=='feedback-slide-12')
	{
		$('#slidediv11').css('display','none');
		$('#slidediv12').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-14').css('top', '378px');
	}
	else if($para1=='feedback-slide-13')
	{
		$('#slidediv12').css('display','none');
		$('#slidediv13').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-15').css('top', '378px');
	}
	else if($para1=='feedback-slide-14')
	{
		$('#slidediv13').css('display','none');
		$('#slidediv14').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-16').css('top', '378px');
	}
	else if($para1=='feedback-slide-15')
	{
		$('#slidediv14').css('display','none');
		$('#slidediv15').css('display','');
		
		scrollfee = 4;
		
		$('.feedback-slide-17').css('top', '378px');
	}
	else if($para1=='feedback-slide-16')
	{
		$('#slidediv15').css('display','none');
		$('#slidediv16').css('display','');
		
		scrollfee = 2;
		
		$('.feedback-slide-18').css('top', '378px');
	}
	else if($para1=='feedback-slide-17')
	{
		$('#slidediv16').css('display','none');
		$('#slidediv17').css('display','');
		
		scrollfee = 5;
		
		$('.feedback-slide-19').css('top', '378px');
	}
	else if($para1=='feedback-slide-18')
	{
		$('#slidediv17').css('display','none');
		$('#slidediv18').css('display','');
		
		scrollfee = 5;
		
		$('.feedback-slide-20').css('top', '378px');
	}
	else if($para1=='feedback-slide-19')
	{
		$('#slidediv18').css('display','none');
		$('#slidediv19').css('display','');
		
		scrollfee = 5;
		//showBottomSec = 2;
		
		//$('.feedback-slide-21').css('top', '378px');
	}
	else if($para1=='feedback-slide-20')
	{
		$('#slidediv19').css('display','none');
		$('#slidediv20').css('display','');
		
		scrollfee = 6;
		showBottomSec = 2;
	}
	else if($para1=='feedback-slide-21')
	{
		$('#slidediv20').css('display','none');
		$('#slidediv21').css('display','');
		
		scrollfee = 7;
		showBottomSec = 2;
	}
	
	
	//hetFeeHeight();
	$('.feedback-slideshow-header').css('display', 'none');
	
	
	if (scrollfee == 1) {
		
		$('.slideFocusFeedback').css('top', '-100%');
		
	}
	if (scrollfee == 2) {
		
		var finClass = document.getElementsByClassName('feedback-get-height');
		var ths = $('.' + $para1).find(finClass).height();
		
		var topSlide = ths;
		
		
		$('.currentSlide').css('top', 140);
		
		
		
		
		
		if (topSlide < 100) {
			$('.slideFocusFeedback').css('top', -80);
		}
		
		else if ((topSlide < 205) && (topSlide > 101)) {
			$('.slideFocusFeedback').css('top', -63);
		}
		
		else if ((topSlide < 529) && (topSlide > 206)) {
			$('.slideFocusFeedback').css('top', -topSlide);
		}
		
		else {
			$('.slideFocusFeedback').css('top', -350);
		}
	}
	if (scrollfee == 3) {
			$('.currentSlide').css('top', 140);
			$('.slideFocusFeedback').css('top', -94);
	}
	if (scrollfee == 4) {
			$('.currentSlide').css('top', 140);
			$('.slideFocusFeedback').css('top', -55);
	}
	if (scrollfee == 5) {
			$('.currentSlide').css('top', 140);
			$('.slideFocusFeedback').css('top', -24);
	}
	if (scrollfee == 6) {
			$('.currentSlide').css('top', 140);
			$('.slideFocusFeedback').css({'top': 0, 'padding-top': '10px'});
	}
	
	if (scrollfee == 7) {
			$('.currentSlide').css({'top': 0, 'padding-top': '10px'});
	}
	
	if (showBottomSec == 1) {
			//alert('hi');
			$('.feedback-slideshow-content').css('height', '240px');
			$('.feedback-slideshow-detail').css('height', '240px');
	}
	if (showBottomSec == 2) {
			//alert('hi');
			$('.feedback-slideshow-content').css('height', '530px');
			$('.feedback-slideshow-detail').css('height', '461px');
	}
	
}





function prevSlide($para1, $para2) {
	if($para1=='feedback-slide-1')
	{
		$('#nextbutton1').css('display','');
		$('#backbutton1').css('display','none');
		$('#slidediv1').css('display','');
		$('#slidediv2').css('display','none');
	}
	if($para1=='feedback-slide-2')
	{
		$('#slidediv2').css('display','none');
		$('#slidediv1').css('display','');
	}
	else if($para1=='feedback-slide-3')
	{
		$('#slidediv2').css('display','');
		$('#slidediv3').css('display','none');
	}
	else if($para1=='feedback-slide-4')
	{
		$('#slidediv4').css('display','none');
		$('#slidediv3').css('display','');
	}
	else if($para1=='feedback-slide-5')
	{
		$('#slidediv5').css('display','none');
		$('#slidediv4').css('display','');
	}
	else if($para1=='feedback-slide-6')
	{
		$('#slidediv6').css('display','none');
		$('#slidediv5').css('display','');
	}
	else if($para1=='feedback-slide-7')
	{
		$('#slidediv7').css('display','none');
		$('#slidediv6').css('display','');
	}
	else if($para1=='feedback-slide-8')
	{
		$('#slidediv8').css('display','none');
		$('#slidediv7').css('display','');
	}
	else if($para1=='feedback-slide-9')
	{
		$('#slidediv9').css('display','none');
		$('#slidediv8').css('display','');
	}
	else if($para1=='feedback-slide-10')
	{
		$('#slidediv10').css('display','none');
		$('#slidediv9').css('display','');
	}
	//$('.slideFocusFeedback').css('top', 100 + "%");
	//$('.feedback-slideshow-content').removeClass('slideUpFeedback');
	$('.feedback-slideshow-content').removeClass('currentSlide');
	$('.feedback-slideshow-content').removeClass('slideFocusFeedback');
	$('.' + $para2).addClass('slideDownFeedback');
	$('.' + $para1).addClass('currentSlide');
	
	
	
	/*var finClass = document.getElementsByClassName('slideUpFeedback');
	var ths = $('.' + $para1).find(finClass).height();*/
	
	
	
	
}

function fsInputEdit(ths, $para1) {
	$(ths).parent().parent().find('input').toggleClass('fsInputActive');
	
	$(ths).html(
		$(ths).html() == '<i class="fa fa-edit"></i> <span class="bold">Edit</span>' ? '<i class="fa fa-check-square-o"></i> <span class="bold">Submit</span>' : '<i class="fa fa-edit"></i> <span class="bold">Edit</span>'
	);
	
	$(ths).toggleClass('btnBlue');
}
function tagContentFn(ths) {
	
	$(ths).toggleClass('tagContentHighlight');
	
}

function addField($para) {
	$('.'+ $para).css('display','block')
}