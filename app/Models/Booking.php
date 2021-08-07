<?php
namespace App\Models;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;
class Booking extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'bookings';
    protected $fillable=['bookingType'];

}
