<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccessToken extends Model
{
    protected $fillable = [
        'user_id', 'tokenable', 'name','token','abilities','last_used_at','tokenable_type','tokenable_id'
    ];
 
}
