let subscribers = document.querySelector("#subscriberValue");
let views = document.querySelector("#viewsValue");
let videos = document.querySelector("#totalVideos");
let subBar = document.querySelector("#sub-bar")
let viewBar = document.querySelector("#view-bar")



let key = "AIzaSyAzNAnCoQZKMQ4CCmgXtHbrjd1_tMYcW8Y";
let userID = "UCqtwfQcd6OKGAaM0fcudaJA";

    // goto google dev
fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${userID}&key=${key}`).then(response =>{
        return response.json();
}).then(data =>{
    // console.log(data);
    if(data.pageInfo.totalResults > 0){
        errors.style.display ="none";
        subscribers.innerText = data.items[0].statistics.subscriberCount;
        videos.innerText = data.items[0].statistics.videoCount;
        views.innerText = data.items[0].statistics.viewCount;
    }

    for (i = 0; i < 1000; i++) {
        if (data.items[0].statistics.subscriberCount > i) {
            subBar.style.background = `linear-gradient(to right, #2B9F2F calc(${data.items[0].statistics.subscriberCount}% / 10), #cccccc calc(${data.items[0].statistics.subscriberCount}% / 10)`
        }
    }

    for (i = 0; i < 1000; i++) {
        if (data.items[0].statistics.subscriberCount == 1000) {
            subBar.style.background = "#2B9F2F"
            subscribers.innerText = "1,000 - \u2713"
        }
    }

    for (a = 0; a < 50000; a++) {
        if (data.items[0].statistics.viewCount > a) {
            viewBar.style.background = `linear-gradient(to right, #2B9F2F calc(${data.items[0].statistics.viewCount}% / 500), #cccccc calc(${data.items[0].statistics.viewCount}% / 500)`
        }
    }

    for (a = 0; a < 50000; a++) {
        if (data.items[0].statistics.viewCount == 50000) {
            viewBar.style.background = "#2B9F2F"
            views.innerText = "50,000 - \u2713"
        }
    }
    
})

