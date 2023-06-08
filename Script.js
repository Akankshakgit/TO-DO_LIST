const inputbox = document.getElementById("input-box");
const listc = document.getElementById("list");


function addtask(){
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listc.addEventListener

listc.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked");
 }
 else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
 }
} ,false);

function saveData(){
    localStorage.setItem("data",listc.innerHTML);
}

function showtask(){
    listc.innerHTML = localStorage.getItem("data");
}
showtask();
