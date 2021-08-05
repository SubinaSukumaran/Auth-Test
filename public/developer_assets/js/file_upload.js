 function fileUpload(file, document1, document2, role) {
     // Initialize Firebase
  
     var storage = firebase.storage();
     var storageRef = storage.ref();
     var data = file.data;
     var type = file.type;
     var name = +new Date() + "-" + file.name;
     var ref = storageRef.child("Company").child(document1).child(name); //give upload path and dynamic name here
     var blobFile = base64ImageToBlob(data, type);
     var uploadTask = ref.put(blobFile).then((snapshot) => {
         console.log('Uploaded a blob or file!');
         snapshot.ref.getDownloadURL().then(function(url) {
             var imggg = url;
             $.ajax({
                 url: '/view/update-image',
                 type: 'GET',
                 data: {
                     imageUrl: imggg,
                     document1: document1,
                     document2: document2,
                 },
                 success: function(response) {

                     $("#verify").hide();
                     $("#saved").show();
                     $('#savebtn').hide();
                     //  $('#role').val('');
                     $('#ModalRole').modal('hide');
                     $('#ModalAddUser').modal('hide');
                     $.notify({
                         // options
                         icon: 'fas fa-check text-success',
                         title: 'Created',
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
                     if (role == null) {
                         window.location.href = "/view/rolelist";
                     } else {
                         window.location.href = "/view/crewlist/" + role;
                     }


                 }
             });
         });
     });

     function base64ImageToBlob(data, type) {
         // extract content type and base64 payload from original string
         var b64 = data;
         // decode base64
         var imageContent = atob(b64);
         // create an ArrayBuffer and a view (as unsigned 8-bit)
         var buffer = new ArrayBuffer(imageContent.length);
         var view = new Uint8Array(buffer);
         // fill the view, using the decoded base64
         for (var n = 0; n < imageContent.length; n++) {
             view[n] = imageContent.charCodeAt(n);
         }
         // convert ArrayBuffer to Blob
         var blob = new Blob([buffer], { type: type });
         return blob;

     }
 }