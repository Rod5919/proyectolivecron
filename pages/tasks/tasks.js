var elements = document.getElementsByClassName("complete");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var myFunction = function() {
  var attribute = this.id;
  var parent = (attribute.split('_')[0]);
  var myobj = document.getElementById(parent);
  myobj.remove();
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', myFunction, false);
}
var c=4;

function addCode() {
  let newtask = {
    "subjects":document.getElementById("subjects").value,
    "titulo":document.getElementById("titulo").value,
    "deadline":document.getElementById("deadline").value,
    "descript":document.getElementById("descript").value
  };
  const event = new Date(newtask["deadline"]);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  c++;
  document.getElementById("cards").innerHTML +=  `<div class="card-text" id="card-${c}">\n<h2>${newtask["subjects"]}\n</h2>\n<h3>${newtask["titulo"]}</h3>\n<p>${event.toLocaleDateString('es-ES', options).split(',')[1]}</p>\n<div class="complete" id="card-${c}_child"><a>Completado</a></div>\n</div>`;
  closeForm();
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
  }
}

document.getElementById('add').addEventListener("click", addCode);

document.getElementById('add-task').addEventListener("click",openForm);