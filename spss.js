let usersc=0;
let compsc=0;
let c;
let d;


let choice=document.querySelectorAll(".choicee")
let winnn=document.querySelector(".win h1")
let user=document.querySelector("#score")
let compp=document.querySelector("#scor")

const comp=()=>{
    let att=["rock","paper","scissors"]
    let ran=Math.floor(Math.random()*3);
    return att[ran];
}
choice.forEach(choicee => {
    choicee.addEventListener("click",()=>{
        let u=choicee.getAttribute("id")
        console.log(u);
        playgame(u)
    })
     
});
const playgame=(u)=>{
    console.log("user choice is",u);
    let com=comp();
    console.log("computer choice is",com);
    if(u===com){
         winnn.innerText=`Match become draw`
         winnn.style.backgroundColor="lightpink"


        
    }
    
    else{
        let uwin=true;
        if(u==="rock"){
            uwin=com==="paper"? false :true;
        }
        else if(u==="paper"){
            uwin=com==="scissors"? false :true;
        }
        else{
            uwin=com==="rock"? false :true;
        }
        if(uwin){
            winnn.innerText=`You win`
            winnn.style.backgroundColor="green"
            c= ++usersc;
            user.innerText=c;
        }
        else {
            winnn.innerText=`Comp win`
            winnn.style.backgroundColor="yellow"
            d= ++compsc;
            compp.innerText=d;

        }
       
    }
    
      
       
        
    
    
    

}