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
       
            $total_trip=$db->collection('trips')->documents()->rows();
            $active_trip=$db->collection('trips')->where('status','in',['Booked','Accepted','OnGoing','PaymentPending','PaymentSuccess'])->documents()->rows();
            $cancelled_trip=$db->collection('trips')->where('status','in',['Cancelled'])->documents()->rows();
            $completed_trip=$db->collection('trips')->where('status','in',['Completed'])->documents()->rows();
            $total_count=count($total_trip);
            $active_count=count($active_trip);
            $complete_count=count($completed_trip);
            $cancel_count=count($cancelled_trip);
            $zone_list=$db->collection('zone')->documents(); 
        
        return view('home',compact('total_count','active_count','complete_count','cancel_count','zone_list'));  
       
    }
  
}
