<?php

namespace App\Http\Controllers\Api\Bookings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Address;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use MongoDB\BSON\UTCDateTime as MongoDate;
class BookingController extends Controller
{
    public function store(Request $request)
    {

        DB::beginTransaction();
        try {

             //mongodb
            $booking=new Booking();
            $booking->delete();
            $booking->bookingType=$request->bookingType;
            $booking->vehicleType=$request->vehicleType;
            $booking->paymentMode=$request->paymentMode;
            $booking->otp=$request->otp;
            $booking->currentStatus=$request->currentStatus;
            $booking->driverId=$request->driverId;
            $booking->bookingTime=new \MongoDB\BSON\UTCDateTime(new \DateTime('now'));
            $booking->address=$request->addresses;
            $booking->items=$request->items;
            $booking->statusList=$request->statusList;
            $booking->help=$request->help;
            $booking->coupon=$request->coupon;
            $booking->cost=$request->cost;
            $booking->save();

            //mysql
            $recommend =Address::Create([ 
                'user_id' => 1,
                'header' => "Home",
                'location_type' =>"Point",
                'location_coordinates_longitude' => "11.21212",
                'location_coordinates_latitude' => "75.21212",
                'name'=>"Subina",
                'locality'=>'88 Street Road',
                'city'=>'calicut',
                'zip'=>"564736",
                'contact'=>"9061395796",
                'details_building_type'=>"Apartment",
                "details_floor"=>"1",
                "details_lift_available"=>true
              
            ]);

            DB::commit();
            return response()->json(['status' => true, 'message' => "Booking added Successfully", 'data' =>[$booking ]], 200);
        }catch (\Exception $exception)
        {
            DB::rollBack();
            return response()->json(['status' => false, 'message' => $exception->getMessage(), 'data' => []], 500);
        }
       
    }
    public function fetchAllBookings()
    {

        $bookings=Booking::all();
        return response()->json([
            'status' => true,
            'message' => 'Booking Details',
            'data' => $bookings
        ]);

    }
}
