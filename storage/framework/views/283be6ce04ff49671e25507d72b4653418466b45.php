
                                <div class="col-lg-4 mb-3 mb-lg-0">
                                    <div class="pie-chart d-flex flex-wrap">
                                        <canvas id="pieChart2" class="chart-pie" style="width: 190px; height: 190px;"></canvas>                              
                                    </div><!--/pie-chart-->
                                </div>
                                <div class="col-lg-8">
                                   <div class="form-row" >
                                       <div class="col-sm-6 mb-3">
                                            <div class="card p-3 radius-16 border">
                                                <div class="d-flex">
                                                    <div class="icon-img bg-secondary-lighten rounded-circle">
                                                        <i class="fas fa-car f-ize-22 text-secondary"></i>
                                                    </div>
                                                    <div class="ml-3">
                                                        <h5 class="m-0"><a href="#" class="stretched-link text-secondary text-decoration-none" id="total"><?php echo e($total_count); ?></a></h5>
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
                                                        <h5 class="m-0"><a href="/completedtrips" class="stretched-link text-success text-decoration-none" id="complete"><?php echo e($complete_count); ?></a></h5>
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
                                                        <h5 class="m-0"><a href="/trips" class="stretched-link text-primary text-decoration-none" id="active"><?php echo e($active_count); ?></a></h5>
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
                                                        <h5 class="m-0"><a href="/cancelledtrips" class="stretched-link text-danger text-decoration-none" id="cancel"><?php echo e($cancel_count); ?></a></h5>
                                                        <span class="text-danger">Cancelled</span>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                       <!-- JS DMEO https://www.chartjs.org/samples/latest/charts/pie.html -->
                                   </div><!--/row-->
                                </div>
                <?php /**PATH /home/li14/projects/movers/resources/views/home-search.blade.php ENDPATH**/ ?>