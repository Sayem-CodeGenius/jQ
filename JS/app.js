// Darkmood to Lightmood Begins

let body = document.querySelector("body")
let moodBtn = document.querySelector("nav .moodBtn");

function darkMood (){
    body.classList.toggle('moodShift')

    if (body.classList.contains("moodShift")){
        logoImg.src="./Images/Asset 1.png"
    } else{
        logoImg.src="./Images/Asset 2.png"
    }
}

moodBtn.addEventListener('click' , darkMood)

const logoImg = document.getElementById('logo');

// Darkmood to Lightmood Ends



let sideBar = document.querySelector('.sidebar');

document.addEventListener('click', function(event){
    if(sideBar.classList.contains('show')){
        if(!sideBar.contains(event.target)){
            sideBar.classList.remove('show');
        }
    }
})

// navbar fixed begins

$(window).scroll(function(){

    let scrollTop =$(window).scrollTop()

    if(scrollTop > 500){
     $('nav').addClass('fixed')
    } else{
        $('nav').removeClass('fixed')
    }
}
)

// navbar fixed ends

// PreLoader Begins

$(window).on("load" , function(){
     $('#preLoader').fadeOut()
})

// PreLoader Ends

// Upward Scroll Begins

$('#upward').click(function(){
    $('html , body').animate({scrollTop:0} , 500)
}

)





