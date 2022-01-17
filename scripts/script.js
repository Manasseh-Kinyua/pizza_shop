function order(size,crust,topping,delivery,cost,total) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.delivery = delivery;
  this.cost = parseInt(size) + parseInt(crust) + parseInt(topping);
  this.total = parseInt(size) + parseInt(crust) + parseInt(topping) + parseInt(delivery);
  
  
}
function myButton(event) {
  event.preventDefault()

  var pizzaSize = document.querySelector('input[name = size]:checked').value
  var pizzaTopping = document.querySelector('input[name =topping]:checked').value
  var pizzaCrust = document.getElementById('crust').value
  
  var pizzaOrder = new order(pizzaSize, pizzaCrust, pizzaTopping)
  var amount = new order(pizzaSize, pizzaTopping,pizzaCrust)
  
  $("ul#order").append("<li>Size Amount: <span class='order'>" + pizzaOrder.size + "</span></li>");
  $("ul#order").append("<li>Crust Amount: <span class='order'>" + pizzaOrder.crust + "</span></li>");
  $("ul#order").append("<li>Topping Amount: <span class='order'>" + pizzaOrder.topping + "</span></li>");
  $("ul#order").append("<li>Pizza Cost: <span class='order'>"  + amount.cost + "</span></li>");

  var pizzaDelivery = document.querySelector('input[name = delivery]:checked').value
  if(pizzaDelivery==='200') {
    prompt('Enter location')
    alert('Your order will be delivered after check-out')
  }

  
}

function checkOut() {
  var pizzaSize = document.querySelector('input[name = size]:checked').value
  var pizzaTopping = document.querySelector('input[name =topping]:checked').value
  var pizzaCrust = document.getElementById('crust').value
  var pizzaDelivery = document.querySelector('input[name = delivery]:checked').value

  var totalAmount = new order(pizzaSize, pizzaTopping, pizzaCrust,pizzaDelivery)

  $("ol#summary").append("<li>Delivery Amount: <span class='summary'>" + totalAmount.delivery + "</span></li>");
  $("ol#summary").append("<li>Pizza Cost: <span class='summary'>" + totalAmount.cost + "</span></li>");
  $("ol#summary").append("<li>Total Charge: <span class='summary'>" + totalAmount.total + "</span></li>");
  
}

  

   
    
    

  
    


