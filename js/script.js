
 function resetBtn () {
    var name = document.getElementById("name") ;
    var LastName = document.getElementById("last-name")
    var address = document.getElementById("address")
    var password = document.getElementById("password")
    var comments = document.getElementById("comments")

    name.value = "" ; 
    LastName.value = "" ;
    address.value = "" ; 
    password.value = "" ;
    comments.value = "";

    resetBtn ()
}


 function display() {
    Empty();
    testPassword()
 }


 function Empty () {
            var name = document.getElementById("name") ;
            var LastName = document.getElementById("last-name")
            var address = document.getElementById("address")
            var password = document.getElementById("password")
            var comments = document.getElementById("comments")

            if ((name.value=== "")  || (LastName.value === "") ||  (address.value === "")  || (password.value === "") || (comments.value === "") )
            alert("Fill in required entry fields!");
 

 }
 



 function testPassword () {
var password  = document.getElementById("password") ;
if (password.value.length < 8)
alert ("Password must include at least 8 characters ");

var pT = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
if (!(password.value.match(pT)))
{alert ("Please enter a valid password")}

 
}

function testAdress() {
    var address = document.getElementById("address");
    var aT = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$/

    if (!(address.value.match(aT))) 

    alert ("Please enter a valid address")
    
}




