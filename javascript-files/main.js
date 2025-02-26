
document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();
    const addPin = document.getElementById("add-pin").value;
    const convertedPin = parseInt(addPin);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").
    innerText
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount && addPin){
        if(convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert('incorrect Pin')
        }
    }
    else{
        alert('File is empty')
    }
})



    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'block'

// js for add-money
document.getElementById("add-money").addEventListener('click', function (event){
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'none'
    document.getElementById('add-money-box').style.display = 'block'
})

// js for cash-out
document.getElementById("cash-out").addEventListener('click', function (event){
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'none'
    document.getElementById('cashout-box').style.display = 'block'
})

// js for transfer-money
document.getElementById("transfer-money").addEventListener('click', function (event){
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'block'
})

// js for get bonus 
document.getElementById("get-bonus").addEventListener('click', function (event){
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'block'
})

// js for pay bill
document.getElementById("pay-bill").addEventListener('click', function (event){
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'block'
})

// js for Transactions
document.getElementById("transactions").addEventListener('click', function (event){
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'block'
})