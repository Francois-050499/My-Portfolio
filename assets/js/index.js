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

var pics_src = new Array("./assets/images/key-visual.png","./assets/images/studying.png","./assets/images/self-studying.png");

var num = -1;

slideshow_timer();

function slideshow_timer() {
    if (num == 2) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
    setTimeout("slideshow_timer()",5000);
}