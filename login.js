
// to sign up in the localstorage //
// we create a function sign,then we create 3 variables to store the values of inputs //
function sign() {
    var a = document.querySelector("#username").value;
    var b = document.querySelector("#email").value;
    var c = document.querySelector("#pwd").value;
// here we use setItem to store the 3 variables in the local storage //
    localStorage.setItem("id",a);
    localStorage.setItem("mails",b);
    localStorage.setItem("passwords",c);
// here we make an alert to make sure that the count is created in the localstorage //
    alert('account created successfully')
    
    }
// here we did an event listener for the button submit to sign //
    var buttontosignup = document.getElementById("buttonofsign")
    buttontosignup.addEventListener("click",sign)
    
    
// we create a function login,then we create 2 variables to store the values of inputs //    
    function login() {
        var e = document.querySelector("#emailtologin").value;
        var f = document.querySelector("#pwdtologin").value; 
// here we use getItem to get the registred data from the local storage //        
        var e1=localStorage.getItem("mails")
        var f1 =localStorage.getItem("passwords")
// here we check if the input of login of email equal to to the data stored and the input of login of password is equal to the password stored in localstorage //
    if (e === e1 && f===f1)
// here if the email and the password are true the page will change to the second page html //
    {window.location.assign('HTML.html')
// here we make two alert for the true one and another alert for the second one if the condition is false //
    alert("welcome!")}else{alert("email or password is wrong!")}
    }
// event listener for the button submit to login //
    var buttontologin= document.getElementById("buttontologin")
    buttontologin.addEventListener("click",login)
    
    