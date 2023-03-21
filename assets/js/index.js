


$("#add_user").submit(function(event){
    Toastify({
        text: "Data Inserted Successfully!",
        gravity: 'bottom',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        Toastify({
            text: "Data Updated Successfully!",
            gravity: 'bottom',
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                Toastify({
                    text: "Data Deleted Successfully!",
                    gravity: 'bottom',
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                  }).showToast();
                location.reload();
            })
        }

    })
}