<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class PersonalAccessToken extends Model
{
    protected $fillable = [
         'tokenable', 'name','token','abilities','last_used_at','tokenable_type','tokenable_id'
    ];
}
