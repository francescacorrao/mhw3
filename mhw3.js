
function OnResponse(response){
    return response.json();
}
function OnJson_r(json){
    const div_preferite = document.querySelector('#most_watched');
    const elem= crea_serie(json.name, false,json.image.medium,json.genres[0],json.summary);
    div_preferite.appendChild(elem);
}
function OnJson(json){
    for(let i=0; i<10;i++){
        serie= json.items[i];
        const search= encodeURIComponent(serie.title);
        const url2='http://api.tvmaze.com/singlesearch/shows?q='+search;
        fetch(url2).then(OnResponse).then(OnJson_r);
    }
}

const url = 'https://imdb-api.com/en/API/MostPopularTVs/k_mux9c11k'
fetch(url).then(OnResponse).then(OnJson);
