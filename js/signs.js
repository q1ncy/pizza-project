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
  var opt = $("select#delivery")
    .children("option:selected")
    .val();

  if (opt == "no") {
    alert("pick up order at our only station in your city");
  } else {
    var deliveryPoint = prompt("enter delivery location");

    alert("your pizza will be delivered to " + deliveryPoint);
  }
});

//get choices made
$("button#clickThree").click(function() {
  var topping = $("input[name='toppings']:checked").val();

  var size = $("input[name='sizes']:checked").val();

  var type = $("input[name='types']:checked").val();
  debugger;

  let price = 0;
  let price1 = 0;
  let price2 = 0;
  //get topping price
  if (topping == "peperoni") {
    price = 350;
    console.log(price);
  } else if (topping == "BBQ steak & mushroom") {
    price = 50;
    console.log(price);
  } else if (topping == "pineapple") {
    price = 50;
    console.log(price);
  } else if (topping == "vegetables") {
    price = 50;
    console.log(price);
  } else {
    price = 50;
    console.log(price);
  }

  //get size price
  if (size == "extraLarge") {
    price1 = 350;
    console.log(price1);
  } else if (size == "large") {
    price1 = 300;
  } else if (size == "medium") {
    price1 = 250;
  } else if (size == "small") {
    price1 = 200;
  } else {
    price1 = 150;
  }

  //get type price
  if (type == "crispy-crust") {
    price2 = 100;
  } else if (type == "stuffed-crust") {
    price2 = 150;
  } else {
    price2 = 200;
  }
  const total = price1 + price2 + price;
  debugger;
  alert ("You have chosen a " + size + "pizza with "+topping + " toppings and a "+ type+"crust" +"for a price of "+total)
});
$("button#placeOrder").click(function(){
  alert ("we are working on your order,specify pickup method")
})


