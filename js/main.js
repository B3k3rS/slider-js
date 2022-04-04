// imgs array
const img1 = `https://images.wallpaperscraft.ru/image/single/bashnia_neboskreby_zdaniia_271135_1920x1080.jpg`;
const img2 = `https://images.wallpaperscraft.ru/image/single/poverhnost_piatna_abstraktsiia_271138_1920x1080.jpg`;
const img3 = `https://images.wallpaperscraft.ru/image/single/zdanie_fasad_zerkalnyj_271122_1920x1080.jpg`;
const imgs = [img1,img2,img3]

// html elements
const slider = document.querySelector(`.slider`)
const backBut = document.querySelector(`#back`);
const playBut = document.querySelector(`#play`);
const pauseBut = document.querySelector(`#pause`);
const nextBut = document.querySelector(`#next`);

// slider counter
let slider_counter = 0;

// function render slider
const renderSlider = (slider_counter) => {
    slider.innerHTML = `<img alt="slider" src='${imgs[slider_counter]}'>`;
}

let imgSlider = setInterval(()=> {
    renderSlider(slider_counter)
    slider_counter >= imgs.length-1 ? slider_counter=0 : slider_counter++
},1000)

renderSlider(imgs.length-1);

// nav buttons func
backBut.addEventListener('click', () => {
    slider_counter = slider_counter- 1 < 0 ? imgs.length-1: slider_counter - 1;
    renderSlider(slider_counter);
})

nextBut.addEventListener('click', async () => {
    slider_counter = slider_counter+ 1 > imgs.length-1 ? 0 : slider_counter+ 1;
    renderSlider(slider_counter);
})

pauseBut.addEventListener('click', () => {
    playBut.classList.toggle('hiden')
    pauseBut.classList.toggle('hiden')
    clearInterval(imgSlider);
})

playBut.addEventListener('click', () => {
    playBut.classList.toggle('hiden')
    pauseBut.classList.toggle('hiden')
    imgSlider = setInterval(()=> {
        renderSlider(slider_counter)
        slider_counter >= imgs.length-1 ? slider_counter=0 : slider_counter++
    },1000)
})

