let topLight = document.getElementById('top_light');
let middleLight = document.getElementById('middle_light');
let bottomLight = document.getElementById('bottom_light');
let buttonRed = document.getElementById('red');
let buttonYellow = document.getElementById('yellow');
let buttonGreen = document.getElementById('green');

buttonRed.onclick = () => {
  topLight.style.backgroundColor = 'red';
  middleLight.style.backgroundColor = '';
  bottomLight.style.backgroundColor = '';
};

buttonYellow.onclick = () => {
  topLight.style.backgroundColor = '';
  middleLight.style.backgroundColor = 'yellow';
  bottomLight.style.backgroundColor = '';
};

buttonGreen.onclick = () => {
  topLight.style.backgroundColor = '';
  middleLight.style.backgroundColor = '';
  bottomLight.style.backgroundColor = 'green';
};
