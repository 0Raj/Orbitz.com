    var arr = [{
    name: "xyz", card: "1234", expM: "10", expY:"2025", scode: "321", zcode: "123456"
    }]
    document.querySelector("#leftDiv>img").addEventListener("click", function(){
        window.location.href = "signedInPage.html";
});

    function submit(){
    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var mobilenumber = document.getElementById("mobile_number").value;
   
    
        if (firstname == ""){
        document.querySelector("#wrong_first_name").textContent = "Please enter a first name using letters only.";
        }

        if (lastname == ""){
            document.querySelector("#wrong_last_name").textContent = "Please enter a last name using letters only";
        }
        
        if (mobilenumber == "" || mobilenumber.length < 10){
            document.querySelector("#wrong_number").textContent = "Please enter a valid mobile number";
        }
    }

    function email(){
        var emailaddress = document.getElementById("email_id").value;

        if (emailaddress  == ""){
            document.querySelector("#wrong_email").textContent = "Please enter a valid email address."; 
        }
    }
    


        function check(){
            var four3 = document.getElementById("four_3in").value;
            var four4 = document.getElementById("four_4in").value;
            var four5 = document.getElementById("four_5in").value;
            var four5_2 = document.getElementById("four_5_2in").value;
            var four6 = document.getElementById("four_6in").value;
            var four6_2 = document.getElementById("four_6_2in").value;

            if (four3 == ""){
                document.querySelector("#wrong_name").textContent = "Please enter the cardholder's name exactly as it appears on the card.";
            }

            if (four4 == ""){
                document.querySelector("#wrong_carddetails").textContent = "Please enter a valid card number.";
            }

            if (four5 == ""){
                document.querySelector("#wrong_expirymonth").textContent = "Please choose a valid month.";
            }

            if (four5_2 == ""){
                document.querySelector("#wrong_expiryyear").textContent = "Please choose a valid year.";
            }

            if (four6 == ""){
                document.querySelector("#wrong_securitycode").textContent = "Please enter a valid card security code";
            }
            if (four6_2== ""){
                document.querySelector("#wrong_zipcode").textContent = "Please enter a ZIP code";
            }

            if (four3 != "" && four4 != "" && four5 != "" && four5_2 != "" && four6 != "" && four6_2 != ""){
                if (four3 == arr[0].name && four4 == arr[0].card && four5 == arr[0].expM && four5_2 == arr[0].expY && four6 == arr[0].scode && four6_2 == arr[0].zcode){
                    alert("Payment Successful");
                    document.querySelector("#wrong_zipcode").textContent = "Thank you For Booking!";
                    document.querySelector("#wrong_zipcode").style.color = "green"
                }
                else{
                    alert("Payment Failed");
                    document.querySelector("#wrong_zipcode").textContent = "Oops ! wrong details entered.";
                    document.querySelector("#wrong_zipcode").style.color = "red";
                }

            }
        }

        


        var count = 0;
        document.querySelector("#sutta1").style.display = "none";
        document.querySelector("#sutta2").style.display = "none";
        document.querySelector("#hide1").style.display = "none";
        document.querySelector("#hide2").style.display = "none";
        
        function show1(){
           if (count == 0){
              var z = document.querySelector("#sutta1")
              z.style.display = "none";
              document.querySelector("#sutta2").style.display = "none";
             return  count++;
           } 

           
           else{
           var z = document.querySelector("#sutta1")
            z.style.display = "block";
            document.querySelector("#sutta2").style.display = "block";
            return count--;
           }
        }

        var count2 = 0;
       function show2(){
           if (count2 == 0){
              var y = document.querySelector("#hide1")
              y.style.display = "none";
              document.querySelector("#hide2").style.display = "none";
             return  count2++;
           } 
           else{
            var y = document.querySelector("#hide1")
            y.style.display = "block";
            document.querySelector("#hide2").style.display = "block";
            return count2--;
           }
        }



      
        




        

