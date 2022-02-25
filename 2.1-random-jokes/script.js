let button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMConteneloaded', getJoke);

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch ('https://icanhazdadjoke.com', 
        {headers: {
            'Accept': 'application/json'
        }
        });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}


let audio = document.getElementById("audio");

button.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});