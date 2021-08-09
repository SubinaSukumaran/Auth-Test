<?php $__env->startSection('title'); ?>
<h1 class="h3 m-0">Users</h1>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('header_title'); ?>
<li class="breadcrumb-item active" aria-current="page"><?php echo e(ucfirst(\Request::route()->getName())); ?></li>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<div class="card border-0 shadow p-4 radius-16">    
    
                 
<div class="d-sm-flex align-items-center mb-3">
                   
    <div class="form-group is-floating-label label-inside is-focused mb-sm-0 ml-auto">
        <label class="form-control-placeholder" for="">Users</label>
        <select class="selectpicker select-1" id="user-type"
            data-size="6"
            data-width="150">
            <option value="All" selected>All</option>
            <option value="Customer">Customer</option>
            <option value="Driver">Driver</option>
                          
        </select>
    </div>
</div>

               <div id="search-user" class="data-table-custom">
                    <table class="table table-1 table-bordered table-hover table-responsive-xl data-table">
                        <thead>
                            <tr>
                              <th class="sortable text-nowrap" data-data="checkbox" data-orderable="false" data-searchable="false" ><input type="checkbox" name="" class="checkAll" value="list_checkbox"  autocomplete="off"/></th>
                              <th class="sortable text-nowrap">Sl.No </th>
                              <th class="sortable text-nowrap active">Name </th>
                              <th class="sortable text-nowrap">User Type</th>
                              <th class="sortable text-nowrap">Last Logged At </th>
                              <th class="sortable text-nowrap">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                        </tbody>
                    </table>            
                </div>
</div>


<!-- Modal For Display Users -->
<div class="modal fade" id="ModalUserDetails" tabindex="-1" role="dialog" aria-labelledby="ModalUserDetailsLabel"
    aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0 radius-16">
                <button type="button" class="btn btn-modal-close" data-dismiss="modal" aria-label="Close">
                    <i class="las la-times"></i>
                </button>
                <div class="modal-body mt-5 p-sm-5">
                <h4 class="mb-4">User</h4>
                <div class="row" id="user-data">
               
                </div><!--/row-->
            </div>
        </div>
    </div>
    </div>


<!-- Modal for display all users data -->
<div class="modal fade" id="ModalAllUserDetails" tabindex="-1" role="dialog" aria-labelledby="ModalAllUserDetailsLabel"
    aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0 radius-16">
                <button type="button" class="btn btn-modal-close" data-dismiss="modal" aria-label="Close">
                    <i class="las la-times"></i>
                </button>
                <div class="modal-body mt-5 p-sm-5">
                <h4 class="mb-4">User</h4>
                <div class="row" id="user-data">
               
                </div><!--/row-->
            </div>
        </div>
    </div>
    </div>

<?php $__env->stopSection(); ?> 
<?php $__env->startSection('script'); ?>
<script>
$('#users-list').addClass("active");
 </script>   
<script type="text/javascript">

$(document).ready(function(){
		var table = $('.data-table').DataTable({
			processing: true,
			serverSide: true,
            ajax: "<?php echo e(route('users')); ?>",
            columns: [
                    {data: 'checkbox',orderable: false, searchable: false},
                    {data: 'DT_RowIndex',orderable: false, searchable: false},
                    {data: 'name', name: 'name'},
                    {data: 'user_type', name: 'user_type'},
                    {data: 'last_login_at', name: 'last_login_at'},
                    {data: 'action', name: 'action', orderable: false, searchable: false},
                ]
		});
        $('#user-type').change(function(){

            table.draw();

            });
    });
    function viewData(id)
    {
        var userIds = [];
            $.each($("input[name='users']:checked"), function(){
                userIds.push($(this).val());
            });

        if(userIds.length > 0)
        {
            $('#ModalAllUserDetails').modal('show');
            
        }
        else
        {
        $('#ModalUserDetails').modal('show');
        $.ajax({
        url: '/userData' +  '/' + id,
        type: 'GET',
        success: function(output) {
            var data =  output.data;
             console.log(data.created_at)
            var date = new Date(data.created_at);
            console.log(date.toDateString());
            $('#user-data').empty();
            $('#user-data').append('<div class="col-lg-12">'+
                            '<div class="d-flex align-content-center border-bottom pb-3 mb-3">'+
                                '<figure class="m-0 user-img-1 flex-shrink-0">'+'<img src="<?php echo e(asset("assets/images/users/1.jpg")); ?>" class="border rounded-circle" alt="">'+'</figure>'+
                                '<div class="data px-3 mr-auto">'+
                                '<h6 class="m-0 one-line">'+data.name+'</h6>'+ 
                                ' <small>#'+data.id+' </small>'+  
                                '</div>'+
                                '<div>'+
                                '<span class="badge badge-pill badge-primary-lighten">'+data.user_type+'</span></div>'+
                                '</div>'+
                                '<ul class="icon-list">'+
                                '<li><i class="fas fa-envelope"></i><span class="two-line"><small>Email: </small><br><span class="fa-tip" title="Role">'+data.email+'</span></span></li>'+
                                '<li><i class="fas fa-phone-alt"></i> <span class="two-line"><small>Mobile: </small><br><span class="fa-tip" title="Role">'+data.mobile+'</span></span></li>'+
                                '<li><i class="fas fa-plus"></i> <span class="two-line"><small>Created At: </small><br><span class="fa-tip" title="Role">'+date.toDateString()+'</span></span></li>'+
                                '<li><i class="fas fa-key"></i><span class="two-line"><small>Last Login At: </small><br><span class="fa-tip" title="Role">'+date.toDateString()+'</span></span></li>'+
                                '</li>'+
                                '</ul>'+
                            '</div>'
                   )
        },
        error: function(output) {
        }
        });

        }
       
    }
 </script>
 <?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/li14/projects/movers/resources/views/users/list.blade.php ENDPATH**/ ?>