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