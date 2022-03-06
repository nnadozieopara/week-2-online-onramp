let nameF = document.getElementById("name");
let email = document.getElementById("email");
let phoneNum = document.getElementById("number");
let message = document.getElementById("message");

function cancel(){
    let cancelBTN =document.getElementById("name").value;
    cancelBTN = "";
}

function send(){
    if (nameF.value === "Name" || email.value === "EMAIL" || phoneNum.value === "PHONE NUMBER" || message.innerText === "MESSAGE"){
        window.alert("`all input boxes must be filled`");
    }else if(message.innerText.length > 100){
        window.alert(`message field cannot have more than 100 characters`)
    }
    else{

        window.alert("Welcome User");
    }
}
