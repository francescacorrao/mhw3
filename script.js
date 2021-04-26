// crea div serie 
function crea_serie(title, fav, copertina, genre, trama){
    const serie= document.createElement('div');
    serie.classList.add('main');
    const head= document.createElement('div');
    head.classList.add('fb');
    const titolo= document.createElement('h3');
    titolo.textContent =title;
    const stella= document.createElement('img');
    stella.classList.add('stella');
    if(fav){
        stella.src= "preferiti.png";
        stella.addEventListener("click", rimuovi);
    }
    else{
        stella.src= "stella.png";
        stella.addEventListener("click", preferiti);
    }
    head.appendChild(titolo);
    head.appendChild(stella);
    const immagine=document.createElement('img');
    immagine.classList.add('copertina');
    immagine.src = copertina;
    serie.appendChild(head);
    serie.appendChild(immagine);
    if( genre !== null && trama!==null){
        const descrizione= document.createElement('p');
        descrizione.innerHTML=trama;
        descrizione.classList.add('hidden');
        descrizione.classList.add('trama');
        const genere = document.createElement('div');
        genere.textContent=genre;
        const tasto= document.createElement('div');
        tasto.textContent="mostra trama";
        tasto.addEventListener("click", dettagli);
        serie.appendChild(descrizione);
        serie.appendChild(genere);
        serie.appendChild(tasto);
    }
    return serie;
}

//mostra trama 
function dettagli(event){
    const t = event.currentTarget;
    const div= t.parentNode;
    const d= div.querySelector('.trama');
    d.classList.remove('hidden');
    t.removeEventListener("click", dettagli);
    t.textContent="mostra meno";
    t.addEventListener("click", meno);
}

//nascondi trama
function meno(event){
    const t = event.currentTarget;
    const div= t.parentNode;
    const d= div.querySelector('.trama');
    d.classList.add('hidden');
    t.removeEventListener("click", meno);
    t.textContent="mostra trama";
    t.addEventListener("click", dettagli);
}

//aggiungi ai preferiti
function preferiti(event){
    const p= document.querySelector('#pref');
    if(p.classList= 'hidden'){
        p.classList.remove('hidden');
        p.classList.add('fb');
    }
    const t=event.currentTarget;
    t.classList.add('hidden');
    const r= t.parentNode;
    const s=r.parentNode;
    const d= crea_serie(s.querySelector('h3').textContent, true,s.querySelector('.copertina').src, null, null )
    const preferiti= document.querySelector("#preferiti");
    preferiti.appendChild(d);
}

//rimuovi dai preferiti
function rimuovi(event){
    const t = event.currentTarget;
    const p= t.parentNode;
    const r= p.parentNode;
    r.remove();
    const titolo= p.querySelector('h3').textContent;
    let serie = document.querySelectorAll('.main div.fb');
    for(d of serie){
        if(d.querySelector('h3').textContent===titolo){
            const s= d.querySelector('img');
            s.classList.remove('hidden');
            s.addEventListener("click", preferiti);
            break;
        }
    }
    scompari();
}

//scompare la sezione preferiti se è vuota
function scompari(){
    if(document.querySelector("#preferiti div") === null){
        document.querySelector("#pref").classList.add('hidden');
    }

}

//ricerca
function ricerca(event){
    let i=0
    const target= event.currentTarget;    
    const serie = document.querySelectorAll('.serie  div .fb');
        for(d of serie){
            if(!(d.querySelector('h3').textContent.toUpperCase().includes(target.value.toUpperCase())) && target.value!== ''){
            d.parentNode.classList.remove('main');
            d.parentNode.classList.add('hidden');
            }
            else{
            d.parentNode.classList.remove('hidden');
            d.parentNode.classList.add('main');
            i++
            }  
        }
}

//inserimento dinamico
inserisci();


const input= document.querySelector('input');
input.addEventListener('keyup', ricerca);


