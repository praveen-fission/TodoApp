//post
function addTask(){
        var taskName=document.getElementById("f1").value;
        var time=document.getElementById("f2").value;
        var status=document.getElementById("f3").value;
        console.log(taskName,time,status);
        var data={
            "name":taskName,
            "expiryDate":time,
            "status":status
        };
        var xhr = new XMLHttpRequest();
        xhr.open( "POST","http://34.71.224.0:8080/api/tasks",true);
        xhr.setRequestHeader('Authorization',"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTc0MzMzOTl9._VY8Ao2E4a4C5_3aWpRh3HzPBJPlQ4SWdzAlMObp89r3rEx2jQXs-x_Lz7ozNDZuIdxI9zuExRUFYCQaYwfRUw");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
                console.log("Success");
        }
        else {
            console.log("Error");
        }
        }
        console.log(data);
        xhr.send(JSON.stringify(data));

}

//put
function editTask(){
    var taskName=document.getElementById("i1").value;
    var time=document.getElementById("i2").value;
    var status=document.getElementById("i3").value;
    var id=document.getElementById("SC").value;
    console.log(taskName,time,status,id);
    var data={
        "id":id,
        "name":taskName,
        "expiryDate":time,
        "status":status
    };
    var xhr = new XMLHttpRequest();
    xhr.open( "PUT","http://34.71.224.0:8080/api/tasks",true);
    xhr.setRequestHeader('Authorization',"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTc0MzMzOTl9._VY8Ao2E4a4C5_3aWpRh3HzPBJPlQ4SWdzAlMObp89r3rEx2jQXs-x_Lz7ozNDZuIdxI9zuExRUFYCQaYwfRUw");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
            console.log("Success");
    }
    else {
        console.log("Error");
    }
    }
    xhr.send(JSON.stringify(data));
}


 
