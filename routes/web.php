<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('auth.login');
});

Auth::routes();
Route::get('logout', function(){  
    Session::forget('uid');  
 });  
 Route::get('/addUser', 'FirebaseAuthController@addUser');
 Route::get('privacy-policy','FrontEndController@policy')->name('policy');


 Route::get('/resetPassword', function () {
   return view('auth.passwords.reset');
});


Route::post('/forgetPassword','AdminController@forgetPassword')->name('forgetPassword');
Route::post('login/{provider}/callback', 'Auth\LoginController@handleCallback');

Route::get('/no-access','AdminController@noAccess')->name('No Access');


Route::group([  
    'middleware' => 'firebase',  
  ], function () {

Route::get('/home','FirebaseAuthController@index')->name('home');

// Admin Settings
 
   Route::post('changePassword','AdminController@changePassword');
});  

