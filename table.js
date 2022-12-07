function table(){

   let start=document.getElementById('start').value;
  let  end=document.getElementById('end').value;
  let  num=document.getElementById('table').value;
  document.getElementById('ahmad').innerHTML=""; 
    for (let index = start; index <= end; index++) {
    //  result=index*num;    
     let result="<h3>"+ num + " x "+index+" = "+num*index +"</h3>"; 
     document.getElementById('ahmad').innerHTML+=result; 
    }
    
}   