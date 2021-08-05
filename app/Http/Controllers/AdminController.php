<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;
class AdminController extends Controller
{
    public function changePassword(Request $request)
    {
        $auth=app('firebase.auth');
        $uid=\Session::get('uid');
        $updatedUser = $auth->changeUserPassword($uid, $request->new_password);

    }
    public function forgetPassword(Request $request)
    {
            $auth = app('firebase.auth');
            try{
                $link = $auth->sendPasswordResetLink($request->email);
            }

            catch (\Exception $e) {

             //   return $e->getMessage();
              //  return response()->json(['status'=>"Email",'message'=>$e->getMessage()]);
                return  Redirect::back()->with('emailerror',$e->getMessage())->withInput();
            }
         
            return view('auth.login');


    }
    public function noAccess()
    {
        return view('auth.access_denied');
    }
}
