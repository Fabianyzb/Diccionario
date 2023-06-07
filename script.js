const wrapper = document.querySelector('.wrapper'),
searchInput = wrapper.querySelector('input');
infoText = wrapper.querySelector('.info-text');

//data function
function data(result, word){
    if(result.title){ //if api returns the message of can't find word
        infoText.innerHTML = `Can't find de meaning of <span>'${word}'</span>. Please, try to search for another word.`;
    } else {
        console.log(result);
        wrapper.classList.add('active');
        let definitions = result[0].meanings[0].definitions[0,1],
        phonetics = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}/`;

        //passing the particular response data to a particular html element
        document.querySelector('.word p').innerText = result[0].word;
        document.querySelector('.word span').innerText = result[0].word;
        document.querySelector('.meaning span').innerText = definitions.definitions;
        document.querySelector('.example span').innerText = definitions.example;   
   
   
    }
}

//fetch api function
function fetchApi(word){
    infoText.style.color = '#000'
    infoText.innerHTML = `Searching the meaning of <span>'${word}'</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // fetching api response  and returning it with parsing into js  obj and in another then
    // method calling  data  function with  passing api  response  and  searched  word  as an argument 
    fetch(url).then(res => res.json()).then(result => data(result, word));
}

searchInput.addEventListener('keyup', e =>{
    if(e.key === 'Enter' && e.target.value){
        fetchApi(e.target.value);
    }
})