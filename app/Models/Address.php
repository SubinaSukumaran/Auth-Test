<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Address extends Model
{
    use SoftDeletes;
    protected $fillable=['user_id',
    'header',
    'location_type',
    'location_coordinates_longitude',
    'location_coordinates_latitude',
    'name',
    'locality',
    'city',
    'zip',
    'contact',
    'details_building_type',
    'details_floor',
    'details_lift_available'];

  
}
