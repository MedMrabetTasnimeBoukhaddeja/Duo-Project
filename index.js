function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) { 
        if (acc === undefined) { 
              acc = array[0]; 
              array = array.slice(1); 
        } 
        each(array, function(element, i) { 
              acc = f(acc, element, i); 
        }); 
        return acc; 
  }
  
// we use OOP to make some instance// 
function Product(id,name,image,price) {
    return{id,name,image,price}
}

// some instance from the Product //

var product1=Product(0,"Feeding bottle",["/images/b1.jpg","/images/b3.jpg","/images/b2.jpg"],45)
  var product2=Product(1,"Body scale",["/images/bala.jpg"],90)
  var product3=Product(2,"wheelchair",["/images/c1.jpg"],370)
  var product4=Product(3,"food supplement vitamins",["/images/comple.jpg"],90)
  var product5=Product(4,"Nail clipper",["/images/coupe.jpg"],8)
  var product6=Product(5,"Pacifier",["/images/s1.jpg","/images/s2.jpg","/images/s3.jpg"],33)
  var product7=Product(6,"Thermometer",["/images/t1.jpg","/images/t2.jpg"],20)
  var product8=Product(7,"Infared thermometer",["/images/t3.jpg"],200)
  var product9=Product(8,"Glucometer",["/images/l1.jpg"],80)
  var product10=Product(10,"Sun screen",["/images/e1.jpg","/images/e2.jpg"],170)
  var product11=Product(11,"Foam plaster",["/images/p1.jpg"],3.500 )


// we stored all the product in an array //
var store=[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11]

// we make function to display all the element in the array //

function showAll(arr) {
  each(arr,function(element,i){
    $(".container").append(
    
      `<div class="product_container">
      <div class="title"> 
      <p class="p1">${element.name} </p>
      </div>
      <div>
      <img class="imgs" value="${element.id}" src=${element.image[0]} width="150px">
      </div>
      <div class="bas"> 
      <p class="p1">Price: ${element.price} DT</p>
      </div>
      <button id="button1" value=${element.id} onclick="addtocart(${i})">Add to cart</button>
      </div>`
    )
    })

  }
console.log(store[0].price);
showAll(store)
console.log($(".imgs"));

// we create a function to change the images using closures //

function changeimg(item) {
  let counter = 0;
  console.log(item);
  function getnext() {

    counter ++  
    counter=counter% item.length;
    return item[counter];
  }
  
  return getnext;
}

// we do the for loop to get every single array of image //
for(var i=0;i<$(".imgs").length;i++){
console.log(store[i].image,i);
let imgs=$(".imgs")[i]
 let change = changeimg(store[i].image)

// we make the onclick function to change the image from the previous array //
imgs.onclick = function () {
  imgs.src= change()
}
}
// we declare an empty array for the cart //
  var cart = [];
// we declare a variable to count the price of the product //
  var total = 0;
// we create a function using the index of the element to push the price and the image //
  function addtocart(index) {
      var product = store[index];
      cart.push({
          image: product.image[0]
      });
      total += product.price;
      displaycart(cart);
  }
// we declare a function to display the items add in the array cart //
  
  function displaycart(cart) {
// here i apply the empty function to stop the repetition of the items in the cart // 
    $(".cart").empty()
// i use for loop to append the items in the cart //
    for(var i=0;i<cart.length;i++){
      var ele = cart[i]
          $(".cart").append(
              `<div class="cart-item">
                  <img src="${ele.image}" width="90px">
                 
              </div>`
          );
      }
      $("#total").text(total+ "DT");
  }
  
// we make a function search using filter to search about a specific product by name //
function search() {
var x = document.getElementById("input1").value.toUpperCase()
var data=filter(store,function (ele) {
  return ele.name.toUpperCase().includes(x)
})
$(".container").empty()
showAll(data)
};

