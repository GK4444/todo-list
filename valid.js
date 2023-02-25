function validate(){
    var password = document.getElementById("myInput");
    var username = document.getElementById("username");
    console.log("PasSWord:",password.value)
    if (password.value==='gk44' && username.value==='gk'){
        // alert('Login Successfull');
        window.location.replace('gk_kanban_index.html')
        return false;
    }
    else if(password.value==='shahzad@1234' && username.value==='shahzad'){
        window.location.replace('shahzad_index.html')
        return false;
    }
    else if(password.value==='test@1234' && username.value==='test'){
        window.location.replace('test_index.html')
        return false;
    }
    else{
        alert("Login Failed!!!!");
    }
}