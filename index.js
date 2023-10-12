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
    
var desimages=[["/images/b3.jpg","/images/b2.jpg"],["/images/c2.jpg"],[,"/images/comple2.jpg"]]


  // we use OOP to make some instance// 
  function Product(id,name,image,price) {
      return{id,name,image,price}
  }

  // some instance from the Product //

  var product1=Product(0,"Biberons",["/images/b1.jpg","/images/b3.jpg","/images/b2.jpg"],150)
  var product2=Product(1,"Balence",["/images/bala.jpg"],60)
  var product3=Product(2,"Chair",["/images/c1.jpg"],300)
  var product4=Product(3,"complement",["/images/comple.jpg"],90)
  var product5=Product(4,"Coupe Angle",["/images/coupe.jpg"],7)
  var product6=Product(5,"Sucette",["/images/s1.jpg","/images/s2.jpg","/images/s3.jpg"],40)
  var product7=Product(6,"Thermo-metre",["/images/t1.jpg","/images/t2.jpg","/images/t3.jpg"],10)
  var product8=Product(7,"Lecteur-glycemie",["/images/l1.jpg","/images/l12.jpg"],80)
  var product9=Product(8,"Face",["/images/e1.jpg","/images/e2.jpg"],170)
  var product10=Product(9,"Ponsement",["/images/p1.jpg"],3.500 )


  // we stored all the product in an array //
  var store=[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10]

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
    
    function getnext() {
      // console.log(item.length);
      var item1=item
      // console.log(item1);
      counter ++  
      counter=counter% item.length;
      return item[counter];
    }
    
    return getnext;
  }

// we do the for loop to get every single array of image //
 for(var i=0;i<$(".imgs").length;i++){
  console.log(store[i].image,i);
  console.log($(".imgs")[i])
  let imgs=$(".imgs")[i]
   let change = changeimg(store[i].image)

  // we make the onclick function to change the image from the previous array //
  imgs.onclick = function () {
    imgs.src= change()
  }
 }
// we declare an empty array for the cart //
    // var cart = [];
// we declare a variable to count the price of the product //
    var total = 0;
// we create a function using the index of the element to push the price and the image //
    function addtocart(index) {
        var product = store[index];
        cart.push({
            price: product.price,
            image: product.image[0]
        });
        total += product.price;
        displaycart(cart);
    }
// we declare a function to display the items add in the array cart //
    
    function displaycart(cart) {
      var cart = []
      for(let i=0;i<cart.length;i++){
        let ele = cart[i]
        console.log('gfggfgffgfgf',ele)

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
}

// $("#button2").on("click",function () {
//   cart.splice(0,1)
// })
 // <button id="button2" value=${ele.id}>DELETE</button>//