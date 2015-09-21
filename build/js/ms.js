$('.drop-down-box').click(function() {
	$('.black-box-bg').fadeIn(200, function() {
		$('.black-box').slideDown(200);
	})	
})

$('.black-box-bg, .drop-down-types SPAN, .close, .done, .agent-message-window, .agent-bad-message-window').click(function() {
	$('.black-box').slideUp(200, function() {
		$('.black-box-bg, .agent-message-window, .agent-bad-message-window').fadeOut(200)
	})
})

$('#obj-type').click(function() {
	$('.drop-down-list').hide();
	$('#obj-type-list').show()
})

$('#obj-district').click(function() {
	$('.drop-down-list').hide();
	$('#obj-district-list').show()
})

$('#obj-wall').click(function() {
	$('.drop-down-list').hide();
	$('#obj-wall-list').show()
})


$(".more").click(function() {
	$(".second-obj-search-inner").height("auto");
	$(this).hide()
	$(".more-close").show().css("display", "block")
})

$('.search-button').click(function() {
	$('.header-search').fadeIn("slow");
	$('.header-search INPUT').focus();
})

$('body').click(function() {
	$('.header-search').fadeOut("slow");
	$('.login-form').hide();
	$('.welcome-cut').removeClass( "welcome-open" );
	$('.welcome-pseudolink, .gr').show();
	$('.welcome-inner').css("border", "1px #ddd solid");
})

$('.header-search, .search-button, .welcome, .login-form, .login-pseudolink, .text-pseudolink, .agent-message-window-inner').click(function(event) {
	event.stopPropagation();
});
	
$('.welcome-pseudolink').click(function() {
    $('.welcome-cut').addClass( "welcome-open" );
	$( this ).hide();
	$('.gr').hide();
	$('.welcome-inner').css("border", "none");
})

if ($(window).width() > '600') { 
   	$('.loop-inner').masonry({temSelector: '.item'});
}


$('.news-sidebar-inner').masonry({temSelector: '.item'});

		
$(".more-close").click(function() {
	
	$(this).hide();
	$(".more").show();
	
	if ($(window).width() > '1024') {
		$(".second-obj-search-inner").height("71");	
	} 
	
	else if ($(window).width() < '600') {
		$(".second-obj-search-inner").height("405");	
	}
	else {
		$(".second-obj-search-inner").height("142");	
	}
})			

$('.login-pseudolink, .text-pseudolink').click(function() {
	$('.login-form').show();
})

$('.eye').click(function() {
	$('input#loginpass').removeAttr("type");
	$('input#loginpass').prop('type', 'text');
	$( this ).hide();
	$('.open-eye').show();
})

$('.open-eye').click(function() {
	$('input#loginpass').removeAttr("type");
	$('input#loginpass').prop('type', 'password');
	$( this ).hide();
	$('.eye').show();
})

$('.mobile-form-close').click(function() {
	$('.login-form').hide();
})	

		$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
	
		$('html, body').stop().animate({'scrollTop': $target.offset().top}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
	


$('.agent-message').click(function() {
	$('.black-box-bg').fadeIn(200, function() {
		$('.agent-message-window').slideDown(200);
	})	
})

$('.agent-bad-message').click(function() {
	$('.black-box-bg').fadeIn(200, function() {
		$('.agent-bad-message-window').slideDown(200);
	})	
})
