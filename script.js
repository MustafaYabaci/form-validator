const form =document.getElementById("form")
const userName=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const repassword=document.getElementById("repassword")

 function error(input,message){
     input.classList="form-control is-invalid"
    
     const div=input.nextElementSibling;
     div.className="invalid-feedback"
     div.innerText=message;
 }


 function success(input){
     input.classList="form-control is-valid"
 }


 const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



function checkLength(input,min,max){
    if(input.value.length < min){
        error(input,`en az ${min} karekter girilmelidir`)
    }else if(input.value.length > max){
        error(input,`en fazla ${max} karekter girilmelidir`)
    }else{
        success(input);
    }
}




function checkRequired(inputs){

inputs.forEach(function(input){



    if(input.value===""){
        error(input,`${input.id} is a valited`)
    }else{
        success(input)
    }


})



}


function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        error(input2,"parola uyuşmuyor")
    }
}



form.addEventListener("submit",function(e){
    e.preventDefault()

   checkRequired([userName,email,password,repassword])
   validateEmail(email)

   checkLength(userName,7,15)
   checkLength(password,6,12)
   checkPassword(password,repassword)
})