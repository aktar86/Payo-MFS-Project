            document.getElementById('login-Btn').addEventListener('click', function(e){
                e.preventDefault()
                //verify login section
                const userNumber = '01728456744';
                const userNumberInt = parseInt(userNumber);
                const userPin = 1234;

                // userId
                const userId = document.getElementById('userId').value;
                const userIdInt = parseInt(userId)
                // userPinNumber
                const userPinNumber = document.getElementById('userPinNumber').value;
                const userPinNumberInt = parseInt(userPinNumber)

                if(userIdInt === userNumberInt && userPinNumberInt === userPin){
                    const loginArea = document.getElementById('loginArea');
                    loginArea.style.display = 'none';
                    const secondVisible = document.getElementById('second-page');
                    secondVisible.style.display = 'block';
                }
                else{
                    alert('please try again boss');
                }
            

        })




        // second page code
        // add button from head for showing the form
       document.getElementById('add-Money-form-show').addEventListener('click', function(){
        const moneyAreaVisible = document.getElementById('money-area-visible');
        moneyAreaVisible.style.display = 'block';

        const cashoutAreaVisible = document.getElementById('cashout-area-visible');
        cashoutAreaVisible.style.display = 'none';
       })

        let validPin = 1234;

        // Add money in account 
       document.getElementById('add-money-btn').addEventListener('click', function(e){
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;
        const bankAcNumber = document.getElementById('Bank-AC').value;
        const inputAmount = document.getElementById('input-amount').value;
        const pin = document.getElementById('pin-number').value;

        if(bankAcNumber.length < 11){
            alert('Boss! Write correctly Account number');
            return;
        }

        const pinNumber = parseInt(pin);
        if(pinNumber !== validPin){
            alert('Invalid Account')
            return;
        }
        else{
            alert('boss! Money Added Successfully')
        }

        const inputAmountNumber = parseInt(inputAmount);

        const totalAmount = document.getElementById('totoal-Amount');
        const getTotalAmout = totalAmount.innerText;
        const totalAmountNumber = parseInt(getTotalAmout)

        const addMoney = totalAmountNumber + inputAmountNumber;
        totalAmount.innerText = addMoney;
        

        document.getElementById('Bank-AC').value = '';
        document.getElementById('input-amount').value = '';
        document.getElementById('pin-number').value = '';
       })


    //    cashOut Page section script
    document.getElementById('cashout-btn').addEventListener('click', function(){
            const cashoutAreaVisible = document.getElementById('cashout-area-visible');
            cashoutAreaVisible.style.display = 'block';

            const moneyAreaVisible = document.getElementById('money-area-visible');
            moneyAreaVisible.style.display = 'none';

        })


        document.getElementById('cash-Out-btn').addEventListener('click', function(e){
            e.preventDefault();
            const agentNumber = document.getElementById('agent-Number').value;
            const pin = document.getElementById('cashout-pin-number').value;
            const pinNumber = parseInt(pin)
            
            // verify number 
            if(agentNumber.length < 11){
                alert('Plese input correct number');
                return;
            }
            
            const cashoutAmount = document.getElementById('cashout-amount').value;
            const cashoutAmountNumber = parseInt(cashoutAmount);
            // verify amount 
            if(isNaN(cashoutAmountNumber)){
                alert('plese input correct amount number');
                return;
            }
            // verify pin
            if(pinNumber !== validPin){
                alert("Invalid Account");
                return;
            }
            else{
                alert('boss! cash out Successfully done')
            }
            

            const totalAmount = document.getElementById('totoal-Amount');
            const getTotalAmout = totalAmount.innerText;
            const totalAmountNumber = parseInt(getTotalAmout)

            const totalAmountAfterCashout = totalAmountNumber - cashoutAmountNumber;
            totalAmount.innerText = totalAmountAfterCashout;


            document.getElementById('cashout-amount').value = '';
        })