window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

    //video embed lightbox
    let videoEmbedBlocks = document.querySelectorAll('li.video-embed-block')

    videoEmbedBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () => {
            block.classList.add("active")

            block.querySelector('aside').onclick = () => {
                console.log("click")
                block.classList.remove("active")
            }
        }
    })

    //play and pause button
    
    var track = document.getElementById('track');

    var controlBtn = document.getElementById('play-pause');
    
    function playPause() {
        if (track.paused) {
            track.play();
            //controlBtn.textContent = "Pause";
            controlBtn.className = "pause";
        } else { 
            track.pause();
             //controlBtn.textContent = "Play";
            controlBtn.className = "play";
        }
    }
    
    controlBtn.addEventListener("click", playPause);
    track.addEventListener("ended", function() {
      controlBtn.className = "play";
    });

    //

}