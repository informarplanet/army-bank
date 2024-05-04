document.getElementById('submit_btn').addEventListener('click',function(){
    const userName=document.getElementById('userName');
    const userPassword=document.getElementById('userPassword');

    let usernameValue= userName.value;
    const userpasswordValue= userPassword.value;
    console.log(usernameValue, userpasswordValue)

    if (usernameValue==""){
        alert("Input Username")
    }else if(userpasswordValue==""){
        alert("input password")
    }else if(usernameValue=="admin@armybank.com" && userpasswordValue=="Admin@123" ){
        location.href='bank.html/?user={usernameValue}'
        const user=document.getElementById('userNamedis');
        console.log(user)
        user.innerText=usernameValue;
        
    }else{
        alert('Please input valid Username & password');
        userName.value="";
        userPassword.value="";
    }
    
})