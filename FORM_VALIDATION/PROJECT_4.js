console.log('Hello Dev')
let username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validEmail = false;
let validPhone = false;
let validEUsername = false;
username.addEventListener('blur',()=>{
    console.log('username is blurred')
    // VALIDATING USERNAME
    let reg1 = /^[A-Z]([a-zA-Z]){0,20}/ //It means our name must start with capital letter then after it can have letters froma-z and A-Z but they it should be only 20 letters or less not more than that
    let str1 = username.value
    console.log(reg1,str1)
    if(reg1.test(str1)){
        console.log('YOUR NAME IS VALID')
        validEUsername = true;
        username.classList.remove('is-invalid'); //If matched then is-invalid class is removed from form
    }
    else{
        console.log('YOUR NAME IS INVALID')
        validEUsername = false;
        username.classList.add('is-invalid');// If doesn't matched then is-invalid class added to form
    }
})
email.addEventListener('blur',()=>{
    console.log('email is blurred')
    let reg2 = /^([0-9a-zA-Z]+)@([a-z]+)\.([a-z]){2,7}$/;
    let str2 = email.value
    console.log(reg2,str2)
    if(reg2.test(str2)){
        console.log('YOUR EMAIL IS VALID')
        validEmail = true;
        email.classList.remove('is-invalid'); //If matched then is-invalid class is removed from form
    }
    else{
        console.log('YOUR EMAIL IS INVALID')
        validEmail = false;
        email.classList.add('is-invalid');// If doesn't matched then is-invalid class added to form
    }
})
phone.addEventListener('blur',()=>{
    console.log('phone is blurred')
    let reg3 = /^[0-9]{10}/ //This means your phone number must starts with numbers between 0-9 and of 10 numbers
    let str3 = phone.value
    console.log(reg3,str3)
    if(reg3.test(str3)){
        console.log('YOUR PHONE NUMBER IS VALID')
        validPhone = true;
        phone.classList.remove('is-invalid'); //If  matched then is-invalid class is removed from form
    }
    else{
        console.log('YOUR PHONE NUMBER IS INVALID')
        validPhone = false;
        phone.classList.add('is-invalid');// If doesn't matched then is-invalid class added to form
    }
})
let submit = document.getElementById('submit')
submit.addEventListener('click',(e) =>{
    e.preventDefault(); //It stops the loading of page againand again as it loads after we click submit button
    console.log('YOU CLICKED SUBMIT BUTTON');
    if(validEmail && validEUsername && validPhone){
        console.log("USERNAME,PHONE & EMAIL ARE VALID.SUBMITTING FORM");
        let success = document.getElementById('success')
        success.classList.add('show'); //It adds the show class when we click submit button till then it doesn't show any success message
        failure.classList.remove('show');
    } 
    else{
        console.log("USERNAME,PHONE & EMAIL ARE INVALID.PLEASE CORRECT THE DATA FOR SUBMIISSION");
        let failure = document.getElementById('failure')
        failure.classList.add('show');
        success.classList.remove('show');
    }
   
})