////////////////////////////////////////
// Get the THANK YOU pop up on SUBMIT //
////////////////////////////////////////
var submit = document.getElementById("submit");
submit.onclick = function() {
  submitFunction();
};

function submitFunction() {
  var body = document.getElementById("body");
  var agree = document.getElementById("agree");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var postalCode = document.getElementById("postal-code");
  var opacity = document.getElementById("opacity");
  var popUp = document.getElementById('pop-up');
  if(!agree.checkValidity()) {
    document.getElementById("warn-agree").innerHTML = agree.validationMessage;
  } else if(!name.checkValidity()) {
    document.getElementById("warn-name").innerHTML = name.validationMessage;
  } else if(!email.checkValidity()) {
    document.getElementById("warn-email").innerHTML = email.validationMessage;
  } else if(!postalCode.checkValidity()) {
    document.getElementById("warn-postal-code").innerHTML = postalCode.validationMessage;
  } else {
    popUp.style.display = "block";
    opacity.style.display = "block";
    popUp.classList.add('pop-up-animation');
    event.preventDefault();
  }
}

/////////////////////////////////////////
////////////#CHECKBOX_0_5_OTHERS////////////
/////////////////////////////////////////
var others = document.getElementById("checkbox-0-5");
others.onclick = function() {
  othersFunction();
};

function othersFunction() {
  if(document.getElementById("checkbox-0-5").checked) {
     document.getElementById("checkbox-0-5-others").style.display = "block";
  } else {
    document.getElementById("checkbox-0-5-others").style.display = "none";
  }
}

/////////////////////////////////////////
////////////#AGREE_WARNING///////////////
/////////////////////////////////////////
var agree = document.getElementById("agree");
agree.onclick = function() {
  agreeWarnFunction();
};

function agreeWarnFunction() {
  var agree = document.getElementById("agree");
  if(document.getElementById("agree").checked) {
     document.getElementById("warn-agree").innerHTML = "";
  } else {
    document.getElementById("warn-agree").innerHTML = agree.validationMessage;
  }
}

/////////////////////////////////////////////////
//////////////#INPUT_WARNINGS////////////////////
/////////////////////////////////////////////////

//_COULD_NOT_UNDERSTAND: WOULD_ADD_LATER_//

///////////////////////////////////////////////////

///////////////////////////////////////////
//////////#BANNER_IMAGE_CHANGE/////////////
//////////////////////////////////////////


var images = new Array();
images[0] = "https://res.cloudinary.com/billu/image/upload/v1531664327/myFolder/pexels-photo-314726.jpg";
images[1] = "https://res.cloudinary.com/billu/image/upload/v1531665109/myFolder/wing-plane-flying-airplane-62623.jpg";
images[2] = "https://res.cloudinary.com/billu/image/upload/v1531665118/myFolder/pexels-photo-443430.jpg";
images[3] = "https://res.cloudinary.com/billu/image/upload/v1531680464/myFolder/plane.jpg";
images[4] = "https://res.cloudinary.com/billu/image/upload/v1531665124/myFolder/pexels-photo-730778.jpg";

var imgCount = 0;

function changeBannerImage() {
	document.getElementById("banner-image").src = images[imgCount];
	if(imgCount < 5) {
		imgCount = imgCount + 1;
	} else {
		imgCount = 0;
	}
}

window.onload = function() {
	setInterval(function(){changeBannerImage()},3000);
}
