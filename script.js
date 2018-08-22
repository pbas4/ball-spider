// Array of spidered balls - dynamic
var programsArray = [
  {name: 'Spi'},
  {name: 'Spi'},
  {name: 'Spi'},
  {name: 'Spi'},
  {name: 'Spi'}
]

var marker = document.getElementById('marker');

var markerPosition = {
  top: marker.offsetTop,
  left: marker.offsetLeft
}

var wrapper = document.getElementById('wrapper');
var progContainer = document.getElementById('prog-container');

marker.addEventListener('click', function() {

  if (!progContainer) {
    var progrCont = document.createElement('div');
    progrCont.id = 'prog-container'
    progrCont.style.top = markerPosition.top + 'px' 
    progrCont.style.left = markerPosition.left - 136 + 'px'
    wrapper.appendChild(progrCont)

    progContainer = document.getElementById('prog-container');

    var degs = 180 / (programsArray.length + 1);
    programsArray.forEach(function(program, index) {
      createProgramBalls(progContainer, degs, index, program)
    })
  }
})


function createProgramBalls (parent, degs, index, program) {
  var progContainer = document.createElement('div');
  progContainer.className = 'prog-ball-cont'
  progContainer.style.transform = 'rotate(' +  (degs * (index + 1)) + 'deg)'
  parent.appendChild(progContainer)

  var ball = document.createElement('div');
  ball.className = 'prog-ball';
  ball.setAttribute('data-content', program.name);
  ball.style.transform = 'rotate(-' +  (degs * (index + 1)) + 'deg)'
  progContainer.appendChild(ball)
  
  var line = document.createElement('div');
  line.className = 'ball-line'
  progContainer.appendChild(line)
}