function sniff() {

  let all = nam.value;
  let maily = pro.value
  let call = phone.value
  
  if (all=="" && maily==""&&call=="") {
    error.innerHTML = "This field is required";
    err.innerHTML = "This field is required";
    errs.innerHTML = "This field is required";
    error.style.color = "#c3081b";
    err.style.color = "#c3081b";
    errs.style.color = "#c3081b";

  }else if(maily==""){
    err.innerHTML = "Email is Required";
    err.style.color = "#c3081b";
  }else if(call=""){
    errs.innerHTML = "Phone number is Required";
    errs.style.color = "#c3081b";
  }
   else {
    err.innerHTML = ""
    errs.innerHTML = ""
    error.innerHTML=""
    window.location.href = "select.html";
  }
}
function pres(){
  window.location.href = "indexa.html";
}
function step(){
  window.location.href = "pick.html";
}
function next(){
  window.location.href = "finish.html";
}
function move(){
  window.location.href = "select.html";
}
 setTimeout(() => {
   card.style.display="none"
 }, 4000);


