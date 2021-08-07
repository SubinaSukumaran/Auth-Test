<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Kreait\Firebase\Auth as FirebaseAuth;
use Google\Cloud\Firestore\FirestoreClient;
use Kreait\Firebase\Exception\FirebaseException;
use App\Http\Traits\firbaseConfigurtaion;

class FirebaseAuthController extends Controller
{
    use firbaseConfigurtaion;

    public function __construct()
    {

    // $this->middleware('auth');
    }
 
    public function index()
    {

        $db = $this->getDBdata();
        
        return view('home');  
       
    }
  
}
