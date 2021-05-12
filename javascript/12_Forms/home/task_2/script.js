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


// signUp.addEventListener('click',checkFields());

function checkFields() {
    console.log("ff");
        if(!agree.checked) return;
        if(inputsCollection[0].value.length < 5 && inputsCollection[1].value.length < 5 && inputsCollection[2].value.length < 5) return;

        if(!gender[0].checked && !gender[1].checked) return;
        if(!optionCollection[1].selected && !optionCollection[2].selected && !optionCollection[3].selected) return;

        firstBlock.style.display ='none';
        secondContent.style.display= 'flex';
    
    
        user.textContent = `${inputsCollection[0].value}  ${inputsCollection[1].value}`;
        userEmail.textContent = inputsCollection[2].value;
        post.textContent = selectList.value;
        
        gender[0].checked ? avatar.classList.add('man') : avatar.classList.add('woman');
        
}

// if (document.addEventListener('DOMSubtreeModified', OnSubtreeModified, false)) {
//     checkFields(e);
// };







signOut.addEventListener('click',function(e) {
    secondContent.style.display ='none';
    firstBlock.style.display = 'block';
    avatar.classList.remove('woman');
    avatar.classList.remove('man');
});