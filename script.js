reset.onclick=()=>{
    location.reload();
}
const form=document.getElementById('form')
const username=document.getElementById('name')
const mail=document.getElementById('mail')
const number=document.getElementById('number')
const id=document.getElementById('id')
const checkbox=document.getElementById('checkbox')
//const input=document.getElementById('input')

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    validate();
    Submit.onclick =()=>{
        console.log("your form has been submitted.");
    }
})


const validate = ()=>{
    const nameVal = username.value.trim();
    const mailVal=mail.value.trim();
    const numberVal=number.value.trim();
    const idVal=id.value.trim();

if(nameVal === ""){
    setErrormsg(username, 'Username cannot be blank.');
}
else{
    setSuccessmsg(username,"");
}
if(mailVal===""){
    setErrormsg(mail,'E-Mail cannot be empty.');
}
else if(!emailValid(mailVal)){
    setErrormsg(mail,'Invalid E-mail. Please use your BITS E-Mail only');
}
else{
    setSuccessmsg(mail,"");
}
if(numberVal === ""){
    setErrormsg(number,'Phone number cannot be empty');
}
else{
    setSuccessmsg(number,"");
}
if(idVal === ""){
    setErrormsg(id,'BITS-ID cannot be empty.');
}
else if(!idValid(idVal)){
    setErrormsg(id,'Your BITS-ID is not valid.');
}
else{
    setSuccessmsg(id,"");
}
if(checkbox.checked===true){
    setSuccessmsg(checkbox,"");
    return true;
}
else{
    setErrormsg(checkbox,"Pls agree to the terms and conditions");
}

}

function setErrormsg(input,errormsg){
    const formControl =input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = errormsg;
    formControl.className = "form-control error";
}

function setSuccessmsg(input,successmsg){
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText= successmsg;
    formControl.className="form-control success";
}

function emailValid(mailVal){
    var f = mailVal.indexOf("f");
    if(f !==0) return false;
    var endStr = mailVal.indexOf("@pilani.bits-pilani.ac.in");
    if(endStr !==9) return false;
    return true;
}

function idValid(idVal){
    var ps = idVal.indexOf("PS");
    if(ps !==6 && ps!==8) return false;
    var P = idVal.lastIndexOf("P");
    if(P !==12 && P!==14) return false;
    return true;
}