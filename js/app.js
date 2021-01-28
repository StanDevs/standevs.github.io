//menu burger
var burger = document.getElementById("burger");
burger.onclick = function() {
	if(burger.classList.contains("burgerIsClicked")){
		burger.classList.remove("burgerIsClicked");
	}else{
		burger.classList.add("burgerIsClicked");
	}
}

var linkBurger = document.querySelectorAll("nav a");
for(var i = 0 ; i < linkBurger.length ; i++){
	linkBurger[i].onclick = function(i){
		if(burger.classList.contains("burgerIsClicked")){
			burger.classList.remove("burgerIsClicked");
		}
	}
}


//intersection observer
const ratio = .8

const options = {
	root: null,
	rootMargin:'0px',
	threshold: ratio
}

const handleIntersect = function(entries, observer){
	entries.forEach(function (entry){
		if(entry.intersectionRatio >= ratio){
			entry.target.classList.remove('notVisible')
			observer.unobserve(entry.target)
		}

	})
}

const observer = new IntersectionObserver(handleIntersect, options)

document.querySelectorAll('section .container').forEach(function(r){
	r.classList.add('notVisible')
	observer.observe(r)
})


//scroll top button
const scrollTop = document.getElementById("ScrollTop")
scrollTop.onclick= function(){
	window.scrollTo({top:0})
}
scrollTop.style.opacity="0"
function btnScrollTopAppear(){
	var y = window.scrollY;
	if (y >= 300) {
		scrollTop.style.opacity = "1"
	} else {
		scrollTop.style.opacity = "0"
	}
}
window.addEventListener("scroll", btnScrollTopAppear);


//cursor
document.querySelector('*').style.cursor="none";
document.querySelectorAll('nav ul li a').forEach(cursor =>{
	cursor.style.cursor = "none";
})
document.querySelectorAll('a').forEach(cursor =>{
	cursor.style.cursor = "none";
})
document.getElementById('ScrollTop').style.cursor="none";
document.querySelector('body').addEventListener('mousemove', e=>{
	const cursor = document.getElementById("cursor")
	cursor.style.top = e.clientY+"px"
	cursor.style.left = e.clientX+"px"
})




// remove fragment as much as it can go without adding an entry in browser history:
window.location.replace("#");

// slice off the remaining '#' in HTML5:
if (typeof window.history.replaceState == 'function') {
	history.replaceState({}, '', window.location.href.slice(0, -1));
}


var i = 0;
var txt = 'Étudiant en DUT informatique'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titre").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("titre").innerHTML="";
typeWriter();
