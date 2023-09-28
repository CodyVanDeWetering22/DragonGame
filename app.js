const heroes = [
    {
        name: 'Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        Level: 1
    },
    {
        name: 'Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        level: 1
    }
]

const boss = {
    name: 'zyn',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}




function drawHeroes() {
    console.log('drawHeroes');
    heroes.forEach(hero => {
        const heroElement = document.getElementById(hero.name)

        // const statsElement = heroElement.querySelector()

        heroElement.innerHTML = `<p>${hero.name}</p>
        <p>HP: ${hero.health}</p>
        <p>Damge: ${hero.damage}</p>
        <p>LVL:${hero.level}</p> `
    })
}


function drawBoss() {
    const bossElement = document.getElementById('boss')
    bossElement.innerText = `${boss.name}
    ${boss.health}`
}


function attackBoss() {
    // loop over the heros
    heroes.forEach(hero => {
        // grab each heros damage and subtract this from the bosses health
        boss.health -= hero.damage
    })
    if (boss.health < 0) {
        boss.health = 0
    }

    drawBoss()
}

function heroHPDown() {
    console.log('heroHPDown', heroes);
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0) {
            hero.health = 0
        }
        drawHeroes()
    })
}



drawHeroes()
drawBoss()
heroHPDown()
setInterval(heroHPDown, 5000)



