<?php if(Session::get('uid')): ?>
<script>window.location = "/home";</script>
<?php endif; ?>
<!doctype html>
<html lang="en" class="wide wow-animation">

<head>
  <meta charset="UTF-8" />
  <meta name="description" content="">
  <meta name="keywords" content="">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
  <title>Signin - Movers</title>
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
                    <div class="card card-login border-0 shadow p-4 p-xl-5 radius-22 h-100 mx-auto">
                        <div class="mb-3 text-center">
                            <figure class="brand mb-4 mx-auto">
                                <img src="<?php echo e(asset('developer_assets/images/movers_logo.jpg')); ?>" alt="Movers" width="100">
                            </figure>
                            <h5 class="text-gray-2">Welcome to <b>Movers Admin</b></h5>
                        </div>
                        <div id="validation"> </div>
                        <form method="POST" action="<?php echo e(route('login')); ?>" class="needs-validation" novalidate>
                         <?php echo csrf_field(); ?>
                            <div class="form-group is-floating-label label-inside required-item">
                                <label class="form-control-placeholder" for="">Email</label>
                                <input type="text" required="" class="form-control field" name="email" id="email">
                         
                                <div class="invalid-feedback text-left">Invalid User</div>
                               
                                
                              </div>
                              <div class="form-group is-floating-label label-inside required-item password-wrap" id="pass">
                                <label class="form-control-placeholder" for="">Password</label>
                                <input type="password" id="password-field" required="" class="form-control field" name="password">
                                <i class="toggle-password fas fa-eye fa-eye-slash" toggle="#password-field"></i>
                                <div class="invalid-feedback text-left">Invalid Password</div>
                              </div>
                              <div class="form-group d-flex align-items-center mb-4">
                                <!-- <div class="mr-auto">
                                  <label class="custom-check type-checkbox mb-0 mr-3"> Remember me
                                      <input type="checkbox" value="" name="remember">
                                      <span class="checkmark"></span>
                                  </label>
                                </div> -->
                                
                                <div>
                                    <a href="/resetPassword">Forgot Password?</a>
                                </div>
                              </div>
                              <div class="form-group mb-0">
                                <button type="submit" class="btn btn-primary btn-ripple btn-block">Login</button>
                              </div>
                        </form>
                        <!-- /form -->

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
  <script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-auth.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
      // Initialize Firebase
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
      var facebookProvider = new firebase.auth.FacebookAuthProvider();
      var googleProvider = new firebase.auth.GoogleAuthProvider();
      var facebookCallbackLink = '/login/facebook/callback';
      var googleCallbackLink = '/login/google/callback';
      async function socialSignin(provider) {
        var socialProvider = null;
        if (provider == "facebook") {
          socialProvider = facebookProvider;
          document.getElementById('social-login-form').action = facebookCallbackLink;
        } else if (provider == "google") {
          socialProvider = googleProvider;
          document.getElementById('social-login-form').action = googleCallbackLink;
        } else {
          return;
        }
        firebase.auth().signInWithPopup(socialProvider).then(function(result) {
          result.user.getIdToken().then(function(result) {
            document.getElementById('social-login-tokenId').value = result;
            document.getElementById('social-login-form').submit();
          });
        }).catch(function(error) {
          // do error handling
          console.log(error);
        });
      }
   
      </script>
    
    <script>
    $('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
            $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
          }).trigger('blur'); 
    </script>
    
      <script>
      <?php if(session('login_error')): ?> 
              $('#validation').empty();
              $('#validation').html(' <p class="alert alert-danger"><?php echo e(session('login_error')); ?></p>');
              $(window).scrollTop(0);
      <?php endif; ?>

      </script>
   
</body>

</html>


      

<?php /**PATH /home/li14/projects/movers/resources/views/auth/login.blade.php ENDPATH**/ ?>