let imgs = document.querySelectorAll('#imageGrid img');
let newImage = Array.from(imgs);
console.log(newImage)
const imgArray = [
    'assets/images/Rectangle%2020-1.png',
    'assets/images/Rectangle%2020-2.png',
    'assets/images/Rectangle%2020-3.png',
    'assets/images/Rectangle%2020-4.png',
    'assets/images/Rectangle%2020-5.png',
    'assets/images/Rectangle%2020-6.png',
    'assets/images/Rectangle%2020-7.png',
    'assets/images/Rectangle%2020-8.png',
    'assets/images/Rectangle%20.png'
];
let timed = setInterval(() => {
    for (let i = 0; i <= newImage.length; i++) {
        if (i === 8) {
            break;
        }
        newImage[i].src = imgArray[Math.floor(Math.random() * newImage.length)];
    }
}, 5000);