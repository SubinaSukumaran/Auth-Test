/**---
Project Name	: Bootsrtap 2.1
Doc Name 	 	: notify.js
Author Name		: Haris Webdesign [Haris karat]
Email       	: haris.karat@gmail.com
Portfolio		: https://www.behance.net/hariswebdesign
Google      	: http://gogle.com/#q=Haris+Webdesign
--- **/



/*
Github: https://github.com/mouse0270/bootstrap-notify
Demo:	http://bootstrap-notify.remabledesigns.com/
*/
// --------------------------------------------------------- //
// GENERAL START
// --------------------------------------------------------- //

/* Delete  ============ */
function deleteFn(){
	setTimeout (function() {
		$.notify({
			// options
			icon: 'fas fa-check text-success',
			title: 'Photo',
			message: 'successfully deleted',
			},{
			// settings
			type: 'light',
			placement: {
					from: "top",
					align: "right"
			},
			showProgressbar: true,
			// mouse_over: 'pause',
			delay: 2000,
			allow_dismiss: false
		});
		}, 300);
}//deleteFn

// --------------------------------------------------------- //
// GENERAL STOP
// --------------------------------------------------------- //


/* Copy  ============ */
$('.show-notify').click(function(){
    $.notify({
	// options
	icon: 'fas fa-check text-success',
	title: 'Coupon Code',
	message: 'Successfully copied!',
	},{
	// settings
	type: 'light',
	placement: {
			from: "top",
			align: "right"
	},
	// animate: {
	// 	enter: 'animated bounceInDown',
	// 	exit: 'animated fadeOutUp'
	// },
	// showProgressbar: true,
	mouse_over: 'pause',
	delay: 1000,
	});
});//copy



/* Delete  ============ */	
$('.show-notify-alert').click(function(){
    $.notify({
	// options
	icon: 'fas fa-exclamation-triangle',
	title: 'Delete Photo?',
	message: 'Are you sure you want to delete this item?',
	},
	{
	// settings
	type: 'light',
	placement: {
			from: "top",
			align: "right"
	},
	// showProgressbar: true,
	mouse_over: 'pause',
	delay: 7000,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated fadeOutUp'
	},
	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert border alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon" class="text-danger"></span> ' +
		'<span data-notify="title" class="text-danger">{1}</span> ' +
		'<div data-notify="message" class="mt-2 text-gray-1">{2}</div>' +
		'<div data-notify="actions" class="mt-3 text-right"><button type="button aria-hidden="true" class="btn btn-sm btn-plain btn-cancel" data-notify="dismiss">Cancel</button><button class="btn btn-sm btn-danger" type="button" onclick="deleteFn()" data-notify="dismiss">Yes Delete it!</button></div>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
	});
});//Delete