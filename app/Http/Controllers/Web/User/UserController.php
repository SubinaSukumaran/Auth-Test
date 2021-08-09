<?php

namespace App\Http\Controllers\Web\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DataTables;
class UserController extends Controller
{
    public function index(Request $request)
    {

        if ($request->ajax()) {

            $data = User::latest();
            return Datatables::of($data)
                    ->addColumn('checkbox', function($row){ 
                        return '<input type="checkbox" name="users" class="list_checkbox" value="'. $row->id .'" />';
                    })
                    ->addIndexColumn()
                    ->addColumn('action', function($row){
                           $btn = '<a href="javascript:void(0)" onclick="viewData(' . $row->id . ')" class="edit btn btn-primary btn-sm">View</a>';
                            return $btn;
                    })
                   
                    // ->filter(function ($instance) use ($request) {

                    //     if ($request->get('user_type') == 'customer' || $request->get('user_type') == 'driver') {

                    //         $instance->where('user_type', $request->get('user_type'));

                    //     }

                    //     if (!empty($request->get('search'))) {

                    //          $instance->where(function($w) use($request){

                    //             $search = $request->get('search');

                    //             $w->orWhere('name', 'LIKE', "%$search%")

                    //             ->orWhere('email', 'LIKE', "%$search%");

                    //         });

                    //     }

                    // })
                    ->rawColumns(['action','checkbox'])
                    ->make(true);
        }

        return view('users.list');
    }
    public function getUser($id)
    {

        $user=User::find($id);
        return response()->json([
            'status' => true,
            'message' => 'Customer details',
            'data' => $user
        ]);

        
       
    }
}
