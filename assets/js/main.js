const navbar = document.querySelector('.navbar');
const navbar_img = document.querySelector('img');
const ancor = document.querySelectorAll('.text-nav') ;
const slider = document.querySelectorAll('.carousel-item') ;
const load=document.querySelector('.load');
const toggler = document.querySelector('.navbar-toggler');
const scrollUp=document.querySelector('.scroll-up');
const menuSec=document.querySelector('.menu');
const list=document.querySelector('.side-list');
const icon=document.querySelector('.list-s');
const couponSec=document.querySelector('.r2');


window.addEventListener('load', function()
{
   setTimeout(function()
   {
    load.classList.add('opacity-0', 'invisible'),
    document.body.style.overflow = 'auto',
    list.classList.remove('displays')


   }, 2000)
})

window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.remove('bg-nav');
        navbar_img.classList.add('im-nav');
        navbar.classList.add('fix' ,  'shadow');
        // navbar.style.paddingTop= '0';
        // navbar.style.paddingBottom= '0'; 
        toggler.style.right= '73px';
        navbar.style.height= 'fit-content';    

        for(var i=1; i<ancor.length;i++)
        {
            ancor[i].classList.remove('text-nav');
            ancor[i].classList.add('change-color-nav');
        }

    } else {
        navbar.classList.add('bg-nav');
        navbar_img.classList.remove('im-nav');
        navbar.classList.remove('fix', 'shadow');
        toggler.style.right= '0px';
        for(var i=1; i<ancor.length;i++)
        {
            ancor[i].classList.remove('change-color-nav');
            ancor[i].classList.add('text-nav');
        }

    }
    if(couponSec==null && menuSec!=null)
    {
        if(window.scrollY> menuSec.offsetTop )
        {
            scrollUp.classList.remove('opacity-0', 'invisible');
        }else{
            scrollUp.classList.add('opacity-0', 'invisible');
    
        }
    }
    else     if(couponSec!=null && menuSec==null)
    {
        if(window.scrollY> couponSec.offsetTop )
        {
            scrollUp.classList.remove('opacity-0', 'invisible');
        }else{
            scrollUp.classList.add('opacity-0', 'invisible');
    
        }
    }


};


function clearImageFromNavbar() {
    var screenWidth = window.innerWidth;

    if (screenWidth > 990) {
        var image = navbar.querySelector('img');


        if (image) {
            image.classList.add('d-none');
        }
    }else 
    {
        var image = navbar.querySelector('img');
        image.classList.remove('d-none');
    }
}

clearImageFromNavbar();


window.addEventListener('resize', clearImageFromNavbar);


scrollUp.addEventListener('click', function(){
    window.scroll(
        {
            top: 0,
            behavior:'smooth',
        }
    )

})


// side bar 
icon.addEventListener('mouseover', function(){
    list.classList.add('open');

})
list.addEventListener('mouseover', function(){
    list.classList.add('open');

})
icon.addEventListener('mouseout', function(){
    list.classList.remove('open');

})
list.addEventListener('mouseout', function(){
    list.classList.remove('open');

})


