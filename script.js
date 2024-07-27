const textId=document.getElementById("textid");
const listCo=document.getElementById("listco");
function butu(){
    if(textId.value===''){
        alert("Write Something");
    }
    else{
        const lew=document.createElement("li");
        lew.innerHTML=textId.value;
        listCo.appendChild(lew);
        const span1=document.createElement("span");
        span1.innerHTML='\u00d7';
        lew.appendChild(span1);
    }
    textId.value='';
    saveda();
}
listCo.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("check");
        saveda();
    }
    else if(e.target.tagName==='SPAN'){
e.target.parentElement.remove();
saveda();
    }

},false);

function saveda(){
    localStorage.setItem("data",listCo.innerHTML);
}
function showda(){
    listCo.innerHTML=localStorage.getItem("data");

}
showda();