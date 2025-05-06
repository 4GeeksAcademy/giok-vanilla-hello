import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let pronombres = ["the", "our"];
  let adjettivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];
  let textHTML = ""

  for (let p = 0; p < pronombres.length; p++) {
    for (let a = 0; a < adjettivos.length; a++) {
      for (let s = 0; s < sustantivos.length; s++) {
        // Let li = document. createElement ("li");
        textHTML += `<li>${pronombres[p]}${adjettivos[a]}${sustantivos[s]}.com</li>`
      }
    }
  }

  let dominios = document.querySelector("#dominios")
  dominios.innerHTML = textHTML
  // console.log("Hello Rigo from the console!");
};
