let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let hide = document.querySelector('.close');
let hide1 = document.querySelector('.close1');
let hide2 = document.querySelector('.close2');

hide.onclick = () =>{
  navbar.classList.remove('active')
  menu.classList.toggle('move');
}


hide1.onclick = () =>{
  navbar.classList.remove('active')
  menu.classList.toggle('move');
}


hide2.onclick = () =>{
  navbar.classList.remove('active')
  menu.classList.toggle('move');
}

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
} 

// notification
let bell=document.querySelector('.notification');

document.querySelector('#bell-icon').onclick=()=>{
    bell.classList.toggle('active');
}


// Swiper

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // custom scroll bar
  window.onscroll = function() {mufunction()};

  function mufunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll/height)*100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
  }

// Contact to Google sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbyrjdn-esByB7C7pUQj3_z1xgjeKGSGyJ_p0MPlWlcccjFfywGSHEmkyNPI6VqM7fcB/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Success!', response))
    .catch(error => alert('Error!', error.message))

  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('message').value='';

})



