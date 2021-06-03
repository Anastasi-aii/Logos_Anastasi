let firstBlock = document.getElementById('first-block');
let inputsCollection = firstBlock.getElementsByTagName('input');
let agree = document.getElementById('agree');
let signUp = document.getElementById("sign-up");
let secondContent = document.getElementById('second-content');
let signOut = document.getElementById("sign-out");
let user = document.getElementById("user");
let userEmail = document.getElementById("user-email");
let avatar = document.getElementById("avatar");
let post = document.getElementById("post");
let gender = document.getElementsByName('gender');
let selectList = document.getElementById("select-list");
let optionCollection = document.getElementsByTagName('option')
let form = document.getElementById('form');



function onSubmit() {
    console.log
    if(checkFields() !== true) return;
    firstBlock.style.display ='none';
    secondContent.style.display= 'flex';

    user.textContent = `${inputsCollection[0].value}  ${inputsCollection[1].value}`;
    userEmail.textContent = inputsCollection[2].value;
    post.textContent = selectList.value;
    
    let genderImage = gender[0].checked ? 'woman' : 'man';
    avatar.classList.add(genderImage);
}

function onChange() {
    if(checkFields() === true) {
        signUp.classList.add('active');
    } else {
        signUp.classList.remove('active');
    } 
}

function checkFields() {
        if(!agree.checked) return;
        if(!inputsCollection[0].value.length) return;
        if(!inputsCollection[1].value.length) return;
        if(!inputsCollection[2].value.length) return;
        if(!gender[0].checked && !gender[1].checked) return;
        if(!optionCollection[1].selected && !optionCollection[2].selected && !optionCollection[3].selected) return; 
        return true; 
       
}

document.addEventListener('change',onChange);
form.addEventListener('submit', onSubmit);

signOut.addEventListener('click',function(e) {
    secondContent.style.display ='none';
    firstBlock.style.display = 'block';
    avatar.classList.remove('woman');
    avatar.classList.remove('man');
});