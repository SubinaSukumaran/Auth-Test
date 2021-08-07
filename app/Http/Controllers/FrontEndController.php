<?php

namespace App\Http\Controllers;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class FrontEndController extends Controller
{
    public function policy(Request $request)
    {

        return view ('policy');
    }
    
}
