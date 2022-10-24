var usersApi = 'http://localhost:3000/users'

var SignIn = document.querySelector('.btnSignIn')

SignIn.onclick = function () {
    getUser(Login)
}

function getUser(callback) {
    fetch(usersApi)
        .then(function(reponese) {
            return reponese.json()
        })
        .then (callback)
}

function Login (users) {
    var email = document.querySelector('input[name = "email-signin"]').value
    var password = document.querySelector('input[name = "password-signin"]').value

    var result = users.filter(function(user) {
        return email.includes(user.email)
    })

    var result1 = result.map(function(result) {
        return result.password
    })

    if (result1.toString() === password && result.length > 0 ){
        var itemLogin = document.querySelectorAll('.item-login')
        hiddenModal()
        for (var i = 0 ; i < itemLogin.length; i++) {
            itemLogin[i].remove()
        }
        
        var username = result.map(function(user){
            return user.username
        })

        var list = document.querySelector('.header__navbar-list--login')
        var htmls = list.innerHTML + `
        <li class="header__navbar-item header__navbar-user">
        <img src="./assets/img/621f3904d1093.jpg" alt="" class="header__navbar-user-img">
        <span class="header__navbar-user-name">${username}</span>

        <ul class="header__navbar-user-info">
            <li class="header__navbar-user-info-item"><a href="">Tài khoản của tôi</a></li>
            <li class="header__navbar-user-info-item"><a href="">Địa chỉ của tôi</a></li>
            <li class="header__navbar-user-info-item"><a href="">Đơn mua</a></li>
            <li class="header__navbar-user-info-item"><a href="">Đăng xuất</a></li>
        </ul>
    </li>
        `

        list.innerHTML = htmls
    }
   

    
    
    
}

