  
  const header = document.querySelector('.header');
  const categoriesAsideItems  = document.querySelectorAll('.categories-aside__item');
  const sorterVeiewButtons    = document.querySelectorAll(".category-products_sort-button");
  const categoryProductslist  = document.querySelector(".category-products__list");
  const categoryProductsItems = document.querySelectorAll(".category-products__item");



  sorterVeiewButtons.forEach(item =>{
    item.addEventListener("click", (event)=>{


      if(item.classList.contains("list")){
          categoryProductslist.classList.add("flex-row");
          categoryProductslist.classList.remove("grid", "grid--3");
          addClassProductsItem(categoryProductsItems, "item-row");
          wrapInnerElement({itemSelector:'.category-products__item',
             targetSelector1:'.category-products__title',targetSelector2:'.category-products__price',
              wrapperClass:'category-products__wrapper'});

          wrapInnerElement({itemSelector:'.category-products__item', 
            targetSelector1:'.category-products__button', wrapperClass:'category-products__button-wrapper'});



      } else{
          categoryProductslist.classList.remove("flex-row");
          categoryProductslist.classList.add("grid", "grid--3");
          removeClassProductsItem(categoryProductsItems, "item-row");
          deleteWrapInnerElement('.category-products__wrapper');
          deleteWrapInnerElement('.category-products__button-wrapper');


      }



    })
  })





function wrapInnerElement({ itemSelector, targetSelector1,targetSelector2=null, wrapperClass }) {
  document.querySelectorAll(itemSelector).forEach(item => {
    const target1 = item.querySelector(targetSelector1);
    const target2 = item.querySelector(targetSelector2);



    if (!target1) return;


    const wrapper = document.createElement('div');
    wrapper.classList.add(wrapperClass);

    target1.parentNode.insertBefore(wrapper, target1);
    wrapper.appendChild(target1);

    if (!target2) return;

    if(target2){
        wrapper.appendChild(target2);
    }






  });
}

function deleteWrapInnerElement(wrapperClass) {
  document.querySelectorAll(wrapperClass).forEach(wrapper => {

    const parent = wrapper.parentNode;

    while(wrapper.firstChild){
      parent.insertBefore(wrapper.firstChild,wrapper)
    }

    parent.removeChild(wrapper);


  });
}






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

//  function openCategoryList(){

  categoriesAsideItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Code to execute when an <li> is clicked
      const dropDown = item.querySelector(".categories-aside__dropdown");



   
     item.classList.toggle("is-open");
     // item.style.backgroundColor = 'gray'; // Example: change background color
    
     
    // dropDown.style.display = "none" ? 'flex': 'none';

     dropDown.classList.toggle("to-show");
    

     


      });

    });
//  }


  function updateHeaderClass() {
    if (window.scrollY > 80) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }

  // Проверка при загрузке страницы
  window.addEventListener('load', updateHeaderClass);
 
  // Проверка при скролле
  window.addEventListener('scroll', updateHeaderClass);


 

