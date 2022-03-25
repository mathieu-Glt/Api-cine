// création d'un listener au click sur le bouton de recherche
const form = document.querySelector(".form")
console.log(form)
form.addEventListener("submit", onClickSearchMovie)


// création d'un listener au click sur un li, le li n'existe pas au chargement on écoute le document (uniquement jQuery), pour le natif il faut injecter l'eventListener dans la callback direct
