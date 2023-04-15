let countEl=document.getElementById("count-el")
let saveel=document.getElementById("save-el")
console.log(countEl);
let count=0;


function increment(){
    count+=1;
    countEl.textContent=count;
    console.log(count);
}
function save(){
    let countstr= count+"-";
    saveel.textContent+=countstr;
    countEl.textContent=0;
    count=0;
}