// alert()
// login section 
document.getElementById('login-btn').addEventListener('click', function (event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const convertedMobNum = parseInt(mobileNumber);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNum = parseInt(pinNumber);
    
    
   if(mobileNumber.length === 11){
    
    if(convertedPinNum === 1234){
       window.location.href = "./html-files/main.html"
    }
    else{
        alert('Invalid Pin')
    }
   }
   else{
    alert('Invalid Number')
   }

})