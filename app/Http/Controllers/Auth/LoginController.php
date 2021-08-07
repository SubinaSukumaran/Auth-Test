<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Kreait\Firebase\Auth as FirebaseAuth;
use Kreait\Firebase\Exception\FirebaseException;
use Illuminate\Validation\ValidationException;
use Redirect;
use Auth;
use App\Models\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $auth;
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(FirebaseAuth $auth)
    {
      
        $this->middleware('guest')->except('logout');
        $this->auth = $auth;
        
    }
    protected function login(Request $request) {
     
        try {
           $signInResult = $this->auth->signInWithEmailAndPassword($request['email'], $request['password']);
         //   dd( $signInResult);
    //dd( $signInResult->data()) ;
     // dd($signInResult->data());
      \Session::put('uid',  $signInResult->data()['localId']); 

      if(isset($signInResult->data()['displayName']))
      {   
         \Session::put('role',  $signInResult->data()['displayName']); 
      }
     
           $user = new User($signInResult->data());
 
           $result = Auth::login($user);
     
           return redirect($this->redirectPath());
        } catch (FirebaseException $e) {
        
         //  throw ValidationException::withMessages([$this->username() => [trans('auth.failed')],]);
           return Redirect::back()->with('login_error',$e->getMessage());
        }
     }

     public function username() {
        return 'email';
     }
 

 
}
