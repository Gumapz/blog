const header = document.querySelector("header")

window.addEventListener('scroll', ()=>{
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navigation = document.querySelector('.navigation');

    menuIcon.classList.toggle('open');
    navigation.classList.toggle('open');
}


// blog

var dropdown2 = document.getElementById("dropdown2") 
var dropdown1 = document.getElementById("dropdown1")

function tonggleButton1(){
    
    if (dropdown1.classList.contains("tab-image")){
        dropdown1.classList.remove("tab-image")
        dropdown2.classList.add("tab-video")
        // adjust
        var image = document.getElementById("tab-image")
        dropdown1.style.top = (image.offsetTop + image.offsetHeight)+ "px";
        dropdown1.style.left = image.offsetLeft + "px";
    }else{
        dropdown1.classList.add("tab-image")
    }
}

function tonggleButton2(){
    
    if (dropdown2.classList.contains("tab-video")){
        dropdown2.classList.remove("tab-video")
        dropdown1.classList.add("tab-image")
        // adjust
        var video = document.getElementById("tab-video")
        dropdown2.style.top = (video.offsetTop + video.offsetHeight)+ "px";
        dropdown2.style.left = video.offsetLeft + "px";
    }else{
        dropdown2.classList.add("tab-video")
    }
}


// Event listener for section buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sectionBtn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Hide all sections
        document.querySelectorAll('.blog-page').forEach(function(section) {
          section.classList.remove('active');
        });
        // Display the selected section
        dropdown1.classList.add("tab-image")
        dropdown2.classList.add("tab-video")
        document.getElementById(this.getAttribute('data-section')).classList.add('active');
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function () {
        var videos = document.querySelectorAll('.blo .vd video');
        var currentVideo = null;

        videos.forEach(function(video) {
            video.addEventListener('play', function () {
                // Pause the previously playing video
                if (currentVideo !== null && currentVideo !== video && !currentVideo.paused) {
                    currentVideo.pause();
                }
                currentVideo = video;
            });
        });
    });




    document.addEventListener('DOMContentLoaded', () => {
        const likeBtns = document.querySelectorAll('.like i.bx-like');
        const dislikeBtns = document.querySelectorAll('.like i.bx-dislike');
        const likeCounts = document.querySelectorAll('.likeCount');
        const dislikeCounts = document.querySelectorAll('.dislikeCount');
    
        likeBtns.forEach((likeBtn, index) => {
            let likeCounter = 0;
            let dislikeCounter = 0;
    
            likeBtn.addEventListener('click', () => {
                if (!likeBtn.classList.contains('clicked')) {
                    likeBtn.classList.add('clicked');
                    dislikeBtns[index].classList.remove('clicked');
                    likeCounter++;
                    dislikeCounter = Math.max(0, dislikeCounter - 1);
                    updateCounters(index);
                } else {
                    likeBtn.classList.remove('clicked');
                    likeCounter--;
                    updateCounters(index);
                }
            });
    
            dislikeBtns[index].addEventListener('click', () => {
                if (!dislikeBtns[index].classList.contains('clicked')) {
                    dislikeBtns[index].classList.add('clicked');
                    likeBtn.classList.remove('clicked');
                    dislikeCounter++;
                    likeCounter = Math.max(0, likeCounter - 1);
                    updateCounters(index);
                } else {
                    dislikeBtns[index].classList.remove('clicked');
                    dislikeCounter--;
                    updateCounters(index);
                }
            });
    
            function updateCounters(index) {
                likeCounts[index].textContent = likeCounter;
                dislikeCounts[index].textContent = dislikeCounter;
            }
        });
    });
    
    