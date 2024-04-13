var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to "+ video.autoplay)
	console.log("loop is set to "+ video.loop)

});

// play and volume
// var volumeSpan = document.getElementById('volume');
// document.querySelector("#play").addEventListener("click", function() {
// 	video.play();
// 	console.log("Play Video");
// 	volumeSpan.textContent = (video.volume * 100).toFixed(0) + "%";
// 	volumeSpan.textContent = video.volume * 100 + "%";
// });

var volumeSpan = document.getElementById('volume');
var slider = document.getElementById("slider");

slider.addEventListener("input", function() {
    video.volume = slider.value / 100;
    volumeSpan.textContent = (slider.value) + "%";
    console.log("Volume: " + volumeSpan.textContent);
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Play Video");
});

// pause.

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// volume

// var volumeSpan = document.getElementById("volume");
//     var slider = document.getElementById("slider");

//     slider.addEventListener("input", function() {
//         video.volume = slider.value / 100;
//         volumeSpan.textContent = slider.value + "%";
// });

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("New speed:", video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("New speed:", video.playbackRate);
});

// skip ahead
document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Back to the start");
	} else {
		video.currentTime += 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is", video.currentTime.toFixed(5));
	
});

// mute
var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
		console.log("Unmute");
	} else {
		video.muted = true;
		muteButton.textContent = "Unmute";
		console.log("Mute");
	}
});

// volume slider
var slider = document.getElementById('slider');
slider.addEventListener('input', function () {
	video.volume = this.value / 100;
	volumeSpan.textContent = video.volume * 100 + '%';
});

// old school
var vintageButton = document.getElementById("vintage");
    vintageButton.addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    var originalButton = document.getElementById("orig");
    originalButton.addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

// original
var originalButton = document.getElementById("orig");
originalButton.addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
