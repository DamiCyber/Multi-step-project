function sniff() {
  let all = nam.value;
  let maily = pro.value;
  let call = phone.value;

  if (all == "" && maily == "" && call == "") {
    error.innerHTML = "This field is required";
    err.innerHTML = "This field is required";
    errs.innerHTML = "This field is required";
    error.style.color = "#c3081b";
    err.style.color = "#c3081b";
    errs.style.color = "#c3081b";
  }
  else if (all == "" && maily !== "" && call !== ""){
    error.innerHTML = "Name is Required";
    error.style.color = "#c3081b";
    errs.innerHTML = "";
    err.innerHTML = "";

  } 
  else if (all !== "" && maily == "" && call == ""){
    err.innerHTML = "This field is required";
    errs.innerHTML = "This field is required";
    errs.style.color = "#c3081b";
    err.style.color = "#c3081b";
    error.innerHTML = "";

  } 
  else if ( maily !== ""&& all == "" && call == ""){
    error.innerHTML = "This field is required";
    errs.innerHTML = "This field is required";
    errs.style.color = "#c3081b";
    error.style.color = "#c3081b";
    err.innerHTML = "";

  } 
  else if ( call !== ""&& maily == ""&& all == "" ){
    error.innerHTML = "This field is required";
    err.innerHTML = "This field is required";
    err.style.color = "#c3081b";
    error.style.color = "#c3081b";
    errs.innerHTML = "";

  } 
  else if (all !== "" && maily == "" && call !== ""){
    err.innerHTML = " Email is Required";
    err.style.color = "#c3081b";
    error.innerHTML = "";
    errs.innerHTML = "";

  } 
  else if (all !== "" && maily !== "" && call == ""){
    errs.innerHTML = "Number is Required";
    errs.style.color = "#c3081b";
    error.innerHTML = "";
    err.innerHTML = "";

  } else {
    err.innerHTML = "";
    error.innerHTML = "";
    errs.innerHTML = "";
    window.location.href = "select.html";
  }
}
function pres() {
  window.location.href = "indexa.html";
}
function step() {
  window.location.href = "pick.html";
}
function next() {
  window.location.href = "finish.html";
}
function move() {
  window.location.href = "select.html";
}
setTimeout(() => {
  card.style.display = "none";
}, 4000);
