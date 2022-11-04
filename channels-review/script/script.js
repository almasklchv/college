let channelsReview = document.querySelectorAll('.channels-review')
let galleryLink = document.querySelectorAll('.gallery-link');
let galleryPostsFirst = document.querySelector('.gallery-posts.first');
let galleryPostsSecond = document.querySelector('.gallery-posts.second');
let exitBtn = document.querySelectorAll('.x-icon')

function openGalleryPosts(event) {
    if (event.target.classList.contains('first')) {
        galleryPostsFirst.style = '';
        setTimeout(function() {
            for (let i = 0; i < channelsReview.length; i++) {
                channelsReview[i].classList.add('hidden')
            }
            galleryPostsFirst.classList.remove('hidden');
            galleryPostsFirst.classList.add('showed');
        }, 100)
    }

    if (event.target.classList.contains('second')) {
        galleryPostsSecond.style = '';
        setTimeout(function() {
            for (let i = 0; i < channelsReview.length; i++) {
                channelsReview[i].classList.add('hidden')
            }
            galleryPostsSecond.classList.remove('hidden');
            galleryPostsSecond.classList.add('showed');
        }, 100)
    }
}

function closeGalleryPosts() {
    for (let i = 0; i < channelsReview.length; i++) {
        channelsReview[i].classList.remove('hidden')
        channelsReview[i].classList.add('showed');
    }
    galleryPostsFirst.classList.remove('showed');
    galleryPostsFirst.classList.add('hidden');

    galleryPostsSecond.classList.remove('showed');
    galleryPostsSecond.classList.add('hidden');
    
    setTimeout(function() {
        for (let i = 0; i < channelsReview.length; i++) {
            channelsReview[i].classList.remove('showed')
        }
        galleryPostsFirst.style.display = 'none';
        galleryPostsSecond.style.display = 'none';
    }, 100)
}

document.addEventListener('DOMContentLoaded', function(event){
    galleryPostsFirst.style.display = "none";
    galleryPostsSecond.style.display = 'none';
}) 

galleryLink[0].addEventListener("click", function(event) {
    openGalleryPosts(event);
})
galleryLink[1].addEventListener("click", function(event) {
    openGalleryPosts(event);
})

exitBtn[0].addEventListener("click", function(event) {
    closeGalleryPosts();
})
exitBtn[1].addEventListener("click", function(event) {
    closeGalleryPosts();
})