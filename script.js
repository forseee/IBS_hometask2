var productInner = document.querySelector('.products-inner');
var searchForm = document.querySelector('.header__form');
searchForm.addEventListener('submit', searchItem);
var content = [];

function createItems(id, name, like, picterePath, pictureAlt, priceValue) {
  var itemLink = document.createElement('a');
  itemLink.className = 'item-link';
  itemLink.href = 'basketpage.html?id=' + id;
  var div = document.createElement('div');
  div.className = 'products-inner__item';
  var likeBtn = document.createElement('button');
  likeBtn.className = 'item__like-btn';
  var likeImg = document.createElement('img');
  likeImg.className = 'item_like-img';
  if (like) {
    likeImg.src = './img/favorite.svg';
  } else {
    likeImg.src = './img/favorite_border.svg';
  }
  likeImg.alt = 'img';
  var mainImg = document.createElement('img');
  mainImg.className = 'item__img';
  mainImg.src = 'http://localhost:3007' + picterePath;
  mainImg.alt = pictureAlt;
  var textP = document.createElement('p');
  textP.className = 'item__text';
  textP.innerHTML = name;
  var priceP = document.createElement('p');
  priceP.className = 'item__price';
  priceP.innerHTML = '$' + priceValue;
  likeBtn.append(likeImg);
  div.append(likeBtn, mainImg, textP, priceP);
  itemLink.append(div);
  productInner.append(itemLink);
}

function searchItem(event) {
  event.preventDefault();
  var input = document.querySelector('.header__search').value;
  var findItem = [];
  if (input.length < 3) {
    alert('Для поиска вы должны ввести три или более символов');
  } else {
    content.forEach((item) => {
      if (item.name.toLowerCase() === input.toLowerCase()) {
        findItem.push(item);
      }
    });
    productInner.innerHTML = '';

    if (findItem.length === 0) {
      var h1 = document.createElement('h1');
      h1.innerHTML = 'Таких товаров нет';
      h1.style = 'font-size:70px; color: black; font-weight: 700; margin: 40px 0 0 50px';
      productInner.append(h1);
    }
    findItem.forEach(function (item) {
      createItems(
        item.id,
        item.name,
        item.like,
        item.picture.path,
        item.picture.alt,
        item.price.value,
      );
    });
  }
}

function getInfo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3007/item');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      var res = JSON.parse(xhr.response);
      content = res.content;
      content.forEach(function (item) {
        createItems(
          item.id,
          item.name,
          item.like,
          item.picture.path,
          item.picture.alt,
          item.price.value,
        );
      });
    }
  };
}

getInfo();
