const RELATED_DATA = [{
    id: 1,
    img: './images/diamond.jpg',
    title: 'First of All',
    desc: 'Diamond Platnumz latest album released on 2 Nov 2022 ...',
    singer: 'D.Platnumz'
},
{
    id: 2,
    img: './images/ray.jpg',
    title: 'Made for Us',
    desc: 'Ray Vanny latest album released on earlier this week .Ray and...',
    singer: 'Rayvanny'
},
{
    id: 3,
    img: './images/definition.jpg',
    title: 'Definition of LOve',
    desc: 'Mbosso latest album released on 23, Jan 2022 .One hell of a...',
    singer: 'Mboso'
}];



const RELATED = RELATED_DATA.map( r => (
    ` <div class="album">
    <div class="img">
        <img src=${r.img} width="100%" alt="album-image">
    </div>
    <div class="desc">
        <h5>
            ${r.desc}
        </h5>
        <h4>
            <i class="bx bx-badge-check badge"></i>
            ${r.singer}</h4>
    </div>
    <div class="download">
        <i class="bx bx-download"></i>
        <span>Download</span>
    </div>
</div>
    `
))

const Relate = document.getElementById('relate')

Relate.innerHTML = RELATED;