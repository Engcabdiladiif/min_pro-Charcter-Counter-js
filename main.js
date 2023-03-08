const  textareaEl = document.getElementById("textarea");
const TolcounterEl = document.getElementById("Total-conuter");
const ReamainigEl = document.getElementById("Reamaing-counter");

textareaEl.addEventListener('keyup', () =>{


  upCounter();
})


function upCounter(){
  TolcounterEl.innerHTML = textareaEl.value.length;
  ReamainigEl.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;

}