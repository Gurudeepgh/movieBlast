//const APILINK = 'https://api.themoviedb.org/3/movie/550?api_key=922a0728435db6fa8298d92e11beddf6';
//const IMG_PATH='https://image.tmdb.org/t/p/w1288';
//const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=922a0728435db6fa8298d92e11beddf6&query=";
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = '${element.title}';
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
            
        });
    });
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
    main.innerHTML='';
    const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
      search.value = "";
  }
});
    
