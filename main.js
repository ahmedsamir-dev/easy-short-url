function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}


const shorted = document.getElementById("shorted"),
    copyBtn = document.getElementById("copyBtn");

console.log(shorted);

 function copy() {

  shorted.select();
  document.execCommand("copy");

}
