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

signUp.addEventListener('click',function(e) {
    // for (let i = 0; i < inputsCollection.length; i++) {
    //     let counter = 0;
    //     if(inputsCollection[i].value.length > 5) {
            
    //         counter = inputsCollection.value;
    //         console.log(i);
    //         console.log(inputsCollection[i]);
    //         console.log(counter);
    //     }
    // }

           firstBlock.style.display ='none';
            secondContent.style.display= 'flex';
            user.textContent = `${inputsCollection[0].value}  ${inputsCollection[1].value}`;
            userEmail.textContent = inputsCollection[2].value;
            post.textContent = selectList.value;
            
            if (gender[0].checked) {
                avatar.classList.add('man');
            } else {
                avatar.classList.add('woman');
            }
});

signOut.addEventListener('click',function(e) {
    secondContent.style.display ='none';
    firstBlock.style.display = 'block';
    avatar.classList.remove('woman');
    avatar.classList.remove('man');
});