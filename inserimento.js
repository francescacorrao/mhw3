//inserimento serie 
function OnResponse(response){
    return response.json();
}
function OnJsoni(json){
    const div = document.querySelector( '.serie');
    const serie = crea_serie(json.name,false, json.image.medium, json.genres[1],json.summary);
    div.appendChild(serie);
}


function inserisci(){
    const url= 'http://api.tvmaze.com/shows/'
    for(i=1; i<20; i++){
        if(i===17){
            i++;
            i--;
        }
        else
        fetch(url+i).then(OnResponse).then(OnJsoni);    
    }
        
}