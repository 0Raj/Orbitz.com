    var userData =JSON.parse(localStorage.getItem("userData")) || [];
    const showpassword = () => {
    // const data = document.getElementById("box2").value
    if (document.getElementById("box4").type === "text")
        document.getElementById("box4").type = "password";
    else
        document.getElementById("box4").type = "text"
}

function signupsubmit(event) {
    event.preventDefault();
    const email = document.getElementById("box1").value;
    const password = document.getElementById("box4").value;
    const firstname = document.getElementById("box2").value;
    const lastname = document.getElementById("box3").value;
    var userobj={ email_data : email, pwData : password,fNameData:firstname, lNameData:lastname};

    if (email != "" && password !="" && firstname != "" && lastname != "") {
        userData.push(userobj);
        window.localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = 'login.html'
    }
    else {
        alert("Enter All Details");
    }
}
document.getElementById("signupsubmit").addEventListener("click", signupsubmit);
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", function(){
    window.location.href = "landingPage.html";
});