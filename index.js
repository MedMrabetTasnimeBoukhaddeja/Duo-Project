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
  var product10=Product(9,"Blood test strips",["/images/l12.jpg"],35)
  var product11=Product(10,"Sun screen",["/images/e1.jpg","/images/e2.jpg"],170)
  var product12=Product(11,"Foam plaster",["/images/p1.jpg"],3.500 )
  
  // we stored all the product in an array //
  var store=[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10]
  
  // we make function to display all the element in the array //
  
  function showAll(arr) {
    each(arr,function(element,i){
      $(".container").append(`
        <div class="product_container">
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
        </div>
     ` )
      })
    }
  console.log(store[0].price);
  showAll(store)
  
  