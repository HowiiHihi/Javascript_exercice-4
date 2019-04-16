// Ici le fonction est lié à une action dans le HTMl (clic de souris)
function displayId()
{
  var prenom = document.getElementById("firstname").value;
  var nom = document.getElementById("lastname").value;
  var ville = document.getElementById("city").value;
  alert(`Prénom : ${prenom}
    Nom : ${nom}
    Ville : ${ville}`);
}
