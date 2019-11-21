$(function() {
    $('button:contains("ADD")').on('click', function () {

        AddTask();
        
     });

     function AddTask () {
        $('.ttasksBoardbody > ul').append('<li><span class="delete">×</span><input type="checkbox"><label>' +  $('form#task').val(task)+ '</label></li>');

     };

});
