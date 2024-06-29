const img = document.querySelector(".images");
const drop = document.querySelector(".drop");

const img2 = document.querySelector(".images2");
const drop2 = document.querySelector(".drop2");

const img3 = document.querySelector(".images3");
const drop3 = document.querySelector(".drop3");

const img4 = document.querySelector(".images4");
const drop4 = document.querySelector(".drop4");

let toggle = true;


drop.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img.src="Assets/Images/icons8-plus-50.png";
    }
    else
    {
        img.src="Assets/Images/icons8-minus-50.png"
    }
})

drop2.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img2.src="Assets/Images/icons8-plus-50.png";
    }
    else
    {
        img2.src="Assets/Images/icons8-minus-50.png"
    }
})

drop3.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img3.src="Assets/Images/icons8-plus-50.png";
    }
    else
    {
        img3.src="Assets/Images/icons8-minus-50.png"
    }
})

drop4.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img4.src="Assets/Images/icons8-plus-50.png";
    }
    else
    {
        img4.src="Assets/Images/icons8-minus-50.png"
    }
})

let animation = anime({
    targets: 'div',
    // Properties 
    translateX: 100,
    borderRadius: 50,
    // Property Parameters
    duration: 2000,
    easing: 'linear',
    // Animation Parameters
    direction: 'alternate'
  }); 