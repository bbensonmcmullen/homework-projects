//   var button = document.getElementById('#Button');

// function clickAssign(){
// var pW = document.getElementById('#password').value;
// var pWC = document.getElementById('#confPass').value;
// }


// function passwordCheck(pW, pWC){

//   if (pW !== pWC){
//     alert('Your passwords MUST match.')
//   } else {
//     button.disabled= true;
//   }
// }

// document.getElementById('Button').addEventListener('click', function(){
//     let pW = document.getElementById('password').value;
//     let pWC = document.getElementById('confPass').value;
//     if (pW !== pWC){
//       alert('Your passwords MUST match!')
//     } else {
//       document.getElementById('Button').disabled=true;
//     }
//   })

let passw1 = document.getElementById('password');
let passw2 = document.getElementById('confPass');
let username = document.getElementById('uName');
let button = document.getElementById('Button');
let inputs = document.getElementsByClassName('input');

function passwordCheck(){
  if (passw1.value != passw2.value){
    alert('Your passwords MUST match!')
  } else { button.disabled = true;
}}

function fillCheck(){
  if (passw1.value == "" || passw2.value == "" || uName.value == ""){
    alert('Please fill in all your fields!')
  } 
}

// inputs.onfocus = function(){
//     document.getElementById('defaultMessage').style.display="block";
// }

// inputs.onblur = function(){
//     document.getElementById('defaultMessage').style.display="none";
// }