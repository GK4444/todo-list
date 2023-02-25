function validate(){
    var password = document.getElementById("myInput");
    var username = document.getElementById("username");
    console.log("PasSWord:",password.value)
    if (password.value==='gk44' && username.value==='gk'){
        // alert('Login Successfull');
        window.location.replace('gk_kanban.html')
        return false;
    }
    else{
        alert("Login Failed!!!!");
    }
}