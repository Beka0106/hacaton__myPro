//burger
const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})



///////////modalka
const apply = document.querySelector('.apply')
const modalBackDrop = document.querySelector('.modalBackDrop')
const modal = document.querySelector('.modal')
// const modalHeader = document.querySelector('.modalHeader')
const modalCloseButton = document.querySelector('.modalCloseButton')
const modalContent = document.querySelector('.modalContent')
const modalApplyButton =  document.querySelector('.modalApplyButton')
const message = document.querySelector('.message')

let timer

const remover = () => {
    if(timer) {
        clearTimeout(timer)
    }
    modalBackDrop.classList.remove('modalBackDropActive')
    modal.classList.remove('modalActive')
}

apply.addEventListener('click', () => {
    modalBackDrop.classList.add('modalBackDropActive')
    modal.classList.add('modalActive')
})

modalBackDrop.addEventListener('click', remover)
modalCloseButton.addEventListener('click', remover)

modal.addEventListener('click', (e) => {
    console.dir(e);
    e.stopPropagation()
})

modalApplyButton.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    message.innerHTML = `
    <div class="message">
        <h2>Thank You</h2>
        <p>Our operator will call you back</p>
    </div>
    `
    timer = setTimeout(remover, 2000)
})

apply.addEventListener('click', () => {
    modalContent.classList.remove('hideContent')
    message.innerHTML = ''
})


const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
const form = document.querySelector('form')
const btn = document.querySelector('.modalApplyButton')

// btn.addEventListener('click', () => {
//     // alert(`${messageOne.value} ${messageTwo.value}`)
// })

const bot = {
  TOKEN: '5853869739:AAGErC1pzQVszH-_DNg9N9QoSSeorQpOSCs', 
  chatId: '-998473812'
}

https://api.telegram.org/bot/sendMessage?chat_id=&text=1

form.addEventListener('submit', (e) => {
    //Останавливает перезагрузку страницы(событие?)
    e.preventDefault()
    if(messageOne.value && messageTwo.value) {
        const telegramMessage = `name:${messageOne.value} number:${messageTwo.value}`
        const TELEGRAM_API = `
        https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`
        fetch(TELEGRAM_API)
            .then(Response => {
                console.log(Response);
                if(Response.ok) {
                    alert('message success')
                }
            })
            .catch(error => {
                alert('error')
            })
    }else {
        alert('not validated')
    }
}) 

// ///////////modalka



///////swiper

// let swiper2 = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 5,
//   freeMode: true,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
//   autoplay: {
//       delay: 2700,
//       disableOnInteraction: false
//   }

// });

//   function razdelitel(arr) {
//   const dlina = arr.length;
//   const seredina = Math.ceil(dlina / 2);

//   const polovina1 = arr.slice(0, seredina);
//   const polovina2 = arr.slice(seredina);

//   return [polovina1, polovina2];
// }

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

//////swiper



/////categories section

document.addEventListener('DOMContentLoaded', function() {
  let categorySelect = document.getElementById('category-select');
  let searchInput = document.getElementById('search-input');
  let searchButton = document.getElementById('search-button');
  let categoryList = document.querySelector('.category-list');

  function filterProducts() {
    let category = categorySelect.value;
    let searchQuery = searchInput.value.toLowerCase();
    let categoryItems = categoryList.querySelectorAll('.category-item');

    categoryItems.forEach(function(item) {
      let itemCategory = item.dataset.category.toLowerCase();
      let itemName = item.dataset.name.toLowerCase();

      if ((category === 'all' || itemCategory === category) && (searchQuery === '' || itemName.includes(searchQuery))) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  categorySelect.addEventListener('change', filterProducts);
  searchButton.addEventListener('click', filterProducts);
  searchInput.addEventListener('input', filterProducts);

  let categoryLinks = categoryList.querySelectorAll('.category-link');
  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      let selectedCategory = this.parentNode.dataset.category.toLowerCase();
      categorySelect.value = selectedCategory;
      filterProducts();
    });
  });

  categorySelect.value = 'all';
  filterProducts();
});
///categories section


//аккордеон

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentNode;
    const accordionContent = header.nextElementSibling;

    accordionItem.classList.toggle('open');
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
  });
});





///Custom section - Реализуйте блок на ваш выбор и фантазию, 

const customBlock = document.querySelector('.custom-block');

customBlock.addEventListener('click', () => {
  customBlock.classList.toggle('active');
});




 
// /////Favorite section - У вас будет слева 10 товаров, при нажатии
// на один из товаров, выбранный товар отрисуется справа


// function showProduct(productNumber) {
//   const selectedProduct = document.getElementById('selectedProduct');
//   selectedProduct.innerHTML = '';
//   const productInfo = document.createElement('p');
//   productInfo.textContent = 'Товар ' + productNumber;
//   selectedProduct.appendChild(productInfo);
// }



// function showProduct(productNumber) {
//   const selectedProduct = document.getElementById('selectedProduct');
//   selectedProduct.innerHTML = '';

//   const productInfo = document.createElement('div');
//   productInfo.innerHTML = `
//     <h4>Товар ${productNumber}</h4>
//     <img src="product${productNumber}.jpg" alt="Товар ${productNumber}">
//   `;

//   selectedProduct.appendChild(productInfo);
// }


/////Favorite section - У вас будет слева 10 товаров, при нажатии
// на один из товаров, выбранный товар отрисуется справа













