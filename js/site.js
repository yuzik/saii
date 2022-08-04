// JavaScript Document

$(document).ready(function (e) {

    setupRightNavAnimate();
    setupBrowserScroll();

    $('#RightNav ul a').smoothScroll({
        speed: 1500,
        afterScroll: function () {

        }
    });

    $('#TopMenu ul a:not([id="ContactUsMenuLink"])').smoothScroll({
        speed: 1500,
        afterScroll: function () {

        }
    });

    $('a#ContactUsMenuLink').smoothScroll({
        speed: 2000,
        offset: 749,
        afterScroll: function () {

        }
    });

    $('#slides').slides({
        preload: true,
        generateNextPrev: false,
        effect: 'fade'
    });

    $('#UrunlerList .UrunItem').click(function () {
        //alert($(this).hasClass("Akaryakit"));
        //        if ($(this).hasClass("Akaryakit")) {
        //			 var $urunRow = $(this).parent();
        //            var urunRowIndex = $urunRow.index();
        //            var urunItemIndex = $(this).index();
        //            var clickedItemIndex = urunRowIndex + 5 * urunItemIndex;

        //            $('.adcochart2').show();
        //			$('.adcochart2').css('top', $('#UrunlerList').offset().top+117);
        //			$('.adcochart2').css('left',($(window).width()-1168)/2);
        //			
        //			
        //        }
        //        else {
        var $urunRow = $(this).parent();
        var urunRowIndex = $urunRow.index();
        var urunItemIndex = $(this).index();
        var clickedItemIndex = urunRowIndex + 5 * urunItemIndex;

        //alert(clickedItemIndex);

        $('#UrunlerContainer .UrunDetayList .UrunDetay').fadeOut('fast');
        $('#UrunlerContainer .UrunDetayList .UrunDetay').eq(clickedItemIndex).fadeIn('fast');
        //        }
    });
    $('.BaseOilTablo-btn').click(function () {
        $('#UrunlerContainer .UrunDetayList .UrunDetay').fadeOut('fast');
        $('.adcochart2').show();
        $('.adcochart2').css('top', $('#UrunlerList').offset().top + 117);
        $('.adcochart2').css('left', ($(window).width() - 900) / 2);
        return false;
    });


    $('.chartclose').click(function () {
//        $('.adcochart2').hide();

//        $('#UrunlerContainer .UrunDetayList .UrunDetay').eq(7).fadeIn('fast');
//        return false;
        $('.adcochart2').fadeOut('fast');
        return false;
    });
    $('#UrunlerContainer .UrunDetayClose').click(function () {

        $('#UrunlerContainer .UrunDetayList .UrunDetay').fadeOut('fast');
        return false;
    });

    $('#MilesTonesContainer a').click(function () {
        $('#MilesTonesContainer a').removeClass('Selected');
        $(this).addClass('Selected');

        var clickedItemIndex = $(this).index();

        $('#MilestonesYearsContainer .MilesTonesYears').hide();
        $('#MilestonesYearsContainer .MilesTonesYears').eq(clickedItemIndex).fadeIn();

        return false;
    });
    $('#MilesTonesContainer a').eq(0).click();

    /*
    $(".UrunItem").mouseover(function(){
	
    $(".UrunDetay").stop().animate({width: "1286px" , opacity: 1},{queue:false,duration:400,easing:'linear'});	
    $(".UrunDetay").css("z-index","999");
	
    });
	
    $("#UrunDetayClose").click(function(){
	
    $(".UrunDetay").stop().animate({width: "1286px" , opacity: 0},{queue:false,duration:400,easing:'linear'});
    $(".UrunDetay").css("z-index","-1");
    return false;
    });
    */

});


/* ANIMATE RIGHT NAV */

function setupRightNavAnimate() {

	$("#RightNav,#RightNav li").mouseover(function ()
    {
		
		$("#RightNav").stop().animate(
			{ width: '255px' }, 
			{ 
			queue: false, 
			duration: 300, 
			easing: 'linear',
			step: function(){
				$("#RightNav").css("overflow","visible");	
			} 
		});
		$("#RightNav li").stop().animate({width: '246px'},{queue:false,duration:300,easing:'linear'});
        return false;

    });
	
	$("#RightNav,#RightNav li").mouseout(function ()
    {
		
		$("#RightNav").stop().animate(
			{ width: '80px' }, 
			{ 
			queue: false, 
			duration: 300, 
			easing: 'linear',
			step: function(){
				$("#RightNav").css("overflow","visible");	
			} 
		});
		$("#RightNav li").stop().animate({width: '70px'},{queue:false,duration:300,easing:'linear'});
        return false;

    });	

}


function setupBrowserScroll() {

	$(window).scroll(function ()
    {
        var scrollFromTop = getPageScroll()[1];
		
		//alert(scrollFromTop);
		
		if (scrollFromTop > 2500)
        {
            $("#UrunlerWrapper").css("visibility","visible");
			$("#UrunlerWrapper").stop().animate({height: '749px'},{queue:false,duration:250,easing:'linear'});
		//	$("#UrunlerWrapper").stop().animate({height: '921px'},{queue:false,duration:250,easing:'linear'});
        }
        else if (scrollFromTop > 1621)
        {
            $("#HizmetlerimizContainer").css("visibility","visible");
			$("#HizmetlerimizContainer").stop().animate({width: '100%'},{queue:false,duration:700,easing:'linear'});
			$("#HizmetlerimizSummary").stop().animate({height: '430px'},{queue:false,duration:1400,easing:'linear'});
        }
        else if (scrollFromTop > 340)
        {
            $("#ContentContainer").css("visibility","visible");
			$("#ContentContainer").stop().animate({width: '100%'},{queue:false,duration:700,easing:'linear'})
			$("#ContainerSummary").stop().animate({height: '800px'},{queue:false,duration:1400,easing:'linear'});
        }
    });

}

// Gets the distance from the top of the document (not viewport)
// by quirksmode.com
function getPageScroll()
{
    var xScroll, yScroll;

    if (self.pageYOffset)
    {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop)
    {
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    }
    else if (document.body)
    {
        // all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }

    return new Array(xScroll, yScroll)
}