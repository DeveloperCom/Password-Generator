
//declear variable for generate random string
let defChar="!@#$%^&*()+-/{}[]~`";
let defUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let defNum="1234567890";
let defLowerCase="abcdefghijklmnopqrstuvwxyz";

let allChar="";
let copy;


//this function is for generate final output
function generate(size,condition)
{
    let password = "";
	for (var i = 0; i < size; i++) 
    {
		password += condition.charAt(Math.floor(Math.random() * condition.length));
	}
    document.getElementById("op").innerHTML = password;
    copy=password;
    allChar="";
}

function condition(size)
{
    //collecting all "checkbox" input
    //we .checked to find it is true or false
    let char=document.getElementById("char").checked;
    let upperCase=document.getElementById("upperCase").checked;
    let num=document.getElementById("num").checked;
    let lowerCase=document.getElementById("lowerCase").checked;


   if(char!=true && upperCase !=true && num !=true && lowerCase !=true)
   {
    document.getElementById("op").innerHTML = "At last select one checkbox ";
   }
   else
   {
    if(char===true)
    {
        allChar += defChar; //here if the given condition is true so, allChar will be add defChar else not.
    }
    else{}
    if(upperCase===true)
    {
        allChar += defUpperCase; //here if the given condition is true so, allChar will be add defUpperCase else not.
    }
    else{}
    if(num===true)
    {
        allChar += defNum; //here if the given condition is true so, allChar will be add defNum else not.
    }
    else{}
    if(lowerCase===true)
    {
        allChar += defLowerCase; //here if the given condition is true so, allChar will be add defLowerCase else not.
    }
    else{}

    //after checking all condition , call the generate function
    generate(size,allChar);
   }

}

function main()
{
    //collecting "inNum " input 
    // to find the value of input we have to use .value
    let inNum=document.getElementById("inNum").value;  
    if(inNum>100)
    {
        inNum=100;
    }

    if(inNum==='')
    {
        document.getElementById("op").innerHTML = "Type a Number ";
    }
    else
    {
        condition(inNum);
    }
}

function copyfn()
{
    navigator.clipboard.writeText(copy);
    document.getElementById("pop").innerHTML="copied";
    setTimeout(() => {
        document.getElementById("pop").innerHTML="";
    }, 2000);
}