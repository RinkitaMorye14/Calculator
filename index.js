let str="";
let btns=document.querySelectorAll(".btn");
Array.from(btns).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML==="=")
        {
            try{
                str=eval(str);
                document.querySelector('.input').value=str;
            }
            catch{
                console.log("Enter Correct expression");
                alert("Looks like there's a problem with the expression you entered. Let's double-check and try again. 🤔");
            }
        }
        else if(e.target.innerHTML==="C")
        {
            str="";
            document.querySelector('.input').value=str;
        }
        else{
            console.log(e.target);
            str=str+e.target.innerHTML;
            document.querySelector('.input').value=str;
        }
    });
});