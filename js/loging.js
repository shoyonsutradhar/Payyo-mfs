

// search: from submit reloading the page
// step -1 : set event hendler 
document.getElementById('btn-loging').addEventListener('click',function(event){
    // step-2: prevent default behavior  (prevent reloading browser)
    event.preventDefault();

    console.log('i am a boy');
    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})