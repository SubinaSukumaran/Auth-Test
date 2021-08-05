<?php

namespace App\Http\Middleware;
use Session;
use Closure;
use Redirect;
use Google\Cloud\Firestore\FirestoreClient;
use Kreait\Firebase\Exception\FirebaseException;
use App\Http\Traits\firbaseConfigurtaion;
class Permission
{
    use firbaseConfigurtaion;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // $route = $request->route();
        // $actions = $route->getAction();
        // $projectId="edrop-6c149";
        // $db = new FirestoreClient([
        //     'projectId' => $projectId,
        // ]);
        // $role=\Session::get('role');
        // $uid=\Session::get('uid');
        // if($role!='Admin')
        // {
          
        //   // dd($actions['module']);
        //   $user=$db->collection('roles')->document($role)->collection('members')->document($uid)
        //   ->collection('permissions')->document($actions['module'])->snapshot();
        //   if($user->data()[ltrim($actions['prefix'], '/')]==true)
        //   {
        //     return $next($request);
        //   }
        //   return $request->ajax() ? response('No access') : redirect('/no-access');
          
        // }
        
        return $next($request);  
    }
}
