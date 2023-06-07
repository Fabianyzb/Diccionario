const wrapper = document.querySelector('.wrapper'),
searchInput = wrapper.querySelector('input');
infoText = wrapper.querySelector('.info-text');

//fetch api function
function fetchApi(word){
    infoText.innerHTML = `Searching the meaning of <span>'${word}'</span>`;
}

searchInput.addEventListener('keyup', e =>{
    if(e.key === 'Enter' && e.target.value){
        fetchApi(e.target.value);
    }
})