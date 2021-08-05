<?php
namespace App\Http\Traits;
// namespace Laravel\Sanctum;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Illuminate\Http\Request;
use Kreait\Firebase\Database;
use Carbon\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Google\Cloud\Firestore\FirestoreClient;
use Kreait\Firebase\Auth;
use Laravel\Sanctum\NewAccessToken;
trait firbaseConfigurtaion
{
    public function getDBdata()
    {
        $projectId="movers-aff06";
        $db = new FirestoreClient([
            'projectId' => $projectId,
        ]);
        return $db;
    }

    public function createToken(string $name,$token)
    {
       
        $token=hash('sha256', $plainTextToken = $token);
        return $token;
   
    }
}
?>