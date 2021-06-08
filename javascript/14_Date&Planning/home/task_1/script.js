{
    function clock() {
        function Update1Sec(){
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            if (seconds < 10) seconds = '0' + seconds;

            let clock = hours + ':' + minutes + ':' + seconds;
            document.getElementById('clock').innerHTML = clock;
        }

        function Update30Min(){
            let date = new Date();
            let day = date.getDate();
            let mounth = date.getMonth() + 1;
            let year = date.getFullYear();
            if (mounth < 10) mounth = '0' + mounth;
            if (day < 10) day = '0' + day; 

            let dateNow = day + '.' + mounth + '.' + year;
            document.getElementById('date').innerHTML = dateNow;
        }

        Update30Min();
        Update1Sec();

        window.setInterval(Update1Sec,1000);
        window.setInterval(Update30Min,60000)
    }
    clock();
}





{
    let loopWindow = document.getElementById('loop-window');
    const secundomer = document.getElementById('secundomer');
    let counter = 0;
    let timer;

    const start = () => {
        if(timer) clearInterval(timer);

        function Timer(){
            counter += 10;
            let dateTimer = new Date(counter);

            let hours = ('0' + dateTimer.getUTCHours()).slice(-2);
            let minutes = ('0' + dateTimer.getUTCMinutes()).slice(-2);
            let seconds = ('0' + dateTimer.getUTCSeconds()).slice(-2);
            let milliseconds = ('0' + dateTimer.getUTCMilliseconds()).slice(-3,-1);

            secundomer.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
            
        }
        timer = setInterval(Timer,10);
    };

    const paused = () => {
        clearInterval(timer);
    };

    const reset = () => {
        clearInterval(timer);
        counter = 0;
        secundomer.innerHTML = '00:00:00:00';
        let loopItems = document.querySelectorAll('.loop__item');
        for (let loopItem of loopItems) {
            loopItem.remove();
        }
    };

    const loop = () => {
        let string = document.createElement('p');
        let secundomer = document.getElementById('secundomer');
        let loopItems = document.querySelectorAll('.loop__item');
        string.innerHTML = secundomer.innerHTML;
        string.classList.add('loop__item');
        loopWindow.append(string);
        
        if (loopItems.length >= 5) {
            loopItems[0].remove();
        }
    }

    document.addEventListener('click', (e) => {
        const element = e.target;
        if (element.id === 'start') start();
        if (element.id === 'paused') paused();
        if (element.id === 'reset') reset();
        if (element.id === 'loop') loop();
    });

}








{
let timerText = document.getElementById('timer__set-time');

document.addEventListener('click', (e) => {
        const element = e.target;
        let counter = +timerText.textContent;
        if (element.id === 'plus') {
            timerText.textContent =  counter + 1;
            
        };
        if (element.id === 'minus') {
            timerText.textContent =  counter - 1;
        };

        if (element.id === 'timer__start') {
            setInterval(counts(), 1000);
        };
        
      
    });
    let minutesLeft = +timerText.textContent;
    let date = new Date('Jan 1 2022 00:'+ minutesLeft +':00');


    function counts() {
        let now = new Date('Jan 1 2022 00:00:01');
        let gap = date - now;
        console.log(Math.floor(gap / 1000) % 60 !== 0);
        while (Math.floor(gap / 1000) % 60 !== 0) {
            
            console.log(gap);

        
            let minutes = Math.floor(gap / 1000 / 60) % 60;
            let seconds = Math.floor(gap / 1000) % 60;
        
            if (minutes < 10) minutes = '0' + minutes;
            if (seconds < 10) seconds = '0' + seconds;

            document.getElementById('timer__text').innerHTML = minutes + ':' + seconds;
        }
       
    }
    
}
