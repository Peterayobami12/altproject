let loading;

$(document).ready(function (){

    loading = $("#loadid").hide();
    let ulist = $("#ulid");

    $("#btnchkid").on("click",function (){
        ulist.empty();

        let txtVal = $("#numid").val();

        $.ajax({
            url: 
    "https://jsonplaceholder.typicode.com/users",
            
            data:{
                id:txtVal
            },
            success: function (data)
            {
                $.each(data, function(index,val)
                {
                    let info = 
                    `${val.id} ${val.name} ${val.username}`

                    ulist.append('<li>' + info + '</li>');
                });
            },
            error: function(jqXHR){

                alert(`${jqXHR.status} ${jqXHR.statusText}`);
            }

        });

    });

    $("#btnchkAll").on("click",function (){
        ulist.empty();

        $.ajax({
            url: 
    "https://jsonplaceholder.typicode.com/users",

            success: function (data)
            {
                $.each(data, function(index,val)
                {
                    let info = 
                    `${val.id} ${val.name} ${val.username}`

                    ulist.append('<li>' + info + '</li>');
                });
            },
            error: function(jqXHR){

                alert(`${jqXHR.status} ${jqXHR.statusText}`);
            }

        });

    });


}).ajaxStart(function(){
    loading.show();
}).ajaxStop(function (){
    loading.hide();
});