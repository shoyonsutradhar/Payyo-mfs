
// step-1: add event handlar to the add money button inside the from
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // relode nai sejonno preventdefault koete hoy 
        event.preventDefault();
        // step-2: get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        // console.log(addMoneyInput);
        const addMoneyNumber = parseFloat(addMoneyInput);
        //  get the pin provided
        const PinNumberInput = document.getElementById('input-pin-number').value;
        // console.log(PinNumberInput);
        // step-3: pin number varify
        if(PinNumberInput === '12345'){
            console.log('add money succesfull');
            // step-4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance);
            const balanceNumber =parseFloat(balance);
            // calculate 
            const newBalance = addMoneyNumber + balanceNumber;
            document.getElementById('account-balance').innerText = newBalance;

            // step-5: add addMoneyInput with balance
            
        }
        else{
            alert('Failed to add money!Please try again.');
        }
    })