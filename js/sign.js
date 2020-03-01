$("button#signIn").click(function(){
    function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var details=[email , password ]
    console.log(details)
    if (details==["", ""]){
        alert("input details")
    }else{
        alert("welcome to pizza palace")
    }
    }
    signUp()
})//correct
$("button#entry").click(function(){
    if (details==["", ""]){
        alert("please sign up first")
    }
})//correct
//display choice options
$("button#clickOne").click(function(){
    $(".card-one").fadeIn();
})
$("button#clickTwo").click(function(){
    $(".card-two").fadeIn()
})