import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronombres = ["the", "our"];
  let adjettivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];



  let texhtml = ""

  for (let p = 0; p < pronombres.length; p++) {
    for (let a = 0; a < adjettivos.length; a++) {
      for (let s = 0; s < sustantivos.length; s++) {
        //let li = document. createElement ("li");

        texhtml += `<li>${pronombres[p]}${adjettivos[a]}${sustantivos[s]}.com</li>`

      }
    }
  }



  let dominios = document.querySelector("#dominios")
  dominios.innerHTML = texhtml
  console.log("Hello Rigo from the console!");
};
