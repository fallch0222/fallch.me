

function start(){
    const repeat = document.getElementById('repeatInput').value;
     
    if(repeat < 0 || repeat == null || repeat == undefined || repeat == ""){
        alert('Please enter a valid number');
        return;
    }
    let wins = 0;
    let losses = 0;
    let currentRepeat = 0;
    while (currentRepeat < repeat) {
        const doors = [0, 1, 2];
        const winningDoor = doors[Math.floor(Math.random() * doors.length)];
        const chosenDoor = doors[Math.floor(Math.random() * doors.length)];
        const openedDoor = doors.filter(door => door !== winningDoor && door !== chosenDoor)[0];
        const switchDoor = doors.filter(door => door !== chosenDoor && door !== openedDoor)[0];
        if (switchDoor === winningDoor) {
            wins++;
        } else {
            losses++;
        }
        currentRepeat++;
    }

    console.log(`Wins: ${wins}`, `Losses: ${losses}`, `Win Rate: ${wins / repeat * 100}%`,repeat);
    document.getElementById('total repeat').innerHTML = `총 반복횟수: ${repeat}`;
    document.getElementById('change win').innerHTML = '바꾸는것이 유리한 경우: ' + wins;
    document.getElementById('change lose').innerHTML = '바꾸는것이 불리한 경우: ' + losses;
    document.getElementById('Percent').innerHTML = '바꾸는것이 유리한 확률: ' + (wins / repeat) * 100 + '%';
}

