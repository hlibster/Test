var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let button = document.getElementById("generate");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

function setRandomBackground() {
	let a = getRandomColor();
	let b = getRandomColor();
	color1.value = a;
	color2.value = b;
	body.style.background = 
	"linear-gradient(to right, " 
	+ a 
	+ ", " 
	+ b 
	+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandomBackground);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
body.onload = setRandomBackground();

console.log(navigator);

// var OSName="Unknown OS";
// if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
// if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
// if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
// if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

// document.write('Your OS: '+OSName);


function getOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    if (/Windows XP|Windows NT 6.0|Windows NT 6.1|Windows NT 6.2|WOW64|Windows 10.0|Windows NT 10.0/.test(userAgent)) {
        return "Windows";
    }

	if (/Linux|X11/.test(userAgent)) {
        return "Linux";
    }

    if (/Mac_PowerPC|Macintosh/.test(userAgent)) {
        return "MacOS";
    }

    return "unknown";
}

document.write(getScreenSize() + "<br/>" +  getAvaliableScreenSize());



function getScreenSize() {
	let ratio = window.devicePixelRatio || 1;
	let width = screen.width*ratio;	
	let height = screen.height*ratio;	
	let screenSize = (width + "*" + height);
	return screenSize;
}
function getAvaliableScreenSize() {
	let ratio = window.devicePixelRatio || 1;
	let width = screen.availWidth*ratio;	
	let height = screen.availHeight*ratio;	
	let screenSize = (width + "*" + height);
	return screenSize;
}