const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
let haseBonusLife = true;

chosenMaxLife = 100;
currentMonsterHealth = chosenMaxLife;
currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mood) {
    let maxDamage;
    if (mood === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    }
    else{
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    haseBonusLife = true;
    resetGame(chosenMaxLife);
}

function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && haseBonusLife) {
        haseBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('you would be dead but bonus life saved you');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost');
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You Have A Draw!');
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You Can't Heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click',attackHandler);

strongAttackBtn.addEventListener('click',strongAttackHandler);

healBtn.addEventListener('click',healPlayerHandler);