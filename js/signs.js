$("button#signIn").click(function() {
  function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var details = [email, password];
    console.log(details);
    if (details == ["", ""]) {
      alert("input details");
    } else {
      alert("welcome to pizza palace");
    }
  }
  signUp();
}); 

$("button#entry").click(function() {
  if (details == [" ", " "]) {
    alert("please sign up first");
  }
});

//display choice options
$("button#clickOne").click(function() {
  $(".card-one").fadeIn();
});
$("button#clickTwo").click(function() {
  $(".card-two").fadeIn();
});

//confirm items
$("button#clickThree").click(function() {
  alert("your customization has been added to cart!");
});
//adding order to cart

//delivery option
$("#deliver").click(function() {
  var deliveryPoint = prompt("enter delivery location");

  alert("your pizza will be delivered to " + deliveryPoint);
});
//get choices made
$("button#clickThree").click(function() {
  var topping = $("input[name='toppings']:checked").val();

  var size = $("input[name='sizes']:checked").val();

  var type = $("input[name='types']:checked").val();

  var order =
    "delivery for " +
    size +
    " pizza with " +
    type +
    " and " +
    topping +
    " topping(s)";
  alert(order);
});
