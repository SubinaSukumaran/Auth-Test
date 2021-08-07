<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('header');
            $table->string('location_type');
            $table->string('location_coordinates_longitude');
            $table->string('location_coordinates_latitude');
            $table->string('name');
            $table->string('locality');
            $table->string('city');
            $table->string('zip');
            $table->string('contact');
            $table->string('details_building_type');
            $table->string('details_floor');
            $table->boolean('details_lift_available');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
