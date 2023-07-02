const model2 = document.querySelector('#model2');
const world2 = document.querySelector('#world2');
const ownership = document.querySelector('#ownership');
const about = document.querySelector('#about');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');


model2.addEventListener('click', ()=>{
    if (b1.style.display =='flex') {
        b1.style.display='none';    
    }
    else{
        b1.style.display ='flex';
    }
})
world2.addEventListener('click', ()=>{
    if (b2.style.display =='flex') {
        b2.style.display='none';    
    }
    else{
        b2.style.display ='flex';
    }
})
ownership.addEventListener('click', ()=>{
    if (b3.style.display =='flex') {
        b3.style.display='none';    
    }
    else{
        b3.style.display ='flex';
    }
})
about.addEventListener('click', ()=>{
    if (b4.style.display =='flex') {
        b4.style.display='none';    
    }
    else{
        b4.style.display ='flex';
    }
})