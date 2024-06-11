let listElements = document.querySelectorAll('.btn_despega');

listElements.forEach( listElements =>{
   listElements.addEventListener('click', ()=>{
     

       let height = 0;
       let menu = listElements.nextElementSibling;
       if (menu.clientHeight == "0") {
          
           height = menu.scrollHeight;
       }
       
       menu.style.height = `${height}px`;
   })


});