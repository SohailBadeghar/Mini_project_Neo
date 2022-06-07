let fnameNode=document.getElementById('fname');
let lnameNode=document.getElementById('lname');
let emailNode=document.getElementById('emailid');
let contactNode=document.getElementById('mobile');
let ageNode=document.getElementById('age');

let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorNode5=document.getElementById('error5');

const errorBorder="2px solid red";
const successBorder="2px solid green";
function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();
    console.log(s1 && s2 && s3 && s4  && s5);
    return (s1 && s2 && s3 && s4   && s5);

}

function validate1(){
    let fname=fnameNode.value; 
    errorNode1.innerHTML="";  
    if(fname===''){
        errorNode1.innerHTML="First name is required";
        fnameNode.style.border=errorBorder;
        return false;
    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
}


function validate2(){
    let lname=lnameNode.value; 
    errorNode2.innerHTML="";  
    if(lname===''){
        errorNode2.innerHTML="Last name is required";
        lnameNode.style.border=errorBorder;
        return false;
    }
    else{
        lnameNode.style.border=successBorder;
        return true;
    }
}

function validate3(){
    let email=emailNode.value;  // @vinapatil
    errorNode3.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
   // let index=email.indexOf('@');
   // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode3.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode3.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode3.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}

function validate4(){
    let mobile=contactNode.value;  
    let regExp= new RegExp("^[0-9]{10}$");  //class
    errorNode4.innerHTML="";  
  //  console.log(regExp.test(mobile));   // function
    if(mobile===''){
        errorNode4.innerHTML="Mobile is required";
        contactNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode4.innerHTML="Please enter valid mobile number";
        contactNode.style.border=errorBorder;
        return false;
    }
    else{
        contactNode.style.border=successBorder;
        return true;
    }
}
function validate5(){
    let myage=ageNode.value;  
    console.log(typeof myage);
    errorNode5.innerHTML="";  
    if(myage===''){
        errorNode5.innerHTML="Age is required";
        ageNode.style.border=errorBorder;
        return false;
    }
    else if(parseInt(myage)<0 || parseInt(myage)>110){
        errorNode5.innerHTML="Age should be in the range 0 to 110";
        ageNode.style.border=errorBorder;
        return false;
    }
    else{
        ageNode.style.border=successBorder;
        return true;
    }
}




function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  $(document).ready(function(){
    $("#btn").click(function(){
        $('#para').text( "WORK HARD UNTIL SUCCESS BECOME EASIER TO YOU")
    });
});



