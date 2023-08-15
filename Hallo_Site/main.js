const bMore= document.querySelector(".more");
const bMenu= document.querySelector(`#bmenu`);
const mobileMenu= document.querySelector(`.links`);
const moreMenu= document.querySelector(`.menu`);
const linksMobile= document.querySelectorAll(`.links a`);

linksMobile.forEach(link => {
    link.addEventListener(`click`,(e)=>{
        e.preventDefault();
        mobileMenu.classList.toggle(`links-rendered`)
    })
})

bMore.addEventListener(`click`,()=>{
    moreMenu.classList.toggle(`show`)
});

bMenu.addEventListener(`click`,()=>{
    mobileMenu.classList.toggle(`links-rendered`)
});


const videos= [
    {
        url: "Rh_NXwqFvHc"
    },{
        url: "MBb88gLmJZY"
    },{
        url: "Fmdb-KmlzD8"
    },{
        url: "4i86Ckj8xKk"
    },{
        url: "4PV1yENf4b8"
    }
];

const slider= document.getElementById("slider");
const currentVideo= document.getElementById("current");
const videosContainer= document.getElementById("videos-container");
const prevButton= document.querySelector(`.prev`);
const nextButton= document.querySelector(`.next`);

let current= 0;

nextButton.addEventListener(`click`,(e)=>{
    e.preventDefault()
    current + 1 < videos.length ? current++ : current;
    renderCurrentVideo(videos[current].url);
});

prevButton.addEventListener(`click`,(e)=>{
    e.preventDefault();
    current - 1 >= 0 ? current-- : current;
    renderCurrentVideo(videos[current].url);
});


const renderCurrentVideo= (url)=>{
    currentVideo.innerHTML= `<iframe width="100%" height="526" src="https://www.youtube.com/embed/${url}" title="🔥  Sitio Web con HTML y CSS de Halo usando Flex, dark mode y responsive design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
};

const renderVideosList= ()=>{
    const html = videos.map((video, index) => {
        return `
            <div class="item">
                <a class="video-img" href="#videos" data-id="${index}">
                    <img src="https://img.youtube.com/vi/${video.url}/mqdefault.jpg">
                </a>
            </div>
        `
    });
    videosContainer.innerHTML= html.join(``);

    document.querySelectorAll(`.video-img`).forEach(item =>{
        item.addEventListener(`click`,(e)=>{
            e.preventDefault();
            const id= +item.getAttribute("data-id");
            current= id;
            renderCurrentVideo(videos[current].url);
        })
    })
}

const header= document.querySelector(`header`);
const body= document.querySelector(`body`);
const active= document.querySelectorAll(`.activator`);
const h3= document.querySelector(`#h3-light`);
const footer= document.querySelector("footer");
const nav= document.querySelector(`nav`);

active.forEach(button=>{
    button.addEventListener(`click`,()=>{
        header.classList.toggle(`header-light`)
        body.classList.toggle(`body`);
        h3.classList.toggle(`h3-active`)
        footer.classList.toggle(`footer-active`)
        nav.classList.toggle(`nav-active`)
    })
})



renderCurrentVideo(videos[current].url);
renderVideosList();
