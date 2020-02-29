
$("button").click(function(){
    function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var details=[email , password ]
    console.log(details)
    if (details=["", ""]){
        alert("input details")
    }else{
        alert("welcome to pizza palace")
    }
    }
    signUp()
})
