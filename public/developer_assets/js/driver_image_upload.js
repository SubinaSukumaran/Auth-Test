     // Initialize Firebase
     //  var firebaseConfig = {
     //      apiKey: "AIzaSyBUrau-Hk6glBJ5LTXhd3xUjZlJxNixXLI",
     //      authDomain: "edrop-6c149.firebaseapp.com",
     //      projectId: "edrop-6c149",
     //      storageBucket: "edrop-6c149.appspot.com",
     //      messagingSenderId: "787355765666",
     //      appId: "1:787355765666:web:6b74d5d0e30e4cb295c0fb",
     //      measurementId: "G-M1LSE27PJP"
     //  };
     //  firebase.initializeApp(firebaseConfig);
     var storage = firebase.storage();
     var storageRef = storage.ref();

     function fileUpload(file, document, driverType, rolename) {
         var data = file.data;
         var type = file.type;
         var name = +new Date() + "-" + file.name;
         var ref = storageRef.child(driverType + "Driver").child(document).child(name); //give upload path and dynamic name here
         var blobFile = base64ImageToBlob(data, type);
         var uploadTask = ref.put(blobFile).then((snapshot) => {
             console.log('Uploaded a blob or file!');
             snapshot.ref.getDownloadURL().then(function(url) {
                 var imggg = url;
                 $.ajax({
                     url: '/view/update-driver-image',
                     type: 'GET',
                     data: {
                         imageUrl: imggg,
                         document: document,
                         rolename: rolename,
                         type: driverType,
                     },
                     success: function(response) {

                     }
                 });

             });
         });
     }

     function fileUploadLicense(file, document, driverType) {
         var storage = firebase.storage();
         var storageRef = storage.ref();
         var data = file.data;
         var type = file.type;
         var name = +new Date() + "-" + file.name;
         var ref = storageRef.child(driverType + "Driver").child(document).child(name); //give upload path and dynamic name here
         var blobFile = base64ImageToBlob(data, type);
         var uploadTask = ref.put(blobFile).then((snapshot) => {
             console.log('Uploaded a blob or file!');
             snapshot.ref.getDownloadURL().then(function(url) {
                 var imggg = url;
                 $.ajax({
                     url: '/view/update-driver-license',
                     type: 'GET',
                     data: {
                         imageUrl: imggg,
                         document: document,
                         type: driverType,
                     },
                     success: function(response) {

                     }
                 });
             });
         });

     }

     function fileUploadNinBack(file, document, driverType) {
         var data = file.data;
         var type = file.type;
         var name = +new Date() + "-" + file.name;
         var ref = storageRef.child(driverType + "Driver").child(document).child(name); //give upload path and dynamic name here
         var blobFile = base64ImageToBlob(data, type);
         var uploadTask = ref.put(blobFile).then((snapshot) => {
             console.log('Uploaded a blob or file!');
             snapshot.ref.getDownloadURL().then(function(url) {
                 var imggg = url;
                 $.ajax({
                     url: '/view/update-driver-nin-back',
                     type: 'GET',
                     data: {
                         imageUrl: imggg,
                         document: document,
                         type: driverType,
                     },
                     success: function(response) {

                     }
                 });
             });
         });


     }

     function fileUploadNinFront(file, document, driverType) {
         var data = file.data;
         var type = file.type;
         var name = +new Date() + "-" + file.name;
         var ref = storageRef.child(driverType + "Driver").child(document).child(name); //give upload path and dynamic name here
         var blobFile = base64ImageToBlob(data, type);
         var uploadTask = ref.put(blobFile).then((snapshot) => {
             console.log('Uploaded a blob or file!');
             snapshot.ref.getDownloadURL().then(function(url) {
                 var imggg = url;
                 $.ajax({
                     url: '/view/update-driver-nin-front',
                     type: 'GET',
                     data: {
                         imageUrl: imggg,
                         document: document,
                         type: driverType,
                     },
                     success: function(response) {
                         $("#verify").hide();
                         $("#saved").show();
                         $('#validation').hide();
                     }
                 });
             });
         });
     }

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