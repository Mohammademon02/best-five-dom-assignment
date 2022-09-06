

function disableSelectButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
    document.getElementById(btnId).style.backgroundColor ='gray';
}




document.getElementById('added-messi').addEventListener('click', function(){
    const selectedPlayersLenght = document.querySelectorAll('#selected-players li');
    if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('messi');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-messi');
    }
    else{
        alert('You exceeded your selecting limit.')
    }

})



document.getElementById('added-neymar').addEventListener('click', function(){
    const selectedPlayersLenght = document.querySelectorAll('#selected-players li')
    if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('neymar');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-neymar');
    }
    else{
        alert('You are exceeded your selectiong limit.')
    }
})



document.getElementById('added-mbappe').addEventListener('click', function(){
    const selectedPlayersLenght = document.querySelectorAll('#selected-players li');
    if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('mbappe');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-mbappe');
    }
    else{
        alert('You are exceeded your selectiong limit.')
    }
})



document.getElementById('added-machado').addEventListener('click', function(){
    const selectedPlayersLenght = document.querySelectorAll('#selected-players li');
    if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('machado');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-machado');
    }
    else{
        alert('You are exceeded your selectiong limit.')
    }
})


document.getElementById('added-ramos').addEventListener('click', function(){
    const selectedPlayersLenght = document.querySelectorAll('#selected-players li');
    if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('ramos');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-ramos');
    }
    else{
        alert('You are exceeded your selectiong limit.')
    }
})



document.getElementById('added-sanches').addEventListener('click', function(){
   const selectedPlayersLenght = document.querySelectorAll('#selected-players li');
   if(selectedPlayersLenght.length < 5){
        const element = document.getElementById('sanches');
        const elementValue = element.innerText;
        const selectedPlayers = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = elementValue;
        selectedPlayers.appendChild(li);
        disableSelectButton('added-sanches');
   }
   else{
    alert('You are exceeded your selecting limit')
   }
})


