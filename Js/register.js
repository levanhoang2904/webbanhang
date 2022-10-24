var usersApi = 'http://localhost:3000/users'

var registerBtn = document.querySelector('.btnRegister')

registerBtn.onclick = function() {
    var email = document.querySelector('input[name="email"]').value
    var password = document.querySelector('input[name ="password"]').value
    var repeatPassword = document.querySelector('input[name = "repeat-password"]').value
    var index;
    for (var i = 0;  i < email.length; i++){
        if (email[i] === '@') index = i
    }

    var username = email.slice(0, index)
    console.log(username)
    var data = {
        email: email,
        password: password,
        username: username
    }

    if (password === repeatPassword) {
        createUser(data)
        hiddenModal()
    }
}


function createUser(data) {
    var object = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }

    fetch(usersApi, object) 
        .then(function(response) {
            return response.json()
        })

        .then(data)
}