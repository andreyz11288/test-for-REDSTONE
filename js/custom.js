const services = [
  { title: 'Створення сайтів', url: '#' },
  { title: 'Брендинг та дизайн', url: '#' },
  { title: 'CRM системи', url: '#' },
  { title: 'Інтернет магазин', url: '#' },
  { title: 'Лендінг', url: '#' },
  { title: 'Підтримка сайту', url: '#' },
  { title: 'Редизайн', url: '#' },
  { title: 'Розробка додатків', url: '#' },
  { title: 'Пошукова оптимізація', url: '#' },
]
const categories = [
  { title: 'Доставка їжі', url: '#', img: 'redstone-food-delivery.png' },
  { title: 'Будівництво', url: '#', img: 'category-img-6.png' },
  { title: 'APP', url: '#', img: 'category-img-5.png' },
  { title: 'WEB Solution', url: '#', img: 'category-img-8.webp' },
  { title: 'Авто', url: '#', img: 'redstone-auto.png' },
  { title: 'Брендування', url: '#', img: 'category-img-3.webp' },
]

const serviceList = document.getElementById('service-list')
const categoriesList = document.getElementById('categories-list')

services.forEach((service) => {
  const listItem = document.createElement('li')
  const link = document.createElement('a')

  link.href = service.url
  link.textContent = service.title

  listItem.appendChild(link)
  serviceList.appendChild(listItem)
})

categories.forEach((category) => {
  const listItem = `<li class="col-6 col-sm-4 category"><a href="${category.url}" class="category-entry"><span class="category-title">${category.title}</span><span class="category-img"><img src="./img/${category.img}" alt="" class="imgLoaded" /></span><div class="review-btn"><i class="review-icon" style="transform: matrix(1, 0, 0, 1, 0, 0);"></i></div></a></li>`
  categoriesList.innerHTML += listItem
})

// start ///open/close popup /// //

const openPopupButton = document.querySelector('.open-popup')
// const closePopupButton = document.querySelector('.btn-close')

openPopupButton?.addEventListener('click', () => {
  showPopup()
})

// closePopupButton?.addEventListener('click', () => {
//   hidePopup()
// })

function showPopup() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', '../popup.html', true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById('popups').innerHTML = xhr.responseText
      const popupFeedback = document.querySelector('.popup-feedback')
      const popupWrapper = document.querySelector('.popup-wrapper')

      if (popupFeedback && popupWrapper) {
        popupFeedback.classList.add('active')
        popupWrapper.classList.add('active')
      }

      const closePopupButton = document.querySelector('.btn-close')
      closePopupButton.addEventListener('click', () => {
        hidePopup()
      })
    }
  }
  xhr.send()

  //   const popupFeedback = document.querySelector('.popup-feedback')
  //   const popupWrapper = document.querySelector('.popup-wrapper')

  //   if (popupFeedback && popupWrapper) {
  //     popupFeedback.classList.add('active')
  //     popupWrapper.classList.add('active')
  //   }
}

function hidePopup() {
  const popupFeedback = document.querySelector('.popup-feedback')
  const popupWrapper = document.querySelector('.popup-wrapper')

  if (popupFeedback && popupWrapper) {
    popupFeedback.classList.remove('active')
    popupWrapper.classList.remove('active')
  }
}
// finish ///open/close popup /// //

// Adding special effects to the mouse cursor on category cards //
document.addEventListener('DOMContentLoaded', function () {
  var reviewBtns = document.querySelectorAll('.review-btn')

  reviewBtns.forEach(function (reviewBtn) {
    var reviewIcon = reviewBtn.querySelector('.review-icon')

    reviewBtn.addEventListener('mousemove', function (event) {
      var rect = reviewBtn.getBoundingClientRect()
      var x = event.clientX - rect.left
      var y = event.clientY - rect.top

      x = Math.max(0, Math.min(x, rect.width))
      y = Math.max(0, Math.min(y, rect.height))

      reviewIcon.style.left = x + 'px'
      reviewIcon.style.top = y + 'px'
    })
  })
})

//  Adding scrolling to an element with Id "content" when clicking on btn-scroll //
document.addEventListener('DOMContentLoaded', function () {
  var scrollButton = document.querySelector('.btn-scroll')

  scrollButton.addEventListener('click', function () {
    var contentElement = document.getElementById('content')

    contentElement.scrollIntoView({
      behavior: 'smooth',
    })
  })
})
