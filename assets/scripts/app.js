const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

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
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost');
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You Have A Draw!');
    }
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG ATTACK');
}

attackBtn.addEventListener('click',attackHandler);

strongAttackBtn.addEventListener('click',strongAttackHandler);