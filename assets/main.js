window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

    //image lightbox
    let imageBlocks = document.querySelectorAll('li.image-block')

    imageBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () => {
            block.classList.add("active")

            block.querySelector('aside').onclick = () => {
                console.log("click")
                block.classList.remove("active")
            }
        }
    })


    //video embed lightbox
    let videoEmbedBlocks = document.querySelectorAll('li.video-embed-block')

    videoEmbedBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () => {
            block.classList.add('active')

            block.querySelector('aside').onclick = () => {
                console.log("click")
                block.classList.remove('active')
            }
        }
    })

    //link lightbox
    let linkBlocks = document.querySelectorAll('li.link-block')

    linkBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () => {
            block.classList.add("active")

            block.querySelector('aside').onclick = () => {
                console.log("click")
                block.classList.remove("active")
            }
        }
    })

    //pdf lightbox
    let pdfBlocks = document.querySelectorAll('li.pdf-block')

    pdfBlocks.forEach((block) => {
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