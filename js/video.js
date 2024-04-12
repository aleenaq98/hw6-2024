var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to"+ video.autoplay)
	console.log("loop is set to"+ video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

// pause.

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
} );

// volume

var volumeSpan = document.getElementById("volume");
    var slider = document.getElementById("slider");

    slider.addEventListener("input", function() {
        video.volume = slider.value / 100;
        volumeSpan.textContent = slider.value + "%";
});

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
document.querySelector("#skip").addEventListener("click", function() {
	if (!video.paused && !video.ended) {
		var newTime = video.currentTime + 10;
		if (newTime > video.duration) {
			newTime = video.duration;
		}
		video.currentTime = newTime;
		console.log("Current location:", video.currentTime);
	} else if (video.ended) {
		video.currentTime = 0;
		console.log("Current location:", video.currentTime);
	}
});

// mute
var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
	} else {
		video.muted = true;
		muteButton.textContent = "Unmute";
	}
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
