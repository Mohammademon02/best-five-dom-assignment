function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

document.getElementById('calculate-player-cost').addEventListener('click', function(){
    const costPerPlayer = getElementValueById('cost-per-player');
    const selectedPlayers = document.querySelectorAll('#selected-players li');
    const totalPlayerCost = selectedPlayers.length * costPerPlayer;
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = totalPlayerCost;
})

document.getElementById('calculate-total').addEventListener('click', function(){
    const managerCost = getElementValueById('manager-cost');
    const coachCost = getElementValueById('coach-cost');
    const playerExpensesString = document.getElementById('player-expenses').innerText; 
    const playerExpenses = parseFloat(playerExpensesString)
    const totalCost = playerExpenses + managerCost + coachCost;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;
})