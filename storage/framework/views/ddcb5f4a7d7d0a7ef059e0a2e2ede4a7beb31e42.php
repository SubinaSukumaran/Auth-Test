<!doctype html>
<html lang="en" class="wide wow-animation">

<head>
  <meta charset="UTF-8" />
  <meta name="description" content="">
  <meta name="keywords" content="">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
  <title>Signin -Movers</title>
  <!-- Bootstrap -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <!-- Font awesome -->
  <link href="assets/fonts/fontawesome/css/all.min.css" rel="stylesheet">
  <!-- line-awesome -->
  <link href="assets/fonts/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet">
  <!-- bootstrap-select -->
  <link rel="stylesheet" href="assets/css/bootstrap-select-min.css">
  <!-- animate -->
  <link href='assets/css/animate.min.css' rel="stylesheet">
  <!-- magnific-popup -->
  <link href='assets/css/magnific-popup.css' rel="stylesheet">
  <!-- daterangepicker -->
  <link href='assets/css/daterangepicker.css' rel="stylesheet">
  <!-- select2 -->
  <link href='assets/css/select2.min.css' rel="stylesheet">
  <!-- fancybox -->
  <link href='assets/css/jquery.fancybox.min.css' rel="stylesheet">
  <!-- e-drop -->
  <link href="assets/css/e-drop.min.css" rel="stylesheet">
  <!--for developers-->
  <link rel="stylesheet" href="assets/css/developers.css">
  
  <!-- Google fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
  
  <!-- Favicons -->
  <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png" sizes="180x180">
  <link rel="icon" href="assets/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="assets/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="mask-icon" href="assets/favicons/favicon-safari-pinned-tab.svg" color="#000">
  <meta name="theme-color" content="#7A3EFB">
</head>

<body class="page-signin d-flex flex-column align-items-center justify-content-center full-screen bg-offwhite">
	
	 <!-- <span class="bgd-full bgd-bottom position-fixed full-screen" style="background-image: url('assets/img/bg/bg-whatsApp.png'); opacity:.1"></span> -->
    <!-- /background  -->
	
   <div class="wrapper w-100">
        <div class="container-fluid">
            <div class="row justify-content-center">
               <div class="col-md-5">
                    <div class="card card-login border-0 shadow p-4 p-xl-5 radius-22 h-100">
                        <div class="mb-3 text-center">
                            <figure class="brand mb-4 mx-auto">
                                <img src="" alt="Movers">
                            </figure>
                           
                            <h5 class="text-gray-2">Forgot password?</h5>
                            <p>Enter your user account's verified email address and we'll send you a password reset link.</p>
                        </div>
                        <form class="needs-validation" novalidate id="forgetPassword" method="POST" action="<?php echo e(route('forgetPassword')); ?>">
                        <?php echo e(csrf_field()); ?>

                        <div id="validation"></div>
                            <div class="form-group is-floating-label required-item">
                              <label class="form-control-placeholder" for="">Email</label>
                              <input type="text" required="" class="form-control field" value="<?php echo e(old('email')); ?>" name="email">
                              <div class="invalid-feedback text-left">Invalid Mail</div>
                            </div>
                            <div class="form-group">
                          <button type="submit" class="btn btn-primary btn-ripple btn-block">Reset Password</button>
                            </div>
                        </form>
                        <!-- /form -->

                        <!--/ show if user filed success -->
                        <div class="p-3 alert alert-success radius-9 text-center d-none">
                          An e-mail with instructions to create a new password has been sent to you.
                        </div>

                        <div class="text-center">
                            <a href="/">Sign in</a>
                        </div>

                        <div class="copyright mt-4 text-center f-size-13">
                             <div>Copyright © <span class="current-year"></span> <span class="fw-medium">Movers</span>. All rights reserved.</div>
                             <div>Designed by <a href="https://www.lilacinfotech.com/" target="_blank">Lilac Infotech Pvt. Ltd.</a></div>
                        </div><!--/copyright-->

                    </div>
               </div>
            </div><!--/row-->          
        </div>
    </div><!--/wrapper-->

  <!-- Bootstrap core JavaScript
================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="assets/js/jquery-3.4.1.min.js"></script>
  <script src="assets/js/bootstrap.bundle.js"></script>
  <script src="assets/js/jquery.easing.min.js"></script>
  <!--XXX-<-Extras->-XXX-->
  <script src="assets/js/bootstrap-select.min.js"></script>
  <script src="assets/js/owl.carousel.js"></script>
  <script src="assets/js/custom-file-input.js"></script>
  <script src="assets/js/device.min.js"></script>
  <script src="assets/js/resize.min.js"></script>
  <!-- <script src="assets/js/nav.js"></script> -->
  <script src="assets/js/jquery.scrollbar.min.js"></script>
  <script src="assets/js/jquery.ui.totop.min.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/loader.js"></script>
  <script src="assets/js/progressively.min.js"></script>
  <script src="assets/js/magnific-popup.js"></script>
  <script src="assets/js/datepicker/moment.min.js"></script>
  <script src="assets/js/datepicker/daterangepicker.js"></script>
  <script src="assets/js/select2/select2.min.js"></script>
  <!--<script src="assets/js/nicescroll/jquery.nicescroll.min.js"></script>-->
  <script src="assets/js/custom.js"></script>
  <script>
   <?php if(session('emailerror')): ?> 
 $('#validation').html(' <p class="alert alert-danger"><?php echo e(Session::get('emailerror')); ?></p>');
                $(window).scrollTop(0);
 <?php endif; ?>
  </script>
</body>

</html><?php /**PATH /home/li14/projects/movers/resources/views/auth/passwords/reset.blade.php ENDPATH**/ ?>