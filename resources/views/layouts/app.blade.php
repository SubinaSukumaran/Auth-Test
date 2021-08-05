<!doctype html>
<html lang="en" class="wide wow-animation">
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="">
  <meta name="keywords" content="">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
  <!-- Bootstrap -->
  <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
  <!-- Font awesome -->
  <link href="{{asset('assets/fonts/fontawesome/css/all.min.css')}}" rel="stylesheet">
  <!-- line-awesome -->
  <link href= "{{asset('assets/fonts/line-awesome/1.3.0/css/line-awesome.min.css')}}"rel="stylesheet">
  <!-- bootstrap-select -->
  <link rel="stylesheet" href="{{asset('assets/css/bootstrap-select-min.css')}}">
  <!-- animate -->
  <link href="{{asset('assets/css/animate.min.css')}}" rel="stylesheet">
  <!-- magnific-popup -->
  <link href="{{asset('assets/css/magnific-popup.css')}}" rel="stylesheet">
  <!-- daterangepicker -->
  <link href="{{asset('developer_assets/css/daterangepicker.css')}}" rel="stylesheet">
  <!-- select2 -->
  <link href="{{asset('assets/css/select2.min.css')}}" rel="stylesheet">
  <!-- fancybox -->
  <link href="{{asset('assets/css/jquery.fancybox.min.css')}}" rel="stylesheet">
    <!-- filepond -->
    <link  href="{{asset('developer_assets/css/filepond/filepond-plugin-image-preview.min.css')}}" rel='stylesheet'>
  <link  href="{{asset('developer_assets/css/filepond/filepond.min.css')}}" rel='stylesheet'>
  <link  href="{{asset('developer_assets/css/filepond/filepond-plugin-file-poster.css')}}" rel='stylesheet'>
  <link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet" />
  <!-- e-drop -->
  <link href="{{asset('assets/css/e-drop.min.css')}}" rel="stylesheet">
  <!--for developers-->
  <link rel="stylesheet" href="{{asset('assets/css/developers.css')}}">
  
  <!-- Google fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
  
  <!-- Favicons -->
  <link rel="apple-touch-icon" href="{{asset('assets/favicons/apple-touch-icon.png')}}" sizes="180x180">
  <link rel="icon" href="{{asset('assets/favicons/favicon-32x32.png')}}" sizes="32x32" type="image/png">
  <link rel="icon" href="{{asset('assets/favicons/favicon-16x16.png')}}" sizes="16x16" type="image/png">
  <link rel="mask-icon" href="{{asset('assets/favicons/favicon-safari-pinned-tab.svg')}}" color="#000">
  <meta name="theme-color" content="#7A3EFB">
<style>
    .mac.firefox .sidebar-wrap .inner nav {overflow-y:scroll}
    
    .sidebar-wrap .inner nav { /*for sidebar nav max height */
            height: calc(100vh - 150px);
        }
</style>
</head>
<body class="bg-offwhite {{$class_name}}">
    <header class="py-3 border-bottom">
        <div class="wrapper">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <div class="d-md-none">
                        <button id="hamburgerButton" class="btn btn-icon f-size-18 btn-circle text-gray-3 hover mr-2"><i class="fas fa-bars f-size-18"></i></button>
                    </div>
                    <div class="search-warp mr-2 mr-sm-0">
                        <div class="search-control">
                            <span class="search-icon"><i class="la la-search"></i></span>
                            <input type="search" placeholder="Search..."  autocomplete="off" onkeyup="allsearch()" id="filter" onclick="allsearch()" id="searchAutoFilter" class="form-control form-control-sm form-control-search radius-22">
                        </div>
                        <div class="search-filter border bdr-smoke radius-16" id="searchRslt1">
                            <div class="inner scrollbar-macosx no-scroll-x">
                                <ul class="commentlist">
                               
                                    
                                    <li class="no-data small" style="display:none;" id='no_result'>No result found <em>"you entered text"</em></li>
                                </ul>
                            </div>                           
                        </div>
                    </div>




                    <div class="header-controls d-flex align-items-center ml-auto">
                      <div class="position-relative notification-control mr-3">
                            <button id="notificationIcon" class="btn btn-icon f-size-18 btn-circle hover text-gray-3 dropdown-toggle no-arrow " 
                            data-toggle="dropdown" 
                            data-offset="-235,12"
                            aria-haspopup="true">
                                <i class="fas fa-bell"></i>
                            </button>
                            <div class="dropdown-menu show-arrow dropdown-lg radius-16 bdr-smoke shadow">
                                <div class="dropdown-header bg-primary d-flex align-items-center p-3"> 
                                    <div class="">
                                        <h6 class="text-white mb-0">New Notifications</h6> 
                                    </div>
                                    <div class="my-auto ml-auto"> 
                                        <!-- <span class="btn btn-sm small badge badge-pill badge-light text-gray-2">Mark All Read</span>  -->
                                    </div> 
                                </div>
                                <div class="dropdown-scroll radius-bottom-16 scrollbar-macosx no-scroll-x" id="notificationLive" >
                               
                                                                  
                                
            
                                    <!-- <div class="dropdown-footer text-center f-size-14">
                                        <a href="#" class="fw-medium">View All</a>
                                    </div> -->
                                </div>
                            </div>
                        </div><!--/notification-control-->
                        </div><!--/notification-control-->



                        <div class="d-none d-sm-block">
                            <!-- <button class="btn btn-icon f-size-18 btn-circle hover text-gray-3  mx-3">
                            <i class="fas fa-street-view"></i>
                            </button> -->
                        </div>
    
                        <div class="user-control position-relative">
                            <div class="user-img dropdown-toggle no-arrow" 
                            data-toggle="dropdown" 
                            data-offset="-175,10"
                            aria-haspopup="true">
                                <img src="{{asset('assets/images/users/1.jpg')}}" alt="user" class="rounded-circle border cursor-pointer">
                            </div>
                            <div class="dropdown-menu show-arrow dropdown-md radius-22 bdr-smoke shadow">
                                <div class="dropdown-header bg-primary d-flex align-items-center p-3"> 
                                    <div class="d-flex flex-column align-items-center text-white mx-auto">
                                        <figure class="w-size-80">
                                            <a href="#"><img src="" alt="user" class="rounded-circle"></a>
                                        </figure>
                                      
                                        <h6 class="mb-0">Admin</h6>
                                        <small>Movers</small>
                                     
                                    </div>                                    
                                </div>
                              
                                <a href="#"  data-toggle="modal" data-target="#changePasswordModal" class="dropdown-item">
                                    <i class="fas fa-key"></i>
                                    Change Password
                                </a>
                              
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                               <i class="fas fa-sign-out-alt"></i>
                                    Sign Out
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                         
                                
                            </div>
                        </div><!--/user-control-->
                    </div>
                </div>
            </div>
        </div>
    </header>
                         
    <!-- /header -->
    <div id="sidebar" class="sidebar-wrap shadow-x-1">
       <div class="inner py-3">
            <div class="brand d-flex align-items-center justify-content-between p-3">
                <a href="/view/home" class="flex-shrink-0"><img src="" width="90" alt="logo"></a>
                <div class="ml-auto d-md-none">
                    <button id="sidebarClose" class="btn btn-icon f-size-18 btn-circle text-gray-3 hover"><i class="fas fa-times f-size-18"></i></button>
                </div>
            </div>
            <div class="scrollbar-macosx no-scroll-x">
            <nav>
                    <ul>
                        <li>
                            <a href="/home" class=""  id="home-list">
                                <span class="icon"><i class="fas fa-home"></i></span>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                       
                    </ul>
                </nav>
              
            </div>
       </div>
    </div>
    <!-- /sidebar-wrap -->

    <main>
        <div class="wrapper">
            <div class="container-fluid">
                <div class="page-info d-flex align-items-center justify-content-between mb-4">
                   @yield('title')
                    <nav class="d-none d-sm-block" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/view/home">Dashboard</a></li>
                            @yield('header_title')
                         
                         </ol>
                     </nav>
                </div>
                <!-- /page-info -->

                @yield('content')


            </div>
        </div>
    </main>
    <!-- /main -->
  
    <footer>
       <div class="wrapper small">
            <div class="container-fluid"> 
                <hr>
                <div class="copyright text-center pb-3 d-flex justify-content-center text-center">
                    <div>
                     <span>Copyright © <span class="current-year"></span> <span class="fw-medium">Movers</span>. All rights reserved.</span>
                     <span class="d-block d-sm-inline">Designed by <a href="https://www.lilacinfotech.com/" target="_blank">Lilac Infotech Pvt. Ltd.</a></span>
                    </div>
                 </div>
            </div>
       </div>
    </footer>
    
    <!-- /footer -->

<!-- Modal For Change Password -->
<div class="modal fade" id="changePasswordModal" tabindex="-1" role="dialog" aria-labelledby="centeredModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Change Password</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form class="needs-validation" novalidate  id="changePasswordForm" method="post" enctype="multipart/form-data">
        {{csrf_field()}}
        <div class="form-group is-floating-label required-item password-wrap">
        <label class="form-control-placeholder" for="">New Password</label>
        <input type="password" id="password-field" name="new_password" required="" class="form-control field">
         <i class="toggle-password fas fa-eye" toggle="#password-field"></i>
         <div class="invalid-feedback text-left">Invalid Password</div>
         </div>
        <div class="form-group is-floating-label required-item password-wrap">
        <label class="form-control-placeholder" for="">Confirm Password</label>
     <input type="password" id="password-field-2" name="confirm_password" required="" class="form-control field">
        <i class="toggle-password fas fa-eye" toggle="#password-field-2"></i>
         <div class="invalid-feedback text-left">Invalid Password</div>
    </div>
                
        </div>
        <div class="modal-footer">
         
          <button type="submit" id="changepassword" class="btn btn-success">Update</button>
        </div>
        </form>
      </div>
    </div>
  </div>

    <div class="menu-overlay overlay w-100 h-100"></div>

  <!-- Bootstrap core JavaScript
================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="{{asset('assets/js/jquery-3.4.1.min.js')}}"></script>
  <script src="{{asset('assets/js/bootstrap.bundle.js')}}"></script>
  <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
  <!--XXX-<-Extras->-XXX-->
  <script src="{{asset('assets/js/bootstrap-select.min.js')}}"></script>
  <script src="{{asset('assets/js/owl.carousel.js')}}"></script>
  <script src="{{asset('assets/js/custom-file-input.js')}}"></script>
  <script src="{{asset('assets/js/device.min.js')}}"></script>
  <script src="{{asset('assets/js/resize.min.js')}}"></script>
  <!-- <script src="assets/js/nav.js"></script> -->
  <script src="{{asset('assets/js/jquery.scrollbar.min.js')}}"></script>
  <script src="{{asset('assets/js/jquery.ui.totop.min.js')}}"></script>
  <script src="{{asset('assets/js/wow.min.js')}}"></script>
  <script src="{{asset('assets/js/loader.js')}}"></script>
  <script src="{{asset('assets/js/progressively.min.js')}}"></script>
  <script src="{{asset('assets/js/magnific-popup.js')}}"></script>
  <script src="{{asset('developer_assets/js/datepicker/moment.min.js')}}"></script>
  <script src="{{asset('developer_assets/js/datepicker/daterangepicker.js')}}"></script>
  <script src="{{asset('assets/js/select2/select2.min.js')}}"></script>
  <script src="{{asset('assets/js/jquery.fancybox.js')}}"></script>
  <!--<script src="assets/js/nicescroll/jquery.nicescroll.min.js"></script>-->
  <script src="{{asset('assets/js/notify/bootstrap-notify.min.js')}}"></script>
  <script src="{{asset('assets/js/notify/notify.js')}}"></script>
  <script src="{{asset('developer_assets/js/chart/chart.min.js')}}"></script>
  <!-- <script src='assets/js/filepond/filepond-plugin-file-encode.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-file-validate-type.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-image-exif-orientation.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-image-crop.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-image-resize.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-image-transform.min.js'></script>
    <script src='assets/js/filepond/filepond-plugin-image-preview.min.js'></script>
    <script src='assets/js/filepond/filepond.min.js'></script>
    <script src='assets/js/filepond/filepond-custom.js'></script> -->

    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-file-encode.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-file-validate-type.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-image-exif-orientation.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-image-crop.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-image-resize.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-image-transform.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-image-preview.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond.min.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-file-validate-size.js')}}"></script>
    <script src="{{asset('developer_assets/js/filepond/filepond-plugin-file-poster.js')}}"></script>
    <!-- <script src="{{asset('developer_assets/js/filepond/filepond-custom.js')}}"></script> -->

  <!-- <script src="assets/js/chart/chart-utils.js"></script> -->
  <script src="{{asset('developer_assets/js/chart/chart-custom.js')}}"></script>
  <!-- <script src="{{asset('developer_assets/js/chart/trip.js')}}"></script> -->

  <!-- <script src="{{asset('developer_assets/js/chart/chart-bookings.js')}}"></script> -->
  <script src="{{asset('developer_assets/js/chart/chart-user.js')}}"></script>
  <script src="{{asset('developer_assets/js/chart/driver-chart.js')}}"></script>
  <script src="{{asset('developer_assets/js/chart/driver-pie-chart.js')}}"></script>
  <script src="{{asset('assets/js/jquery-browserdetect.js')}}"></script>
  <script src="{{asset('assets/js/custom.js')}}"></script>
  <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->

  <script type="text/javascript">
   $(document).ready(function() {
  $("#changePasswordForm").submit(function(e) {
    e.preventDefault();
    var form = $('#changePasswordForm')[0]; 
    var formData = new FormData(form);
    var new_password=($('#password-field').val()).trim();
    var confirm_password=($('#password-field-2').val()).trim();
        if(new_password!=confirm_password)
        {
            alert("password mismatch");
        }
        else{
            $.ajax({
            url: '/changePassword',
            type: 'POST',
            data:formData,
            contentType: false,
            cache: false,
            processData:false,
            success : function(response) {
                $('#changePasswordModal').modal('hide');
                            $.notify({
                // options
                icon: 'fas fa-check text-success',
                title: 'Password Changed',
                message: 'Successfully',
                },{

                type: 'light',
                placement: {
                        from: "top",
                        align: "right"
                },
                mouse_over: 'pause',
                delay: 6000,
                });
            //    window.location.href = "/";
            }         
    });

        }
});

});
</script>
<script type="text/javascript">
   $(document).ready(function() {
  $("#filtersApply").click(function(e) {
    e.preventDefault();
    	$('body').toggleClass('has-filters');
	$('#filters').toggleClass('show');
    var form = $('#driverFilter')[0]; 
    var formData = new FormData(form);
            $.ajax({
            url: '/view/driverFilter',
            type: 'POST',
            data:formData,
            contentType: false,
            cache: false,
            processData:false,  
            beforeSend: function() {
            $("#driver-loader").show();
              $("#search-driver").hide();
                    },

            success: function(response) {
                $("#driver-loader").hide();
                $("#search-driver").show();
             $('#search-driver').html(response);
}       
    });  
});

$('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
                $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
              }).trigger('blur'); 
});

</script>
<script>
      $("#reset").click(function(e) {
    e.preventDefault();
   
    $('input[name="status"]').prop('checked', false);
    $('input[name="category"]').prop('checked', false);
    $('input[name="zone"]').prop('checked', false);
    $('input[name="rating"]').prop('checked', false);
});
</script>
<script>
      $("#clear-status").click(function(e) {
    e.preventDefault();
   
    $('input[name="status"]').prop('checked', false);
});
</script>
<script>
$('.datepickerExport').daterangepicker({
	opens: "center",
    showDropdowns: true,
    maxDate:new  Date(),
    singleDatePicker: true,
	cancelClass: "btn-outline-secondary",
        locale: {
        format: 'YYYY-MM-DD'
        }
});
$('.datepickerExportYear').daterangepicker({
	// opens: "center",
    // singleDatePicker: true,
	cancelClass: "btn-outline-secondary",
        locale: {
            autoclose: true,
            format: " yyyy",
            viewMode: "years",
            minViewMode: "years"
        }
});
 </script>
<script>
      $("#clear-zone").click(function(e) {
    e.preventDefault();
   
    $('input[name="zone"]').prop('checked', false);
});
</script>
<script>
      $("#clear-vehicle").click(function(e) {
    e.preventDefault();
   
    $('input[name="category"]').prop('checked', false);
});
</script>

<!-- <script>
$(document).ready(function(){
    var firebaseConfig = {
    apiKey: "AIzaSyDLgIK3XFJBn3ZqeL2QshkLFV7z71_uihE",
    authDomain: "movers-aff06.firebaseapp.com",
    projectId: "movers-aff06",
    storageBucket: "movers-aff06.appspot.com",
    messagingSenderId: "973891640073",
    appId: "1:973891640073:web:49ccc7dc2fc90a251211d8",
    measurementId: "G-3FF5W61FKL"
    };
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
 
});
</script> -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-firestore.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>
@yield('script')
</body>
</html>