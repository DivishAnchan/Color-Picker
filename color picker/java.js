const colorpicker=document.getElementById("colorpicker");
const colorinput=document.getElementById("colorinput");

function changebackgroundColor(color){
    document.body.style.backgroundColor=color;
}
colorpicker.addEventListener("input",function(){
    changebackgroundColor(colorpicker.value);
    colorinput.value=colorpicker.value;
});
colorinput.addEventListener("input",function(){
    changebackgroundColor(colorinput.value);
});

 const name = localStorage.getItem('userName');
  if (name) {
    document.getElementById('welcome').innerText = "Welcome " + name + " , to our Color Playground!";
  }