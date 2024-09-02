const hourhand = document.querySelector(`.hour-hand`);
const minuteshand = document.querySelector(`.minute-hand`);
const secondshand = document.querySelector(`.seconds-hand`);

function updateclock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsdegrees = ((seconds / 60) * 360) + 90;
    secondshand.style.transform = `rotate(${secondsdegrees}deg)`;

    const minutesdegrees = ((minutes / 60) * 360) + 90;
    minuteshand.style.transform = `rotate(${minutesdegrees}deg)`;

    const hourdegrees = ((hours % 12) / 12 * 360) + (minutes / 60 * 30) + 90;
    hourhand.style.transform = `rotate(${hourdegrees}deg)`;
}

updateclock();
setInterval(updateclock, 1000);
