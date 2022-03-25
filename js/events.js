// fonction de callback d'évènement 

// lorsque je clique sur le bouton recherche cette fonction recupère ce qu'il y a 
// dans l'input et déclenche la fonction getMovie en faisans passer la mot clef 
// en argumant

function onClickSearchMovie(e) {
    console.log('onClickSearchMovie')
    //enlève le sale comportement du navigateur
    e.preventDefault()
    //récup la valeur du formulaire
    const inputValue =  document.querySelector('#search').value
    console.log(inputValue)
    //fais apparaitre la liste
    const li = document.querySelector('#list')
    li.classList.remove('hide')
    
    //appel de la fonction de la requète ajax pour afficher la liste
    getMovies(inputValue)
}

//lorsque on clique sur un li on récupère dans cette fonction son data-id
// on déclenche la fonction showOneMovie avec un id en argument

function onClickShowOneMovie(e) {
    e.preventDefault()
    //on récup le data id qui est passé dans le lien de la liste des films
    const dataId = this.dataset.index
    console.log(dataId)
    //on supprime la class hide et on met une width de 30% sur #list
    const li = document.querySelector('#list')
    //li.style.width = "80%"
    liResult = document.querySelector('#result')
    liResult.classList.remove('hide')

    //appel de la fonction de la requète ajax pour afficher un film
    showOneMovie(dataId)
}