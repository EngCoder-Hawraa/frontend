let usenameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let showPasswordButton = document.querySelector('.password-button');


passwordInput.addEventListener('focus', event => {
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.add('hide')
    });
    document.querySelector('.tongue').classList.remove("breath");
});

passwordInput.addEventListener('blur', event => {
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.remove('hide');
        hand.classList.remove('peek');
    });
    document.querySelector('.tongue').classList.add('breath');
});
usenameInput.addEventListener('focus', event => {
    document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove('hide');
        hand.classList.remove('peek');
    });
});

showPasswordButton.addEventListener('click', event => {
    if(passwordInput.type === 'text'){
        passwordInput.type = 'password';
        document.querySelectorAll('.hand').forEach(hand => {
            hand.classList.remove('peek');
            hand.classList.remove('hide');
        });
    }else{
        passwordInput.type = 'text';
        document.querySelectorAll('.hand').forEach(hand => {
            hand.classList.remove('hide');
            hand.classList.add('peek');
        });
    }
});