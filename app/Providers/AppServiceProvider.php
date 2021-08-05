<?php

namespace App\Providers;
use Google\Cloud\Firestore\FirestoreClient;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
// use App\Http\Traits\firbaseConfigurtaion;
class AppServiceProvider extends ServiceProvider
{
    // use firbaseConfigurtaion;
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('layouts.app', function( $view )
        {        
            $route_name= \Request::route()->getName();
         
            if($route_name=="home")
            {
                $class_name="page-dashboard";
            }
            else if($route_name=="Active Trips")
            {
                $class_name="page-trips";
            }
            else if($route_name=="Active Trips")
            {
                $class_name="page-trips";
            }
            else if($route_name=="Completed Trips")
            {
                $class_name="page-trips";
            }
            else if($route_name=="Cancelled Trips")
            {
                $class_name="page-trips";
            } 
            else if($route_name=="role list")
            {
                $class_name="page-administration";
            }
            else if($route_name=="drivers")
            {
                $class_name="page-drivers";
            }
            else if($route_name=="zone")
            {
                $class_name="page-zone";
            }
            else if($route_name=="vehicles")
            {
                $class_name="page-vehicle";
            }
            else if($route_name=="Add Driver")
            {
                $class_name="page-add-driver";
            }
            else if($route_name=="Driver Request Details")
            {
                $class_name="page-add-driver";
            }
            else if($route_name=="coupons")
            {
                $class_name="page-coupons";
            }
            else if($route_name=="rewards")
            {
                $class_name="page-coupons";
            }
          
            else if($route_name=="driver details")
            {
                
                $class_name="page-driver-overview";
            }
            else if($route_name=="user Details")
            {
                
                $class_name="role list";
            }
             
            else{
                $class_name="page-dashboard";
            }

            
                $view->with(compact('class_name'));
            
        
            
        });
    }
}
