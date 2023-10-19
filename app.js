let buttons = document.querySelectorAll('.btn');
let right = buttons[0];
let left = buttons[1];
let width = document.documentElement.clientWidth;
let box = document.getElementsByClassName('box')[0];



const goRight = () => {
	box.style.left = width - 100 + "px";
}

const goLeft = () => {
	box.style.transition = "1s";
    box.style.left = '5px';
}

goLeft();

window.addEventListener('resize', function(){
	let position = parseInt(box.style.left);
	width = document.documentElement.clientWidth;
  if(position + 100 > width){
  	box.style.transition = "unset";
  	goRight();
  }
  if(width <= 100){
  	goLeft();
    box.style.transition = "unset";
  }
})


right.addEventListener('click', function () {
			box.style.transition = "1s";
      goRight();
    }
)


left.addEventListener('click', function () {
		goLeft();
  }
)
