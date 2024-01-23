function myfunc(e) {
  e.preventDefault();

  let plants = document.getElementById("#plant").value;
  let animals = document.getElementById("#animal").value;
plants.innerText = e.target.value;
  
}
