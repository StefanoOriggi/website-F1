function Login(event) {
    event.preventDefault();
    let _password = "root"
    const _value = document.getElementById('password').value;
    if (_value != _password) {
        window.alert('Password errata')
    }
    else {
        window.location.href = "db_view.html";
    }
        
}