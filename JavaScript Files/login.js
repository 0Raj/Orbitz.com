var userData =JSON.parse(localStorage.getItem("userData"));
console.log(userData);
    const showpassword = () => {
    // const data = document.getElementById("box2").value
    if (document.getElementById("box2").type === "text")
        document.getElementById("box2").type = "password";
    else
        document.getElementById("box2").type = "text"
}
function submit (event) {
    event.preventDefault();
    const email = document.getElementById("box1").value
    const password = document.getElementById("box2").value
    
    userData.map(function(elem){
        if(email == elem.email_data && password == elem.pwData) {
            localStorage.setItem("username",JSON.stringify(elem.fNameData));
            window.location.href = 'signedInPage.html'
            return;
        }
        else if(email != elem.email_data && password != elem.pwData) {
            alert("Enter Correct Username and Password");
        }  
    });   
}
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("submit").style.cursor = "pointer";
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", function(){
    window.location.href = "landingPage.html";
});