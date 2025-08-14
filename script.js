let inputSlider=document.getElementById("inputSlider");
let sliderVlaue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");


sliderVlaue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderVlaue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
passBox.value=generatePassword();
    });


    let lowerChars="abcdefghijklmnopqrstuvwxyz";
    let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allNumbers="0123456789";
    let allSymboles="~!@#$%^&*";



    //function to generate password
    function generatePassword(){
        let genPassword="";
        let allChar="";

        allChar +=lowercase.checked? lowerChars: "";
        allChar +=uppercase.checked? upperChars: "";
        allChar +=numbers.checked? allNumbers: "";
        allChar +=symbols.checked? allSymboles: "";
       
        if(allChar=="" || allChar.length==0)
        {
            return genPassword;
        }


        let i=1;
        while(i<=inputSlider.value)
        {
            genPassword+=allChar.charAt(Math.floor((Math.random()*allChar.length)));
            i++;
        }
        
        return genPassword;
    }


    copyIcon.addEventListener('click',()=>{
        if(passBox.value!=="" || passBox.value.length>=1)
        {
            navigator.clipboard.writeText(passBox.value);
            copyIcon.innerHTML="check";  
            copyIcon.title="Password Copied";

            setTimeout(() => {
                copyIcon.innerHTML="content_copy"
                copyIcon.title="";
            }, 3000);

        }
    })
