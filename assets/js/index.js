document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click',e => {
        e.preventDefault()

        const target = document.querySelector(link.hash),
        adjust = 15,
        offsetTop = window.pageYOffset + target.getBoundingClientRect().top -adjust

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    })
})

const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 200) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

const pageTopBtn = document.querySelector('#back-to-top');
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

var pics_src = new Array("./assets/images/key-visual.png","./assets/images/studying.png","./assets/images/self-studying.png","./assets/images/example-active.png");

var num = 0;

function slideshow() {
    if (num == 3) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
}
