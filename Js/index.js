var modal = document.querySelector('.modal')
var formRegister = document.querySelector('.form-register')
var formSignIn = document.querySelector('.form-signin')
var login = document.querySelectorAll('.header__navbar-item--strong')
var modelOverlay = document.querySelector('.modal__overlay')
var btnSignIn = document.querySelector('.btn-signin')
var btnRegister = document.querySelector('.btn-register')
var btnControlBack = document.querySelectorAll('.auth-form__controls-back')


function hiddenModal () {
    modal.classList.add('hidden')
}

function showModal() {
    modal.classList.remove('hidden')

}

hiddenModal()


function hiddenFormRegister () {
    formRegister.classList.add('hidden')
}

function showFormRegister () {
    formRegister.classList.remove('hidden')

}

hiddenFormRegister()


function hiddenFormSign () {
    formSignIn.classList.add('hidden')
}

function showFormSignIn() {
    formSignIn.classList.remove('hidden')
}

hiddenFormSign()

login[0].onclick = function () {
    showModal()
    hiddenFormSign()
    showFormRegister ()
}

login[1].onclick = function () {
    showModal()
    hiddenFormRegister()
    showFormSignIn ()
}

modelOverlay.onclick = function () {
    hiddenModal()
}

btnSignIn.addEventListener('click', function() {
    hiddenFormRegister()
    showFormSignIn()
})

btnRegister.addEventListener('click', function() {
    hiddenFormSign()
    showFormRegister()
})

for (var i = 0; i < btnControlBack.length; i++) {
    btnControlBack[i].addEventListener('click', function() {
        hiddenModal()
        hiddenFormRegister()
        hiddenFormSign()
    })
}