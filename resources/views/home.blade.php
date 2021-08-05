@extends('layouts.app')
@section('title')
<h1 class="h3 m-0">Dashboard</h1>
@endsection
@section('content')
                        <div class="row">
                    <div class="col-xl-8">
                        <div class="card border-0 shadow p-4 radius-16 mb-3 mb-sm-4">
                            <div class="d-sm-flex justify-content-between align-items-center mb-3">
                                <div class="mb-3 mb-sm-0">
                                    <h5 class="text-gray-2 m-0">Booking Trends</h5>
                                </div>
                                <form action="" class="form-icons" style="width: 170px;">
                                    <div class="form-group is-floating-label m-0">
                                        <span class="input-group-addon"><i class="far fa-calendar-alt"></i></span>
                                        <input type="text" autocomplete="off" class="form-control form-control-sm field datepickerChart">
                                    </div>
                                </form>
                            </div>
                            <!-- <img src="assets/images/demo/graph-2.svg" alt="" class="w-100">     -->
                            <div class="chart">
                                <canvas id="chart1"></canvas>
                                <div class="chartjs-tooltip" id="tooltip-0"></div>
                                <div class="chartjs-tooltip" id="tooltip-1"></div>
                            </div>
                        </div><!--/card-->

                        <div class="card border-0 shadow p-4 radius-16 mb-3 mb-sm-4">
                            <div class="mb-3">
                                <h5 class="text-gray-2">Trip Status</h5>
                            </div>
                           <div class="row">
                                <div class="col-lg-4 mb-3 mb-lg-0">
                                    <div class="pie-chart d-flex flex-wrap">
                                        <canvas id="pieChart" class="chart-pie" style="width: 190px; height: 190px;"></canvas>                              
                                    </div><!--/pie-chart-->
                                </div>
                                <div class="col-lg-8">
                                   <div class="form-row">
                                       <div class="col-sm-6 mb-3">
                                            <div class="card p-3 radius-16 border">
                                                <div class="d-flex">
                                                    <div class="icon-img bg-secondary-lighten rounded-circle">
                                                        <i class="fas fa-car f-ize-22 text-secondary"></i>
                                                    </div>
                                                    <div class="ml-3">
                                                        <h5 class="m-0"><a href="#" class="stretched-link text-secondary text-decoration-none">125</a></h5>
                                                        <span class="text-secondary">Total Trips</span>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                       <div class="col-sm-6 mb-3">
                                            <div class="card p-3 radius-16 border">
                                                <div class="d-flex">
                                                    <div class="icon-img bg-success-lighten rounded-circle">
                                                        <i class="fas fa-check f-ize-22 text-success"></i>
                                                    </div>
                                                    <div class="ml-3">
                                                        <h5 class="m-0"><a href="#" class="stretched-link text-success text-decoration-none">64</a></h5>
                                                        <span class="text-success">Completed</span>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                       <div class="col-sm-6 mb-3 mb-sm-0">
                                            <div class="card p-3 radius-16 border">
                                                <div class="d-flex">
                                                    <div class="icon-img bg-primary-lighten rounded-circle">
                                                        <i class="fas fa-sun f-ize-22 text-primary"></i>
                                                    </div>
                                                    <div class="ml-3">
                                                        <h5 class="m-0"><a href="#" class="stretched-link text-primary text-decoration-none">70</a></h5>
                                                        <span class="text-primary">Active</span>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                       <div class="col-sm-6">
                                            <div class="card p-3 radius-16 border">
                                                <div class="d-flex">
                                                    <div class="icon-img bg-danger-lighten rounded-circle">
                                                        <i class="fas fa-times f-ize-22 text-danger"></i>
                                                    </div>
                                                    <div class="ml-3">
                                                        <h5 class="m-0"><a href="#" class="stretched-link text-danger text-decoration-none">05</a></h5>
                                                        <span class="text-danger">Cancelled</span>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                       <!-- JS DMEO https://www.chartjs.org/samples/latest/charts/pie.html -->
                                   </div><!--/row-->
                                </div>
                           </div><!--/row-->
                        </div><!--/card-->
                    </div>
                    <!-- /left -->

                    <div class="col-xl-4">
                        <div class="card border-0 shadow p-4 radius-16 mb-3 mb-sm-4">
                            <div class="embed-responsive embed-responsive-16by9 radius-16 border mb-3">
                                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.094209746131!2d75.83482861526214!3d11.254479753263817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64362ff78cdc5%3A0x619d25ffdbf3bc13!2sLilac%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1613378643078!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div class="d-flex justify-content-between align-items-center position-relative">
                                <div>
                                    <h5 class="text-gray-2">Booking Heat Map</h5>
                                    <p class="m-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                                </div>
                                <a href="#" class="stretched-link"><i class="las la-angle-right f-size-18"></i></a>
                            </div>
                        </div><!--/card-->
                        
                        <div class="card border-0 shadow p-4 radius-16 mb-3 mb-sm-5 bg-primary text-white align-items-center overflow-hidden">
                           <div class="my-4 text-center">
                                <i class="la la-history la-4x mb-3"></i>
                                <h5 class="m-0">
                                    <a href="#" class="text-white stretched-link text-decoration-none">Trip History <i class="la la-angle-right f-size-18"></i></a>
                                </h5>
                                <i class="far fa-circle la-10x text-black alpha-1 position-absolute" style="left: -60px; top: 15px;"></i>
                                <i class="far fa-circle la-10x text-black alpha-1 position-absolute"></i>
                           </div>
                        </div><!--/card-->
                    </div>
                    <!-- /right -->
                </div><!--/row-->

 @endsection
 @section('script')
 @endsection







