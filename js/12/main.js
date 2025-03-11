const images = document.querySelectorAll('.image-to-show');
let currentIndex = 0;
let timer;

function showImage(index) {
	images.forEach((img, i) => {
		img.style.display = i === index ? 'block' : 'none';
	});
}

function startCycle() {
	clearInterval(timer);
	timer = setInterval(() => {
		currentIndex = (currentIndex + 1) % images.length;
		showImage(currentIndex);
	}, 10000);
}

showImage(currentIndex);
startCycle();

const stopBtn = document.getElementById('stopBtn');
const resumeBtn = document.getElementById('resumeBtn');

stopBtn.addEventListener('click', () => {
	clearInterval(timer);
});

resumeBtn.addEventListener('click', () => {
	startCycle();
});
