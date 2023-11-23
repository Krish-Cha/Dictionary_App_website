let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (serachValue) =>{
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${serachValue}`);
    let jsonData = await data.json();

    document.querySelector(".text").innerHTML="";
    let div=document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=
            `<h2>Word : <span>${jsonData[0].word}</span></h2>
            <p></p>
            <p>Parts of speech : <span>${jsonData[0].meanings[0].partOfSpeech}</span></p>
            <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms : <span>${jsonData[0].meanings[0].synonyms}</span></p>
            <p>Antonyms : <span>${jsonData[0].meanings[0].antonyms}</span></p>
           
            <a href=${jsonData[0].sourceUrls[0]} target="_blank">Read More</a>`
    document.querySelector(".text").appendChild(div);
    console.log(jsonData);
    console.log (jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition);
}
searchBtn.addEventListener("click",function(){
    let serachValue = searchInput.value;
    if(serachValue == ""){
        alert("First You Enter the word");
    }
    else{
        getData(serachValue)
    }
})