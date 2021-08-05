
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
	document.querySelector('.filepond-vehicle-add'),
	{
	labelIdle: `Drag & Drop Vehicle Image or <span class="filepond--label-action">Browse</span>`,
  imageCropAspectRatio: '4:2',
//   files: [{
// 	source:"1234",
// 	options: {
// 		type: 'local',

// 		// stub file information
// 		file: {
// 			name: 'Vehicle Image',
// 			size: 3500000,
// 			type: 'image/jpeg'
// 		},

// 		// pass poster property
// 		metadata: {
// 			poster: 'https://storage.googleapis.com/cabture-lilac.appspot.com/drivers/N1LAF9Vk0XZ02S1kOVMyw0GUGya2/20195502441617024686.jpg?GoogleAccessId=firebase-adminsdk-78c1j%40cabture-lilac.iam.gserviceaccount.com&Expires=1648560687&Signature=N%2FQYoV%2B3WCmU0beGSQ1kXPuCH3G1YvFckR43nBkhdPP3WQrXvS%2F8mC%2FukjV2YoVyJ0BLY1r7%2Fa8Zgc7d%2BEspa4yKni%2F0eukMoA%2B35pIFkwPXEiNN%2F%2BwBLSq%2FR0N28UYLlGQ1Yxyg48dUd7fsT%2FSDZZQtpBBzs4zkPh3g3iVteiERMoyjE8JAewprRvaeAvid8t9GMwXdih2aaigzWtYanuOEossbzIGehz3HNgTqtvcTOGIhW3dbmU9kq4L3G2AS1lz4ZEdINCV2F%2BBQALAwukyfc5bpY8EmKb%2B7eengfPgu6JVanmJyOgxwe1HfVWl03CYaqkmfolg8ZVDF9sC3dw%3D%3D&generation=1617024687157597'
// 		}
// 	}
//   }]
	}
);

