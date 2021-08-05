function editCrew(roleid, id) {
    var idd = $('#ids').val();
    $.ajax({
        url: '/edit/editCrew' + '/' + roleid + '/' + id,
        type: 'GET',
        data: {
            authid: idd,
        },
        success: function(output) {
            console.log(output);

            var data = output['data'];
            var permission = output['permission'];
            var permissionCompany = output['permissionCompany'];
            console.log(permission);
            console.log("zoneeee", data['zone_id']);
            var id = output['id'];
            var created_by_role = data['created_by_role'];


            if ($('#ids').val() != data['created_by']) {

                $('#permission').hide();

            }
            if (output['is_company_admin'] == 1) {

                $('#permission').show();

            }
            if ($('#logged_login').val() == "Admin") {

                $('#permission').show();

            }

            $('#id').val(id);
            // alert($('#id').val());
            $('#privilege').val(data['privilege']);
            $('#image-profile').empty();
            $('#image-profile').append('<Input type="hidden" id="profile_img" value=""><input type="file" class="file-pond filepond-profile" name="profile_image" id="profile"data-max-file-size="512KB"accept="image/png, image/jpeg, image/gif">');
            // alert(document.getElementById("bank_details"));
            // document.getElementById("bank_details").style.display = "block";
            // $('#bank_details').show();
            $('#savebtn').text('Update');
            $('#savebtn-2').text('Update');
            $('#name').val(data['name']);
            $('#phone').val(data['mobile']);
            $('#email').val(data['email']);
            $('#account_number').val(data['account_number']);
            $('#account_name').val(data['account_name']);
            $('#email').val(data['email']);
            $('#profile_img').val(data['imageUrl']);
            $('#role').val(data['role']).trigger("change");
            $('#zone').val(data['zone_id']).trigger("change");
            $('#country_code').val(data['country_code']).trigger("change");
            $('#bank_verification_number').val(data['bank_verification_number']).trigger("change");
            if (data['privilege'] == "Admin") {
                $('#bank_details').show();
            } else {
                $('#bank_details').hide();
            }

            if ($('#ids').val() != id) {
                $(':input[type="password"]').prop('disabled', true);
            }
            if ($('#ids').val() == id) {
                $(':input[type="password"]').prop('disabled', false);
            }


            $('.is-floating-label input, .is-floating-label textarea').on('focus blur', function(e) {
                $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');

            $.each(permission, function(key, value) {


                var allCount = 0;
                // key++;
                $("#module_name" + key).text(value.module_name);


                if (value.create == true) {
                    $('#create' + key).prop("checked", true);
                    allCount++;
                }

                if (value.edit == true) {
                    $('#edit' + key).prop("checked", value.edit);
                    allCount++;
                }


                if (value.delete == true) {
                    $('#delete' + key).prop("checked", value.delete);
                    allCount++;
                }


                if (value.block == true) {
                    $('#block' + key).prop("checked", value.block);
                    allCount++;
                }
                if (value.view == true) {
                    $('#view' + key).prop("checked", value.view);
                    allCount++;
                }
                if (value.approve == true) {
                    $('#approve' + key).prop("checked", value.approve);
                    allCount++;
                }
                if (allCount == 6) {
                    $('#all' + key).prop("checked", true);
                }


                if (value.create == false) {
                    $('#create' + key).prop("checked", false);
                    $('#all' + key).prop("checked", false);

                }

                if (value.edit == false) {
                    $('#edit' + key).prop("checked", false);

                }


                if (value.delete == false) {
                    $('#delete' + key).prop("checked", false);

                }


                if (value.block == false) {
                    $('#block' + key).prop("checked", false);

                }
                if (value.view == false) {
                    $('#view' + key).prop("checked", false);

                }
                if (value.approve == false) {
                    $('#approve' + key).prop("checked", false);

                }



                if (value.create == true && $('#logged_login').val() != created_by_role) {
                    $('#create' + key).prop("disabled", true);
                    $('#all' + key).prop("disabled", true);
                }
                if (value.edit == true && $('#logged_login').val() != created_by_role) {
                    $('#edit' + key).prop("disabled", true);

                }

                if (value.delete == true && $('#logged_login').val() != created_by_role) {
                    $('#delete' + key).prop("disabled", true);

                }


                if (value.block == true && $('#logged_login').val() != created_by_role) {
                    $('#block' + key).prop("disabled", true);

                }
                if (value.view == true && $('#logged_login').val() != created_by_role) {
                    $('#view' + key).prop("disabled", true);

                }
                if (value.approve == true && $('#logged_login').val() != created_by_role) {
                    $('#approve' + key).prop("disabled", true);

                }

                if (value.create == true && $('#logged_login').val() == created_by_role) {
                    $('#create' + key).prop("disabled", false);
                    $('#all' + key).prop("disabled", false);
                }
                if (value.edit == true && $('#logged_login').val() == created_by_role) {
                    $('#edit' + key).prop("disabled", false);

                }

                if (value.delete == true && $('#logged_login').val() == created_by_role) {
                    $('#delete' + key).prop("disabled", false);

                }


                if (value.block == true && $('#logged_login').val() == created_by_role) {
                    $('#block' + key).prop("disabled", false);

                }
                if (value.view == true && $('#logged_login').val() == created_by_role) {
                    $('#view' + key).prop("disabled", false);

                }
                if (value.approve == true && $('#logged_login').val() == created_by_role) {
                    $('#approve' + key).prop("disabled", false);

                }

            })
            $.each(permissionCompany, function(key, value) {
                if (value.create == true && $('#logged_login').val() == created_by_role) {
                    $('#create' + key).prop("disabled", false);
                    $('#all' + key).prop("disabled", false);
                }
                if (value.edit == true && $('#logged_login').val() == created_by_role) {
                    $('#edit' + key).prop("disabled", false);

                }

                if (value.delete == true && $('#logged_login').val() == created_by_role) {
                    $('#delete' + key).prop("disabled", false);

                }


                if (value.block == true && $('#logged_login').val() == created_by_role) {
                    $('#block' + key).prop("disabled", false);

                }
                if (value.view == true && $('#logged_login').val() == created_by_role) {
                    $('#view' + key).prop("disabled", false);

                }
                if (value.approve == true && $('#logged_login').val() != created_by_role) {
                    $('#approve' + key).prop("disabled", false);

                }


                if (value.create == false) {
                    $('#create' + key).prop("disabled", true);
                    $('#all' + key).prop("disabled", true);
                }
                if (value.edit == false) {
                    $('#edit' + key).prop("disabled", true);

                }

                if (value.delete == false) {
                    $('#delete' + key).prop("disabled", true);

                }


                if (value.block == false) {
                    $('#block' + key).prop("disabled", true);

                }
                if (value.view == false) {
                    $('#view' + key).prop("disabled", true);

                }
                if (value.approve == false) {
                    $('#approve' + key).prop("disabled", true);

                }

            })


            var img = document.getElementById('profile_img').value;


            FilePond.registerPlugin(
                // encodes the file as base64 data
                FilePondPluginFileEncode,


                // validates files based on input type
                FilePondPluginFileValidateType,


                // validates files size
                FilePondPluginFileValidateSize,




                // corrects mobile image orientation
                FilePondPluginImageExifOrientation,


                // previews the image
                FilePondPluginImagePreview,


                // crops the image to a certain aspect ratio
                FilePondPluginImageCrop,


                // resizes the image to fit a certain size
                FilePondPluginImageResize,


                // applies crop and resize information on the client
                FilePondPluginImageTransform,
                FilePondPluginFilePoster
            );


            FilePond.create(
                document.querySelector('.filepond-profile'), {
                    labelIdle: `Drag & Drop Image or <span class="filepond--label-action">Browse</span>`,
                    imageCropAspectRatio: '1:1',
                    stylePanelLayout: 'compact circle', //circle/integrated
                    styleLoadIndicatorPosition: 'center bottom',
                    styleButtonRemoveItemPosition: 'center bottom',
                    files: [{
                        source: "1234",
                        options: {
                            type: 'local',
                            file: {
                                name: 'Profile Image',
                                size: 3500000,
                                type: 'image/jpeg'
                            },
                            metadata: {
                                poster: img
                            }
                        }
                    }]
                }
            );




        },
        error: function(output) {


        }
    });
}


$('#new_member').click(function() {


    $('#image-profile').text("");
    $('#image-profile').append(getTempDiv());
    initilizeImage();
    $('#bank_details').hide();
    cleardatas();

    $("#ModalAddUser").modal("show")
    $('#permission').show();
    // if ($('#logged_login').val() != "Admin") {
    var roleidd = $('#opened_role').val();
    // var idd = $('#ids').val();
    $.ajax({
        url: '/edit/getPermissions' + '/' + roleidd,
        type: 'GET',
        success: function(output) {
            console.log(output);
            var data = output['data'];
            var permission = output['permission'];
            $.each(permission, function(key, value) {

                if (value.create == false) {
                    $('#create' + key).prop("disabled", true);
                    $('#all' + key).prop("disabled", true);
                }



                if (value.edit == false) {
                    $('#edit' + key).prop("disabled", true);

                }

                if (value.delete == false) {
                    $('#delete' + key).prop("disabled", true);

                }


                if (value.block == false) {
                    $('#block' + key).prop("disabled", true);

                }


                if (value.view == false) {
                    $('#view' + key).prop("disabled", true);

                }


                if (value.approve == false) {
                    $('#approve' + key).prop("disabled", true);

                }


                if (value.create == true) {
                    $('#create' + key).prop("disabled", false);
                    $('#all' + key).prop("disabled", false);
                }
                if (value.edit == true) {
                    $('#edit' + key).prop("disabled", false);

                }

                if (value.delete == true) {
                    $('#delete' + key).prop("disabled", false);

                }


                if (value.block == true) {
                    $('#block' + key).prop("disabled", false);

                }
                if (value.view == true) {
                    $('#view' + key).prop("disabled", false);

                }
                if (value.approve == true) {
                    $('#approve' + key).prop("disabled", false);

                }

            })

        },
        error: function(output) {


        }
    });

    // }


});



$('#crewAddform').on('submit', (function(e) {
    e.preventDefault();
    var form = $('#crewAddform')[0];
    var formData = new FormData(form);
    var validation = 1;
    var img = $('#profile').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    if (name == '') {
        validation = 0;
    }
    if (email == '') {
        validation = 0;
    }
    if ($('#country_code').val() == "") {

        validation = 0;
    }
    if (phone == '') {
        validation = 0;
    }
    if ($('#role').val() == "") {

        validation = 0;
    }

    if ($('#zone').val() == "") {
        $('#zone-select').html('<span style="color:red" ><small>Select Zone</small></span>');
        validation = 0;
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
            url: '/create/addCrew',
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


                console.log(response);
                if (response.status == "Validation Error") {
                    $('#validation').empty();
                    if (response.message == "Enter Password") {
                        $('#validation').empty();
                        $('#passwordError').html('<span style="color:red" ><small>Enter Password</small></span>');
                    } else if (response.message == "Upload Profile Image") {
                        $('#passwordError').empty();
                        $('#validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }

                    $("#verify").hide();
                    $("#savebtn").show();
                    $(window).scrollTop(0);
                }
                if (response.status == "Email") {
                    $('#validation').empty();
                    $("#verify").hide();
                    $("#savebtn").show();
                    if (response.message == "The email address is invalid.") {
                        $('#phone-validation').empty();
                        $('#password-validation').empty();
                        $('#passwordError').empty();
                        $('#email-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "The email address is already in use by another account.") {
                        $('#phone-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#passwordError').empty();
                        $('#email-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "INVALID_PHONE_NUMBER : TOO_SHORT") {
                        $('#email-validation').empty();
                        $('#password-validation').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "INVALID_PHONE_NUMBER : TOO_LONG") {
                        $('#email-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#passwordError').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "The phone number is already in use by another account.") {
                        $('#email-validation').empty();
                        $('#validation').empty();
                        $('#show_error').empty();
                        $('#password-validation').empty();
                        $('#passwordError').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }


                    if (response.message == "Invalid phone number: The string supplied is too long to be a phone number.") {
                        $('#email-validation').empty();
                        $('#password-validation').empty();
                        $('#passwordError').empty();
                        $('#phone-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }
                    if (response.message == "A password must be a string with at least 6 characters.") {
                        $('#email-validation').empty();
                        $('#phone-validation').empty();
                        $('#passwordError').empty();
                        $('#password-validation').html('<span style="color:red" ><small>' + response.message + '</small></span>');
                    }

                    $(window).scrollTop(0);
                }
                if (response.status == "Error") {
                    $('#show_error').show();
                    $('#show_error').text(response.message)
                    $("#verify").hide();
                    $("#savebtn").show();
                    $(window).scrollTop(0);
                }

                if (response.status == "Success") {
                    var document1 = response.document1;
                    var document2 = response.document2;
                    var role = response.role;
                    if ($('input[name="profile_image"]').val() != "1234") {
                        var file = jQuery.parseJSON($('input[name="profile_image"]').val());
                        fileUpload(file, document1, document2, role);
                    } else {
                        $("#verify").hide();
                        $("#saved").show();
                        $('#savebtn').hide();
                        $('#role').val('');
                        $('#ModalRole').modal('hide');
                        $('#ModalAddUser').modal('hide');

                        $.notify({
                            // options
                            icon: 'fas fa-check text-success',
                            title: 'Updated',
                            message: 'Successfully',
                        }, {

                            type: 'light',
                            placement: {
                                from: "top",
                                align: "right"
                            },
                            mouse_over: 'pause',
                            delay: 1000,
                        });

                        cleardatas()
                        window.location.href = "/view/crewlist/" + role;

                    }

                }

            }
        });


    }


}));


function cleardatas() {
    // location.reload();
    $('#name').val('');
    $('#id').val('');
    $(':input[type="password"]').prop('disabled', false);
    $('#email').val('');
    $('#phone').val('');
    $('#role').val('');
    $('#account_number').val('');
    $('#account_name').val('');
    $('#password').val('');
    $('#filepond').val('');
    $('#savebtn').text('Save');
    $('#savebtn-2').text('Save');
    $('#profile_img').val('');
    $('#role').val($("#role option:first").val()).trigger('change');
    $('#zone').val('');
    $('#zone').trigger('change');
    $('#country_code').val('');
    $('#country_code').trigger('change');
    // var id = $(this).data("id");
    // $(this).remove(); // to remove that item from list
    // $('#zone :selected').each(function(i, selected){
    //    if($(this).val() == id){
    //      $("select option[value='"+id+"']").prop("selected", false); // to deselect that option from selectbox
    //    }
    // });


    // $('#zone option').each(function(index, option) {
    //     //$(option).remove();
    //     $('option:selected', this).remove();
    // });

    // $('#bank').val($("#bank option:first").val()).trigger('change');
    $('tbody tr td input[type="checkbox"]').each(function() {
        $(this).prop('checked', false);
    });
    $('#checkbox1').prop('checked', false);



    // $("#zone option:selected").prop("selected", false);
    // $("#zone").multiselect( 'refresh' );


}



$('.selectAll').click(function(e) {
    $(this).closest('tr').find('td input:checkbox').prop('checked', this.checked);


});


$('.createChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});



$('.deleteChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});


$('.editChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});


$('.viewChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});


$('.blockChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});


$('.approveChange').click(function(e) {


    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6 && $(this).closest('tr').find(".selectAll").prop("checked", true)) {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }
    if ($(this).closest('tr').find('input[type=checkbox]').filter(':checked').length == 6) {
        $(this).closest('tr').find(".selectAll").prop("checked", true);


    } else {
        $(this).closest('tr').find(".selectAll").prop("checked", false);
    }


});




$('body').on('click', '.filepond--action-remove-item', function(e) {
    e.preventDefault();


    alert('dsds');
});

function getTempDiv() {
    var strDiv = '<input type="file" ' +
        'class="file-pond filepond-profile"' +
        'name="profile_image" id="profile"' +
        'data-max-file-size="512KB"' +
        'accept="image/png, image/jpeg, image/gif" >';


    return strDiv;
}

function initilizeImage() {
    FilePond.registerPlugin(
        // encodes the file as base64 data
        FilePondPluginFileEncode,

        // validates files based on input type
        FilePondPluginFileValidateType,

        // validates files size
        FilePondPluginFileValidateSize,



        // corrects mobile image orientation
        FilePondPluginImageExifOrientation,

        // previews the image
        FilePondPluginImagePreview,

        // crops the image to a certain aspect ratio
        FilePondPluginImageCrop,

        // resizes the image to fit a certain size
        FilePondPluginImageResize,

        // applies crop and resize information on the client
        FilePondPluginImageTransform,
        FilePondPluginFilePoster
    );

    FilePond.create(
        document.querySelector('.filepond-profile'), {
            labelIdle: `Drag & Drop Image or <span class="filepond--label-action">Browse</span>`,
            imageCropAspectRatio: '1:1',
            stylePanelLayout: 'compact circle', //circle/integrated
            styleLoadIndicatorPosition: 'center bottom',
            styleButtonRemoveItemPosition: 'center bottom',


        }
    );
}

function onlyNumberKey(evt) {

    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 45 || ASCIICode > 57||ASCIICode==47))
        return false;
    return true;
    }