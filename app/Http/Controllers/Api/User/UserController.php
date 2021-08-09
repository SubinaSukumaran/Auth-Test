<?php
namespace App\Http\Controllers\Api\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PersonalAccessToken;
use Illuminate\Support\Facades\DB;
use App\Http\Traits\firbaseConfigurtaion;
// use Laravel\Sanctum\NewAccessToken;
// use Laravel\Sanctum\HasApiTokens;
class UserController extends Controller
{
    use firbaseConfigurtaion;
    public function fetch(Request $request)
    {
  
        $token_id=$request->token_id;
        $authToken=$this->createToken("api token",$token_id);

        //API  call with mobile number & token_id

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDLgIK3XFJBn3ZqeL2QshkLFV7z71_uihE");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,
                    "idToken=$token_id");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close ($ch);
        $output=json_decode($server_output);
        $userDetails=$output->users[0];

        // Store the data in MySQL DB
        
        DB::beginTransaction();
        try{

            $timestamp = $userDetails->createdAt;
            $datetimeFormat = 'Y-m-d H:i:s';
            $date = new \DateTime();
            $user=User::create([
                'disabled'=>$userDetails->disabled,
                'email'=>$userDetails->email,
                'email_verified'=>$userDetails->emailVerified,
                'valid_since'=>$date->format($datetimeFormat),
                'last_login_at'=>$date->format($datetimeFormat),
                'modified_at'=>$date->format($datetimeFormat),
                // // 'name'=>$userDetails->displayName,
                'name'=>"Asbha",
                'user_type'=>"Customer",
                'mobile'=>$request->mobile_number,
                // // 'photo_url'=>$userDetails-> photoUrl,
                'photo_url'=>"",
                'fcm_token_id'=>"",
                'password'=>"",
                
            ]);

            // $token = $user->createToken('token-name')->plainTextToken;

            User::where('id', $user->id)->update(['api_token' => $authToken]);
            $authentication=PersonalAccessToken::create([
                'tokenable_type'=>"App\Models\User",
                'tokenable_id'=>$user->id,
                'name'=>"token-name",
                'abilites'=>"",
                'token'=>$authToken,
                'created_at'=>"",
                // 'last_used_at'=>"",
                // 'modified_at'=>"",
            ]);

         DB::commit();
            return response()->json(['status' => true, 'message' => "User added Successfully", 'data' =>[ ]], 200);
        }catch (\Exception $exception)
        {
            DB::rollBack();
            return response()->json(['status' => false, 'message' => $exception->getMessage(), 'data' => []], 500);
        }
    }

}
