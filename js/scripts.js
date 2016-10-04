(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm',
        b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'share.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q)
    }
})()



$(document).ready(function() {

	$('.overlaytile').on('click', function(e) {
		var target = $(this).attr('data-target');
    	console.log(target);
		var src = $(this).attr('data-src');
    	var height = $(this).attr('data-height') || 300;
    	var width = $(this).attr('data-width') || '100%';
    	$(target +" iframe").attr({'src': src, 'height': height, 'width': width});
    	// , 'height': height, 'width': width
	});
	var $item = $('.grid-item');
	$item.hide();

	var $container = $('.grid');
	$container.imagesLoaded( function() {
		$item.fadeIn();
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 1
		});
		// $container.masonry({
		//     itemSelector : '.box',
		//     columnwidth: 300,
		//     gutter: 20,
		//     isFitWidth: true,
		//     isAnimated: !Modernizr.csstransitions
		// });    
	});
});




// $(document).ready(function() {
// 	var $container = $('.grid');
// 	$container.imagesLoaded(function(){
// 		$container.masonry({
// 			itemSelector: '.grid-item',
// 			columnWidth: function(containerWidth){
// 				return containerWidth / 12;
// 			}
// 		});
// 		$('.grid-item img').addClass('not-loaded');
// 		$('.grid-item img.not-loaded').lazyload({
// 			effect: 'fadeIn',
// 			load: function() {
// 				// Disable trigger on this image
// 				$(this).removeClass("not-loaded");
// 				$container.masonry('reload');
// 			}
// 		});
// 		$('.grid-item img.not-loaded').trigger('scroll');
// 	});
// });