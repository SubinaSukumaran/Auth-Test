function changeStatus(id) {

    id = "'" + id + "'";
    $.notify({
        // option
        icon: 'fas fa-exclamation-triangle',
        title: 'Block Driver ?',
        message: 'Are you sure you want to block this driver?',
    }, {

        // settings
        type: 'light',
        placement: {
            from: "top",
            align: "right"
        },
        // showProgressbar: true,
        mouse_over: 'pause',
        // delay: 7000,
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated fadeOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert border alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon" class="text-danger"></span> ' +
            '<span data-notify="title" class="text-danger">{1}</span> ' +
            '<div data-notify="message" class="mt-2 text-gray-1">{2}</div>' +
            '<div data-notify="actions" class="mt-3 text-right"><button type="button aria-hidden="true" onclick="cancelDriver()" class="btn btn-sm btn-plain btn-cancel" data-notify="dismiss">Cancel</button><button class="btn btn-sm btn-danger" type="button" onclick="deleteDriver(' + id + ')" data-notify="dismiss">Yes Block!</button></div>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}


function deleteDriver(id) {
    id = "'" + id + "'";
    var type = $('#type').val();
    $.ajax({

        url: '/block-driver',
        type: 'GET',
        data: {
            id: id,
            type: type

        },
        success: function(response) {

            if (response == "Success") {
                $.notify({
                    // options
                    icon: 'fas fa-check text-success',
                    title: 'Driver',
                    message: 'successfully blocked',
                }, {
                    // settings
                    type: 'light',
                    placement: {
                        from: "top",
                        align: "right"
                    },
                    showProgressbar: true,
                    mouse_over: 'pause',
                    delay: 2000,
                    allow_dismiss: false
                });
                location.reload();
            }

        }
    });
    setTimeout(function() {}, 300);
} //deleteFn


function cancelDriver(id) {

    $('#id').prop('checked', false);
    location.reload();

} //deleteFn

//changeStatusUnblock
function changeStatusUnblock(id) {


    id = "'" + id + "'";
    $.notify({
        // option
        icon: 'fas fa-exclamation-triangle',
        title: 'Unblock Driver ?',
        message: 'Are you sure you want to unblock this driver?',
    }, {

        // settings
        type: 'light',
        placement: {
            from: "top",
            align: "right"
        },
        // showProgressbar: true,
        mouse_over: 'pause',
        // delay: 7000,
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated fadeOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert border alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon" class="text-danger"></span> ' +
            '<span data-notify="title" class="text-danger">{1}</span> ' +
            '<div data-notify="message" class="mt-2 text-gray-1">{2}</div>' +
            '<div data-notify="actions" class="mt-3 text-right"><button type="button aria-hidden="true" onclick="cancelUnblockDriver()" class="btn btn-sm btn-plain btn-cancel" data-notify="dismiss">Cancel</button><button class="btn btn-sm btn-danger" type="button" onclick="unblockDriver(' + id + ')" data-notify="dismiss">Yes Unblock!</button></div>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}


function unblockDriver(id) {
    id = "'" + id + "'";
    var type = $('#type').val();
    $.ajax({

        url: '/unblock-driver',
        type: 'GET',
        data: {
            id: id,
            type: type

        },
        success: function(response) {

            if (response == "Success") {
                $.notify({
                    // options
                    icon: 'fas fa-check text-success',
                    title: 'Driver',
                    message: 'successfully unblocked',
                }, {
                    // settings
                    type: 'light',
                    placement: {
                        from: "top",
                        align: "right"
                    },
                    showProgressbar: true,
                    mouse_over: 'pause',
                    delay: 2000,
                    allow_dismiss: false
                });

                location.reload();
            }

        }
    });
    setTimeout(function() {}, 300);
} //deleteFn


function cancelUnblockDriver(id) {

    $('#id').prop('checked', false);
    location.reload();

} //deleteFn