// JavaScript for TP5


window.onload = function() {

  document.querySelector("#titleBanner h1").classList.add("tp");
  document.querySelector("#titleBanner h1").onclick = function() {

    this.classList.toggle("pink");
  }
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }

  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }

  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }

  document.querySelector("#recipeColumns #equipment ul").innerHTML += "<li>A hunger for dessert</li>";


} // end window.onload