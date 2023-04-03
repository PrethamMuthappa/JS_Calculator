
display=(value)=>
{
document.getElementById("result").value+=value;
}

calculate=()=>
{
   var p = document.getElementById("result").value;
  var q=eval(p);
  document.getElementById("result").value=q
}

clear=()=>{

 document.getElementById("result").value="";
}