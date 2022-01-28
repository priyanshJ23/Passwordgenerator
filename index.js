const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const UppercaseEL = document.getElementById('Uppercase')
const LowercaseEL = document.getElementById('Lowercase')
const numberEL = document.getElementById('number')
const SymbolsEL = document.getElementById('Symbols')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')
const randomfunc = 
{
    lower: getlowercase,
    upper: getuppercase,
    number:getnumber,
    symbol:getsymbol
}
generateEL.addEventListener('click' , () =>
{
    const length = lengthEL.value;
    const haslower = LowercaseEL.checked;
    const hasupper = UppercaseEL.checked;
    const hasnumber = numberEL.checked;
    const hassymbol = SymbolsEL.checked;
    
    resultEL.innerText = generatepassword(haslower,hasupper,hasnumber,hassymbol,length);
})

clipboardEL.addEventListener('click' ,() => 
{
               const textarea  = document.createElement('taxtarea');
               const password = resultEL.innerText;
               if(!password) {return ''}
               textarea.value = password;
               navigator.clipboard.writeText(textarea.value);
              
               document.getElementById("custom-tooltip").style.display = "inline"
              document.execCommand("copy");
              setTimeout( function() {
             document.getElementById("custom-tooltip").style.display = "none";
             }, 1000);
            textarea.remove();
})


function generatepassword(lower,upper,number,symbol,length)
{
    let generatedpassword = '';
    let typecount = lower+upper+number+symbol;
    const typearr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);

    if(typecount === 0)
    {
       
        document.getElementById("blank-text").style.display = "inline"
        setTimeout( function() {
       document.getElementById("blank-text").style.display = "none";
       }, 1000);
       return '';
    }
    for(let i=0;i<length;i+=typecount)
    {
        typearr.forEach(type =>
            {
                const funcname  = Object.keys(type)[0]
                generatedpassword += randomfunc[funcname]()
            })
    }
    const finalpassword = generatedpassword.slice(0,length);
    return finalpassword;
    console.log(typecount)
    console.log(typearr)
}



function getuppercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getlowercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getnumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getsymbol()
{
    const symbol = '!@#()[]%^&*$=<>?'
    return symbol[Math.floor(Math.random()* symbol.length)]
}
console.log(getuppercase());
console.log(getlowercase());
console.log(getnumber());
console.log(getsymbol());