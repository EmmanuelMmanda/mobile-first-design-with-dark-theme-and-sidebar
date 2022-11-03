// selectors
const Body = document.querySelector('body');
const hamburgerButton = document.getElementById('hamburger');
const closeButton = document.querySelector('aside .sidebar .close-menu svg')
const sidebarMenu = document.getElementById('aside');
const backdrop = document.querySelector('.backdrop');
const Toggler = document.querySelector('.theme .theme-toggle');
const icon = document.querySelector('.theme .theme-toggle i');
const Albums = document.getElementById('album-list');


//functions
const styled = (state) => {
    sidebarMenu.style.display = state;
}

//event listeners

hamburgerButton.addEventListener('click', () => {
    styled('block')
})
closeButton.addEventListener('click', () => {
    styled('none')
    
})
backdrop.addEventListener('click', () => {
    styled('none')
    
})
Toggler.addEventListener('click', () => {
    if (icon.classList.contains('moon')) {
        icon.classList.remove('moon')
        icon.classList.remove('bx-moon')
        icon.classList.toggle('bx-sun')
        icon.classList.toggle('sun')
        Body.classList.add('dark')
        
    } else {
        icon.classList.remove('sun');
        icon.classList.remove('bx-sun');
        icon.classList.toggle('bx-moon');
        icon.classList.toggle('moon');
        Body.classList.remove('dark');
    }
});

const ALBUMS_DATA = [{
    id: 1,
    img: './images/harmonize.jpg',
    title: 'Made for US',
    desc: 'Harmonize latest album released on 1 Nov 2022 .Ntakubeba and...',
    singer: 'Harmonize'
},
{
    id: 1,
    img: './images/diamond.jpg',
    title: 'First of All',
    desc: 'Diamond Platnumz latest album released on 2 Nov 2022 ...',
    singer: 'D.Platnumz'
},
{
    id: 1,
    img: './images/ray.jpg',
    title: 'Made for Us',
    desc: 'Ray Vanny latest album released on earlier this week .Ray and...',
    singer: 'Rayvanny'
},
{
    id: 1,
    img: './images/definition.jpg',
    title: 'Definition of LOve',
    desc: 'Mbosso latest album released on 23, Jan 2022 .One hell of a...',
    singer: 'Mboso'
}];


const ALBUMS = ALBUMS_DATA.map( (album) => (
    ` <div class="albums" key=${album.id}>
    <a href="blog-details.html">
    <img loading="lazy" src=${album.img} width="200px" alt="album-image">
    </a>
    <div>
        <h2>${album.title}</h2>
        <p>
        <a href="blog-details.html">
        ${album.desc} </a>
        </p>
        <div class="singer">
            <div class="profile">
                <img loading="lazy" src=${album.img} width="" alt="">
            </div>
            <div>
                <h3>${album.singer}</h3>
            </div>
            <i class="bx bx-dots-vertical-rounded dots" id="dots"></i>
            <div class="more" id="more">
                <div class="download">
                    <i class="bx bx-download"></i> 
                    <span>Download</span>
                </div>
                <div class="share">
                    <i class="bx bx-share"></i>
                    <span>Share</span>
                </div>
                <div class="report">
                    <i class="bx bx-flag"></i> 
                    <span>Report</span>
                </div>
            </div>
        </div>
    </div>
</div>`
))


Albums.innerHTML = ALBUMS;

const moreDots = document.getElementById('dots');
const More = document.getElementById('more');

moreDots.addEventListener('click', () => {
    More.classList.toggle('active');
});



