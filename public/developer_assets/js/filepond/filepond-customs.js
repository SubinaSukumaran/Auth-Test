/*!
 * filepond-custom
 * Please visit https://pqina.nl/filepond/ for details.
 */


/*
We need to register the required plugins to do image manipulation and previewing.
*/
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
    FilePondPluginImageTransform
);

// Select the file input and use create() to turn it into a pond
// in this example we pass properties along with the create method
// we could have also put these on the file input element itself
FilePond.create(
    document.querySelector('#filepond-1'), {
        labelIdle: `Drag & Drop Image or <span class="filepond--label-action">Browse</span>`,
        //imagePreviewHeight: 170,
        imageCropAspectRatio: '4:2',
        //imageResizeTargetWidth: 200,
        //imageResizeTargetHeight: 200,
        //stylePanelLayout: 'compact', //circle/integrated
        //styleLoadIndicatorPosition: 'center bottom',
        //styleButtonRemoveItemPosition: 'center bottom'
    }
);

FilePond.create(
    document.querySelector('#filepond-2'), {
        labelIdle: `Drag & Drop Image or <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '1:1'
    }
);


FilePond.create(
    document.querySelector('.filepond-vehicle'), {
        labelIdle: `Drag & Drop Vehicle Image or <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);

FilePond.create(
    document.querySelector('.filepond-add-doc-1'), {
        labelIdle: `Upload Bank Book Copy  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
        //   files: [{
        //     source: "assets/images/posts/4.jpg",
        //     options: {
        //         type: 'localhost',
        //     }
        //   }]
    }
);

FilePond.create(
    document.querySelector('.filepond-add-lic-1'), {
        labelIdle: `Upload Driving Licence Copy Front  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);
FilePond.create(
    document.querySelector('.filepond-add-lic-2'), {
        labelIdle: `Upload Driving Licence Copy Back  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);
FilePond.create(
    document.querySelector('.filepond-add-nin-1'), {
        labelIdle: `Upload National Identification Number Front  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);
FilePond.create(
    document.querySelector('.filepond-add-nin-2'), {
        labelIdle: `Upload National Identification Number  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);
FilePond.create(
    document.querySelector('.filepond-add-inc'), {
        labelIdle: `Upload Vehicle Insurance  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);
FilePond.create(
    document.querySelector('.filepond-add-rc'), {
        labelIdle: `Upload Vehicle RC  <span class="filepond--label-action">Browse</span>`,
        imageCropAspectRatio: '4:2',
    }
);

// FilePond.create(
//     document.querySelector('.filepond-profile'), {
//         labelIdle: `Drag & Drop Profile Image or <span class="filepond--label-action">Browse</span>`,
//         allowFileTypeValidation: true,
//         imageCropAspectRatio: '1:1',
//         stylePanelLayout: 'compact circle', //circle/integrated
//         styleLoadIndicatorPosition: 'center bottom',
//         styleButtonRemoveItemPosition: 'center bottom',
//         // files: [{
//         //   source: "https://firebasestorage.googleapis.com/v0/b/edrop-6c149.appspot.com/o/users%2F2.jpg?alt=media&token=0e01bb84-79b1-42af-a10e-d868dd577980",

//         // }],
//         labelMaxFileSizeExceeded: 'File is too large',
//         labelMaxFileSize: 'Maximum file size is {512KB}'
//     }
// );