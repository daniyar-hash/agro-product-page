  
  const header = document.querySelector('.header');


    function addClassProductsItem(elementList, className){
      elementList.forEach(item=>{
     
        item.classList.add(`${className}`)
      })
    }

    function removeClassProductsItem(elementList, className){
      elementList.forEach(item=>{
      item.classList.remove(`${className}`)
      })
    }

  function updateHeaderClass() {
    if (window.scrollY > 80) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }

  function zoomer(imgId, scaleImage){
    let img, glass, w, h, bw;
    img = document.getElementById(imgId);

    glass = document.createElement("DIV");
    glass.setAttribute('class','product__linza');

    img.parentElement.insertBefore(glass,img);

    glass.style.backgroundImage = "url('" +img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * scaleImage) + "px " + (img.height * scaleImage) + "px"; //1800  2000;
  

    bw = 3;

    w = glass.offsetWidth/2;  //95
    h = glass.offsetHeight/2; //95

    glass.addEventListener("mousemove", moveZoomer);
    img.addEventListener("mousemove", moveZoomer);
    glass.addEventListener("touchmove", moveZoomer);
    img.addEventListener("touchmove", moveZoomer);


    glass.addEventListener("mouseout", (e)=>{
      glass.style.opacity="0";
    });

   

  function moveZoomer(e) {

    let pos, x, y;
    e.preventDefault();
    console.log(e);  //target glass
    glass.style.opacity = "1";
    pos = getCursorPos(e);

    // console.log(pos)
    x = pos.x;
    y = pos.y;



    
 
  // console.log(img.width)
  // console.log(img.width - w/scaleImage) 

    if(x > img.width - w/scaleImage){
       x = img.width - w/scaleImage; //  450-95/4
      
      }

    if(x < w/scaleImage) {
      x = w/scaleImage;
    }
    
    if(y > img.height - h/scaleImage){
        y = img.height - h/scaleImage;
    }

    if(y < h/scaleImage){
      y = h/scaleImage
    }

    glass.style.left = (x-w) + "px";
    glass.style.top = (y-h) + "px";

    glass.style.backgroundPosition = "-" + ((x * scaleImage) -w + bw) + "px -" + ((y * scaleImage) -h + bw) + "px";





  }

  function getCursorPos(e){
    let rect, x = 0, y = 0;

    


  rect = img.getBoundingClientRect(); // координаты img относительно окна

   x = e.clientX - rect.left; // clientX — позиция курсора относительно окна
   y = e.clientY - rect.top;

  return { x, y };

  }

  }





   zoomer("product-image", 4);






  // Проверка при загрузке страницы
  window.addEventListener('load', updateHeaderClass);
 
  // Проверка при скролле
  window.addEventListener('scroll', updateHeaderClass);


 

