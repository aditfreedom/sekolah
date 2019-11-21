$(document).ready(function(){
    

    $('#dashboard').on('click', function(){
        $.get('ajax/dashboard.php',function(data){
            $('#isi').html(data);
        });    
    });

        $('#dataguru').on('click', function(){
                $.get('ajax/dataguru.php',function(data){
                    $('#isi').html(data);
                });    
            });


        $('#tambahguru').on('click', function(){
            $.get('ajax/tambahguru.php',function(data){
                $('#isi').html(data);
            });    
});

});