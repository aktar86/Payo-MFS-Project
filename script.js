let validPin = 1234;

// here is common function
function getInputNumber(id){
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseInt(inputAmount);
    return inputAmountNumber;
}


// function for value blank
function blankValue(id){
    document.getElementById(id).value = '';
}

// Update Amount funnciton
function updateAmountText(id, inputAmountNumber){
    const totalAmount = document.getElementById(id).innerText;
    const totalAmountNumber = parseInt(totalAmount);
    const availableAmount = totalAmountNumber + inputAmountNumber;
    document.getElementById(id).innerText = availableAmount;
}

// function for display block
function displayBlock(id){
    const cashoutAreaVisible = document.getElementById(id);
    cashoutAreaVisible.style.display = 'block';
}

// function for display block
function displayNone(id){
        const moneyAreaVisible = document.getElementById(id);
        moneyAreaVisible.style.display = 'none';
}



//login Page feature
document.getElementById('login-Btn').addEventListener('click', function (e) {
    e.preventDefault()
    //verify login section
    const userNumber = '01728456744';
    const userNumberInt = parseInt(userNumber);
    const userPin = 1234;
    const userId = getInputNumber('userId')
    const userPinNumber = getInputNumber('userPinNumber')

    if (userId === userNumberInt && userPinNumber === userPin) {   
        displayNone('loginArea')
        displayBlock('second-page')
    }
    else {
        alert('please try again boss');
    }
})


// Add Money Feature
document.getElementById('add-Money-form-show').addEventListener('click', function () {
    displayBlock('money-area-visible');
    displayNone('cashout-area-visible')
})



// Add money in account 
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bankName = document.getElementById('bank-name').value;
    const bankAcNumber = document.getElementById('Bank-AC').value;
    const pinNumber = getInputNumber('pin-number')
    if (bankAcNumber.length < 11) {
        alert('Boss! Write correctly Account number');
        return;
    }
    if (pinNumber !== validPin) {
        alert('Invalid Account')
        return;
    }
    else {
        alert('boss! Money Added Successfully')
    }
    const inputAmount = getInputNumber('input-amount');
    updateAmountText('totoal-Amount', inputAmount);
    blankValue('Bank-AC');
    blankValue('input-amount');
    blankValue('pin-number');
})



// CashOut feature
document.getElementById('cashout-btn').addEventListener('click', function () {
    displayBlock('cashout-area-visible');
    displayNone('money-area-visible')
})


document.getElementById('cash-Out-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const agentNumber = document.getElementById('agent-Number').value;
    const pinNumber = getInputNumber('cashout-pin-number')
    // verify number 
    if (agentNumber.length < 11) {
        alert('Plese input correct number');
        return;
    }
    const cashoutAmount = getInputNumber('cashout-amount');
    // verify amount 
    if (isNaN(cashoutAmount)) {
        alert('plese input correct amount number');
        return;
    }
    // verify pin
    if (pinNumber !== validPin) {
        alert("Invalid Account");
        return;
    }
    else {
        alert('boss! cash out Successfully done')
    }
    updateAmountText('totoal-Amount', -1 * cashoutAmount);
    blankValue('cashout-amount');
    blankValue('agent-Number');
    blankValue('cashout-pin-number');
})