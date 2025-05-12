let btn = document.getElementById("messagebtn");
let title = document.getElementById("title");
let Message = document.getElementById("Message");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let tval = title.value;
    let mval = Message.value;
    window.location.href = `mailto:engsafaamagdy1024@gmail.com?subject=${tval}&body=${mval}`;


});
let darkmodebtn = document.getElementById('darkModeToggle');

darkmodebtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Optional: Save mode to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkmodebtn.innerText = "🌕";
    } else {
        localStorage.setItem('theme', 'light');
        darkmodebtn.innerText = "🌙";

    }
});

// Load user's preference
window.addEventListener('load', function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video[data-src]");

    const loadVideo = (video) => {
        const source = document.createElement('source');
        source.src = video.dataset.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadVideo(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    videos.forEach(video => {
        observer.observe(video);
    });
});

