

// // search: from submit reloading the page
// // step -1 : set event hendler 
// document.getElementById('btn-loging').addEventListener('click',function(event){
//     // step-2: prevent default behavior  (prevent reloading browser)
//     event.preventDefault();

//     // step-3: get the phone number and pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber , pinNumber);
//     // step-4: validate phone and pin number
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you ar loging in');
        
//     }
//     else{
//         alert('wrong phone and pin number');
//     }
// })
document.getElementById('btn-loging').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('loging in the from');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone and pin Number');
    }

})