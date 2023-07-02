const model = document.querySelector('#model');
const world = document.querySelector('#world');
const menu_list1 = document.querySelector('#menu_list1');
const menu_list2 = document.querySelector('#menu_list2');
const menu2 = document.querySelector('.menu2');
const main = document.querySelector('main');


model.addEventListener('click', () => {
menu2.style.display ='none'
  if (menu_list1.style.display =='flex') {
    menu_list1.style.display='none'
    menu_list2.style.display='none'
  }
  else{
    menu_list1.style.display='flex'
  }
})
menu_list1.addEventListener('blur', () => {
    menu_list1.style.display='none'
})

world.addEventListener('click', () => {
menu_list1.style.display='none'
menu_list2.style.display ='none'
  if (menu2.style.display =='flex') {
    menu2.style.display='none'
  }
  else{
    menu2.style.display='flex'
  }
})
menu2.addEventListener('blur', () => {
    menu2.style.display='none'
})
main.addEventListener('click', ()=>{
    menu2.style.display ='none'
    menu_list1.style.display ='none'
    menu_list2.style.display = 'none'
})

const m1 = document.querySelector('.m1');
const m2 = document.querySelector('.m2');
const m3 = document.querySelector('.m3');
const m4 = document.querySelector('.m4');
const m5 = document.querySelector('.m5');
const m6 = document.querySelector('.m6');
const m7 = document.querySelector('.m7');
const m8 = document.querySelector('.m8');
const m9 = document.querySelector('.m9');
const m10 = document.querySelector('.m10');

m1.addEventListener('mouseover', ()=>{
    menu_list2.style.display ='none'
    menu_list1.style. filter='blur(0)'
})
m7.addEventListener('mouseover', ()=>{
    menu_list2.style.display ='none'
    menu_list1.style. filter='blur(0)'
})
m9.addEventListener('mouseover', ()=>{
    menu_list2.style.display ='none'
    menu_list1.style. filter='blur(0)'
})


m2.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML = `
    <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE BENTAYGA EWB RANGE</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA EWB AZURE</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA EWB</p>
        </div>
    </a>
</div>
    `
})
m3.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE BENTAYGA RANGE</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA SPEED</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA S</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA AZURE</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA ODYSSEAN EDITION</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA</p>
        </div>
    </a>
</div>
`
})

m4.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE FLYING SPUR</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYING SPUR MULLINER</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYING SPUR SPEED</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYING SPUR S</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYING SPUR AZURE</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYING SPUR</p>
        </div>
    </a>
</div>
`
})

m5.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE CONTINENTAL GT RANGE</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GT MULLINER</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GT SPEED</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GT S</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GT AZURE</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GT</p>
        </div>
    </a>
</div>
`
})

m6.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE CONTINENTAL GTC RANGE</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GTC MULLINER</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GTC SPEED</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GTC S</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GTC AZURE</p>
        </div>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL GTC</p>
        </div>
    </a>
</div>
`
})

m8.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>MULLINER</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>MULLINER COLLECTION</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>MULLINER FEATURES</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>COACHBUILT</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CLASSIC</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>LEGEND OF MULLINER</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
`
})


m10.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(0)'
    menu_list2.style.display ='flex'
    menu_list2.innerHTML= `  <div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>POST MODELS</p>
        </div>
        <i class="fa-solid fa-angle-left"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>MULSANNE (2010 - 2020)</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>CONTINENTAL (2003 - 2018)</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTAYGA (2015 - 2020)</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>FLYIMG SPUR (2005 - 2018)</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE ARNAGE RANGE</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>THE AZURE RANGE</p>
        </div>
         <i class="fa-solid fa-angle-right"></i>
    </a>
</div>
<div class="menu_list">
    <a href="">
        <div class="m_txt">
            <p>BENTLEY BROOKLANDS</p>
        </div>
    </a>
</div>
`
})

menu_list2.addEventListener('mouseover', ()=>{
    menu_list1.style. filter='blur(1px)'
})
.menu_list1.addEventListener('mouseover',()=>{
    menu_list1.style. filter='blur(0)'
})