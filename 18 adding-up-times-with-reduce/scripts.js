const timeNodes = document.querySelectorAll('[data-time]');

// const seconds = Array.from(timeNodes)
//                 .map(node => node.dataset.time)
//                 .map(timeCode => {
//                     const [mins, secs] = timeCode.split(':').map(parseFloat);
//                     return (mins * 60) + secs;
//                 })
//                 .reduce((total, vidSeconds) => total + vidSeconds);

const seconds = Array.from(timeNodes)
                .reduce((total, node) => {
                    const timeCode = node.dataset.time;
                    const [mins, secs] = timeCode.split(':').map(parseFloat);
                    const vidSeconds = (mins * 60) + secs
                    return total + vidSeconds;
                }, 0);


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, minutes, secondsLeft);