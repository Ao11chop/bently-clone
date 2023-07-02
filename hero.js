

const photolopper = ['/images/bentayga_2.jpg','/images/GTCS_HPC_.jpg','/images/GT_Speed.jpg','/images/flying_spur_hybrid.jpg','/images/Mulliner Batur.jpg','/images/dezeen_hpc_final.jpg']
let index =0;

setInterval(function () {
    let random = Math.floor(Math.random() * 6);
    shadow.style.backgroundImage = photolopper[random];
}, 800)
const shadow = document.querySelector('#shadow')
const change1 = document.querySelector('#change1')
const change2 = document.querySelector('#change2')
const change3 = document.querySelector('#change3')
const change4 = document.querySelector('#change4')
const change5 = document.querySelector('#change5')
const change6 = document.querySelector('#change6')

change1.addEventListener('click', (e)=>{
    e.preventDefault()
 shadow.style.background = `url('/images/bentayga_2.jpg')`
 bkg1.style.backgroundColor = 'white'
 bkg2.style.backgroundColor = 'transparent'
 bkg3.style.backgroundColor = 'transparent'
 bkg4.style.backgroundColor = 'transparent'
 bkg5.style.backgroundColor = 'transparent'
 bkg6.style.backgroundColor = 'transparent'
})
change2.addEventListener('click', (e)=>{
    e.preventDefault()
    shadow.style.background = `url('/images/GTCS_HPC_.jpg')`
    bkg1.style.backgroundColor = 'transparent'
    bkg2.style.backgroundColor = 'white'
    bkg3.style.backgroundColor = 'transparent'
    bkg4.style.backgroundColor = 'transparent'
    bkg5.style.backgroundColor = 'transparent'
    bkg6.style.backgroundColor = 'transparent'
   })
   change3.addEventListener('click', (e)=>{
    e.preventDefault()
 shadow.style.background = `url('/images/GT_Speed.jpg')`
 bkg1.style.backgroundColor = 'transparent'
 bkg2.style.backgroundColor = 'transparent'
 bkg3.style.backgroundColor = 'white'
 bkg4.style.backgroundColor = 'transparent'
 bkg5.style.backgroundColor = 'transparent'
 bkg6.style.backgroundColor = 'transparent'
})
change4.addEventListener('click', (e)=>{
    e.preventDefault()
 shadow.style.background = `url('/images/flying_spur_hybrid.jpg')`
 bkg1.style.backgroundColor = 'transparent'
 bkg2.style.backgroundColor = 'transparent'
 bkg3.style.backgroundColor = 'transparemt'
 bkg4.style.backgroundColor = 'white'
 bkg5.style.backgroundColor = 'transparent'
 bkg6.style.backgroundColor = 'transparent'
})
change5.addEventListener('click', (e)=>{
    e.preventDefault()
 shadow.style.background = `url('/images/Mulliner Batur.jpg')`
 bkg1.style.backgroundColor = 'transparent'
 bkg2.style.backgroundColor = 'transparent'
 bkg3.style.backgroundColor = 'transparemt'
 bkg4.style.backgroundColor = 'transparent'
 bkg5.style.backgroundColor = 'white'
 bkg6.style.backgroundColor = 'transparent'
})
change6.addEventListener('click', (e)=>{
    e.preventDefault()
 shadow.style.background = `url('/images/dezeen_hpc_final.jpg')`
 bkg1.style.backgroundColor = 'transparent'
 bkg2.style.backgroundColor = 'transparent'
 bkg3.style.backgroundColor = 'transparemt'
 bkg4.style.backgroundColor = 'transparent'
 bkg5.style.backgroundColor = 'transparent'
 bkg6.style.backgroundColor = 'white'
})
const bkg1 = document.querySelector('#bkg1')
const bkg2 = document.querySelector('#bkg2')
const bkg3 = document.querySelector('#bkg3')
const bkg4 = document.querySelector('#bkg4')
const bkg5 = document.querySelector('#bkg5')
const bkg6 = document.querySelector('#bkg6')

// function backgroundChanger() {
//     if(change1.addEventListener =='click'){
//         shadow.style.background = `url('/images/GTCS_HPC_.jpg')`
//         bkg1.style.backgroundColor = 'transparent'
//         bkg2.style.backgroundColor = 'white'
//     }
// }
// change1.addEventListener('click', backgroundChanger);


