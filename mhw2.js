
function createArtist(artistImage,artistName, artistDescription){

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const name = document.createElement('h2');
    name.textContent = artistName;

    const image = document.createElement('img');
    image.src = artistImage;

    const descr = document.createElement('p');
    descr.textContent = artistDescription;

    modalContent.appendChild(image);
    modalContent.appendChild(name);
    modalContent.appendChild(descr);

   
    modalView.appendChild(modalContent);
}

function onArtistClick(event){
    const artist= event.currentTarget;
    console.log('Hai cliccato su:', artist.textContent);
    
    const artistName= artist.querySelector('h2').textContent;
    const artistImage= artist.querySelector('img').src;
    const artistDescription= artist.querySelector('p').textContent;

    createArtist(artistImage,artistName, artistDescription);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove('hidden');
}

function onModalClick(event) {
    document.body.classList.remove('no-scroll');  
    if (event.target === modalView) { 
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
    }
}


const artistList = document.querySelectorAll('.artista');
console.log('Artisti trovati:', artistList);

for (let i = 0; i < artistList.length; i++) {
    artistList[i].addEventListener('click', onArtistClick);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);


console.log("JavaScript caricato correttamente!");


 


function onBlur(event) {
    const testo = event.target;
    if (testo.value === '') {
      testo.value = testo.dataset.text;  
    }
    
    const image=document.querySelector('#storage img');
    image.src='icons8-storage-24.png';
  }
  

  function onFocus(event) {
    const testo = event.target;
   
    if (testo.value === testo.dataset.text) {
      testo.value = '';  
    }
    const image=document.querySelector('#storage img');
    image.src='storage-white.png';
  }

const testo = document.getElementById('search-bar');
testo.value=testo.dataset.text;


testo.addEventListener('blur', onBlur);
testo.addEventListener('focus', onFocus);



function onPlaylistClick(event){
    const Playlistview= event.currentTarget;
    console.log('Hai cliccato su:', Playlistview.textContent);

    const create=document.querySelector('#creaPlaylist');
    create.classList.remove('hidden');
}

function onCloseClick(event){
    const create=document.querySelector('#creaPlaylist');
    create.classList.add('hidden');
}


const Playlistview=document.querySelector('#playlist');
Playlistview.addEventListener('click', onPlaylistClick);

const close=document.querySelector('#close');
close.addEventListener('click', onCloseClick);



function etichettaOpen(event){
    
    const etich=document.createElement('div');
    etich.classList.add('etichetta');

    const text = document.createElement('p');
    text.textContent= home.dataset.text;

    etich.appendChild(text);
    document.body.appendChild(etich);
}

function etichettaClose(event){
    const etich=document.querySelector('.etichetta');
    etich.classList.remove('etichetta');

    etich.innerHTML='';
}

const home=document.getElementById('house');
home.addEventListener('mouseover', etichettaOpen);
home.addEventListener('mouseout', etichettaClose);



function mostraTutto(){
    const mostra=document.querySelector('#mostra-tutto');
    console.log('Hai cliccato su:', comp.textContent);
    mostra.classList.remove('nascondi');
}

function nonMostraTutto(event){
    const mostra=document.querySelector('#mostra-tutto');
    console.log('Hai cliccato su:', comp.textContent);
    mostra.classList.add('nascondi');
}

const comp=document.querySelector('.title h2');
comp.addEventListener('click', mostraTutto);

const noComp=document.querySelector('#chiudi-mostra-tutto');
noComp.addEventListener('click', nonMostraTutto);
