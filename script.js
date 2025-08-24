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
       })

        // Add money in account 
       document.getElementById('add-money-btn').addEventListener('click', function(e){
        e.preventDefault();


        const inputAmount = document.getElementById('input-amount').value;
        const inputAmountNumber = parseInt(inputAmount);

        const totalAmount = document.getElementById('totoal-Amount');
        const getTotalAmout = totalAmount.innerText;
        const totalAmountNumber = parseInt(getTotalAmout)
        const addMoney = totalAmountNumber + inputAmountNumber;
        // new Available Balance
        totalAmount.innerText = addMoney;
        


        const bankName = document.getElementById('bank-name').value;
        const bankAcNumber = document.getElementById('Bank-AC').value;
        const pin = document.getElementById('pin-number').value;

        document.getElementById('Bank-AC').value = '';
        document.getElementById('input-amount').value = '';
        document.getElementById('pin-number').value = '';
       })