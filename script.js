const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Latihan Tembang Taman Jurug',
        'name': 'latihan-taman-jurug2.mp4',
        'duration': '2:18',
    },
    {
        'id': 'a2',
        'title': 'Latihan Tembang Pepeling',
        'name': 'latihan-pepeling.mp4',
        'duration': '5:55',
    },
    {
        'id': 'a3',
        'title': 'Cuplikan Latihan Tembang Tombo Ati',
        'name': 'latihan-tombo-ati.mp4',
        'duration': '0:32',
    },
    {
        'id': 'a4',
        'title': 'Cuplikan Latihan Tembang Prau Layar',
        'name': 'latihan-prau-layar.mp4',
        'duration': '0:41',
    },
    {
        'id': 'a5',
        'title': 'Cuplikan Latihan Tembang Gugur Gunung',
        'name': 'latihan-gugur-gunung.mp4',
        'duration': '1:08',
    }

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
