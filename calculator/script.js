const input=document.getElementById("inputValue");
let answer="" ;
press=(value)=> {
 answer+=value;
 input.value=answer;
}
equal=()=>{
    input.value=eval(answer);
    answer="";
}
erase=()=>{
    input.value="";
    answer="";
}