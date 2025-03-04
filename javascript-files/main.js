
document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();
    const pin = getInnerValueById('add-pin')
    const amount = getInnerValueById ('amount')
    const mainBalance = getInnerTextById('main-balance')
    if(amount && pin){
        if(pin === 1234){
            const sum = mainBalance + amount;
            setInnerTextByIDandValue('main-balance',sum);
        }
        else{
            alert('incorrect Pin')
        }
    }
    else{
        alert('File is empty')
    }
})


// universal
    document.getElementById('cashout-box').style.display = 'none'
    document.getElementById('add-money-box').style.display = 'none'
    document.getElementById('transfer-money-box').style.display = 'none'
    document.getElementById('get-bonus-box').style.display = 'none'
    document.getElementById('pay-bill-box').style.display = 'none'
    document.getElementById('transactions-box').style.display = 'block'

// js for add-money
document.getElementById("add-money").addEventListener('click', function (event){
    handleToggle ('cashout-box','none')
    handleToggle ('transfer-money-box','none')
    handleToggle ('get-bonus-box','none')
    handleToggle ('pay-bill-box','none')
    handleToggle ('transactions-box','none')
    handleToggle ('add-money-box','block')
})

// js for cash-out
document.getElementById("cash-out").addEventListener('click', function (event){
    handleToggle ('add-money-box','none')
    handleToggle ('transfer-money-box','none')
    handleToggle ('get-bonus-box','none')
    handleToggle ('pay-bill-box','none')
    handleToggle ('transactions-box','none')
    handleToggle ('cashout-box','block')
})

// js for transfer-money
document.getElementById("transfer-money").addEventListener('click', function (event){
    handleToggle ('add-money-box','none')
    handleToggle ('cashout-box','none')
    handleToggle ('get-bonus-box','none')
    handleToggle ('pay-bill-box','none')
    handleToggle ('transactions-box','none')
    handleToggle ('transfer-money-box','block')
})

// js for get bonus 
document.getElementById("get-bonus").addEventListener('click', function (event){
    handleToggle ('add-money-box','none')
    handleToggle ('cashout-box','none')
    handleToggle ('transfer-money-box','none')
    handleToggle ('pay-bill-box','none')
    handleToggle ('transactions-box','none')
    handleToggle ('get-bonus-box','block')
})

// js for pay bill
document.getElementById("pay-bill").addEventListener('click', function (event){
    handleToggle ('add-money-box','none')
    handleToggle ('cashout-box','none')
    handleToggle ('transfer-money-box','none')
    handleToggle ('get-bonus-box','none')
    handleToggle ('transactions-box','none')
    handleToggle ('pay-bill-box','block')
})

// js for Transactions
document.getElementById("transactions").addEventListener('click', function (event){
    handleToggle ('add-money-box','none')
    handleToggle ('cashout-box','none')
    handleToggle ('transfer-money-box','none')
    handleToggle ('get-bonus-box','none')
    handleToggle ('pay-bill-box','none')
    handleToggle ('transactions-box','block')
})

document.getElementById("log-out").addEventListener("click", function(){
    window.location.href = "index.html"
})