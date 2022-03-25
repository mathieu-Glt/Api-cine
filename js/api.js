// clef api
const API_KEY = '840523a722e0ffc0a860538562e81c5e';
// base url image
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';


// function ajax qui recupèrent tous les film en fonction d'un mot clef
// affichage d'une liste dans une callback directe à l'intérieur
/**
 * 
 * @param {string} inputValue 
 */
function getMovies(inputValue) {
    console.log('getMovies')
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`)
    .then((response)=> response.json())//on indique que notre réponse est en json
    .then((response) =>{
            //ici le then nous retourne notre reponse au format objet
            //on receptionne la réponse (promesse retournée par la requète)
            console.log("fetch getMovies: ", response.results)
            const movies = response.results
            console.log(movies)
            const div = document.querySelector('#list')
            const ul = document.createElement('ul')
            ul.classList.add("test")
            console.log(div)
            for (let index = 0; index < movies.length; index++) {
                const element = movies[index];
                //console.log(element)
                const li = document.createElement('li')
                const linka = document.createElement('a')
                linka.setAttribute('href', '#')
                linka.setAttribute('class', 'link')
                linka.dataset.index = movies[index].id
                linka.innerHTML = element.original_title
                linka.addEventListener("click", onClickShowOneMovie)
                
                li.appendChild(linka)
                ul.appendChild(li)
                
                //console.log(div)

                
            }
            div.appendChild(ul)
        

    })
    .catch((err)=>console.log("Echec de la requète", err))
    
       
    
}

//fonction ajax qui récupère les détails d'un film en fonction de son id
// execute l'affichage dans une callback directe à l'intérieur
//on devra faire une boucle pour afficher la liste des companies
/**
 * 
 * @param {number} id 
 */
function showOneMovie(dataId) {
    console.log('showOneMovie')
    fetch("https://api.themoviedb.org/3/movie/"+dataId+"?api_key=" + API_KEY)
    .then((response)=> response.json())//on indique que notre réponse est en json
    .then((response) => {
        console.log("showOneMovie: ", response)
        //html
        const movie = response
        console.log(movie)
        const div = document.querySelector('#result')

        let img = document.createElement("img")
        img.setAttribute("src", url_img+response.poster_path)
        img.style.width = "250px"

        let vote = document.createElement("p")
        vote.innerHTML = response.vote_average
        
        let popularity = document.createElement("p")
        popularity.innerHTML = response.popularity

        let titleMain = document.createElement("h1")
        titleMain.innerHTML = response.original_title

        let date = document.createElement("h2")
        date.innerHTML = response.release_date

        let syno = document.createElement("p")
        syno.innerHTML = response.overview

        let ul = document.createElement("ul")
        ul.setAttribute("id", "companies")
        for (let i = 0; i < movie.production_companies.length; i++) {
            const element = movie.production_companies[i];
            console.log("compagnie: ", movie.production_companies[i])
            console.log(element.id)
            getCompanyWebSite(element.id)
        }

        div.appendChild(img)
        div.appendChild(vote)
        div.appendChild(popularity)
        div.appendChild(titleMain)
        div.appendChild(date)
        div.appendChild(syno)
        div.appendChild(ul)
        //licom.appendChild(linkacom)
    })
    

    .catch((err)=>console.log("Echec de la requète", err))
            //ici le then nous retourne notre reponse au format objet
            //on receptionne la réponse (promesse retournée par la requète)
          //console.log("fetch", response.results))
}
    
	    


//récupère les infos d'une companie par son id/**
/**
 * 
 * @param {number} id 
 */
function getCompanyWebSite(id) {
    /*fetch("https://api.themoviedb.org/3/company/"+id+"?api_key=" + API_KEY)
    .then((response)=> response.json())//on indique que notre réponse est en json
    .then((response) =>{
        console.log("getCompanyWebSite: ", response)
        //html
            const li = document.createElement('li')
            const linka = document.createElement('a')
            linka.setAttribute('href', response.homepage)
            linka.setAttribute('class', 'link')
            linka.dataset.index = response.id
            linka.innerHTML = response.name
            li.appendChild(linka)
            document.querySelector(".testId").appendChild(li)
        //console.log(response.production_companies)
    }) 
    .catch((err)=>console.log("Echec de la requète", err))
            //ici le then nous retourne notre reponse au format objet
            //on receptionne la réponse (promesse retournée par la requète)
          //console.log("fetch", response.results)


*/
    
}

//callback affichage des infos de la companie /**
/**
 * 
 * @param {string} response 
 */
function displayCompany(response) {
    
}