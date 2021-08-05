$('#roleSubmit').on('submit', (function(e) {
    e.preventDefault();
    var form = $('#roleSubmit')[0];
    var formData = new FormData(form);
    var validation = 1;
    if ($('#role').val() == "") {

        validation = 0;
    }
    if ($('#name').val() == "") {

        validation = 0;
    }
    if ($('#email').val() == "") {

        validation = 0;
    }
    if ($('#phone').val() == "") {

        validation = 0;
    }
    if ($('#password').val() == "") {

        validation = 0;
    }
    if ($('#zone').val() == "") {
        $('#zone-select').html('<span style="color:red" ><small>Select Zone</small></span>');
        validation = 0;
    }

    if ($('#bank_verification_number').val() == "") {

        validation = 0;
    }
    if ($('#account_number').val() == "") {

        validation = 0;
    }
    if ($('#account_name').val() == "") {

        validation = 0;
    }
    if ($('#country_code').val() == "") {

        validation = 0;
    }

    if ($('input[name="profile_image"]').val() == "") {
        validation = 0;
        $('#validation').html('<span style="color:red" ><small>Upload Profile Image</small></span>');
    }
    var TableData;
    TableData = storeTblValues()
    TableData = JSON.stringify(TableData);

    function storeTblValues() {
        var TableData = new Array();

        $('#data_table tr').each(function(row, tr) {
            TableData[row] = {
                "module_name": $(tr).find('th:eq(0)').text(),
                "create": $(tr).find('td:eq(1) input[type="checkbox"]').is(':checked'),
                "edit": $(tr).find('td:eq(2) input[type="checkbox"]').is(':checked'),
                "delete": $(tr).find('td:eq(3) input[type="checkbox"]').is(':checked'),
                "view": $(tr).find('td:eq(4) input[type="checkbox"]').is(':checked'),
                "block": $(tr).find('td:eq(5) input[type="checkbox"]').is(':checked'),
                "approve": $(tr).find('td:eq(6) input[type="checkbox"]').is(':checked'),

            }
        });

        TableData.shift(); // first row will be empty - so remove
        return TableData;
    }
    formData.append('module', TableData);

    if (validation == 1) {

        $.ajax({
            url: '/create/addRole',
            type: 'POST',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function() {
                $("#verify").show();
                $("#savebtn").hide();
                $('#zone-select').empty();
            },
            success: function(response) {
                console.log(response.status);
                if (response.status == "Validation Error") {
                    $('#validation').empty();
                    if (response.message == "Enter Password") {
                        $('#validation').empty();
                        $('#passwordError').html('<span style="color:red" ><small>Enter Password</small></span>');
                    } else if (response.message == "Upload Profile Image") {
                        $('#passwordError').empty();
                        $('#validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "Company already created with this name") {
                        $('#validation').empty();
                        $('#passwordError').empty();
                        $('#adminError').html('<span style="color:red" ><small> Company already created with this name</small></span>');
                        $(window).scrollTop(0);
                    }
                    $("#verify").hide();
                    $("#savebtn").show();
                    $(window).scrollTop(0);
                }
                if (response.status == "Email") {

                    $('#validation').empty();
                    $('#show_error').empty();
                    if (response.message == "The email address is invalid.") {
                        $('#phone-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#email-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "The email address is already in use by another account.") {
                        $('#phone-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#email-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }

                    if (response.message == "INVALID_PHONE_NUMBER : TOO_SHORT") {
                        $('#email-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "INVALID_PHONE_NUMBER : TOO_LONG") {
                        $('#email-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "The phone number is already in use by another account.") {
                        $('#email-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }

                    if (response.message == "Invalid phone number: The string supplied is too long to be a phone number.") {
                        $('#email-validation').empty();
                        $('#validation').hide();
                        $('#show_error').hide();
                        $('#password-validation').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "A password must be a string with at least 6 characters.") {
                        $('#email-validation').hide();
                        $('#validation').hide();
                        $('#show_error').hide();
                        $('#phone-validation').empty();
                        $('#password-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    $("#verify").hide();
                    $("#savebtn").show();
                    $(window).scrollTop(0);
                }
                if (response.status == "Error") {
                    $('#validation').hide();
                    $('#show_error').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    $('#ModalRole').scrollTop($("#show_error").offset().top);
                    $('#email-validation').empty();
                    $('#validation').empty();
                    $('#phone-validation').empty();
                    $("#verify").hide();
                    $("#savebtn").show();
                    // $('#savebtn').hide();
                }

                if (response.status == "Success") {

                    var document1 = response.document1;
                    var document2 = response.document2;
                    var role = null;
                    if ($('input[name="profile_image"]').val() != "1234") {
                        var file = jQuery.parseJSON($('input[name="profile_image"]').val());
                        fileUpload(file, document1, document2, role);
                    }

                    cleardatas()
                        //    window.location.href = "/view/rolelist";
                }



            },
            complete: function() {

            },

        });
    }
}));


function cleardatas() {
    $('#role').val('');

}

$('#newRole').click(function() {

    cleardatas();

});

function editRole(id) {

    $.ajax({
        url: '/edit/getRole/' + id,
        type: 'GET',
        success: function(output) {
            $('#id').val(id);
            $('#role').val(output.data.role);
            // $('#role').addClass('focused');
            //  $('#role').focus();
            $('.is-floating-label input, .is-floating-label textarea').on('focus blur', function(e) {
                $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');

        },
        error: function(output) {

        }
    });
}

function onlyNumberKey(evt) {

    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 45 || ASCIICode > 57||ASCIICode==47))
        return false;
    return true;
    }