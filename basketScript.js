var id = location.search.slice(4);

function createItem(info) {
  var bigImgWrapper = document.querySelector('.basket__item-img-wrapper');
  bigImgWrapper.innerHTML = '';
  var img = document.createElement('img');
  img.src = 'http://localhost:3007/' + info.picture.path;
  bigImgWrapper.append(img);
  var itemTitle = document.querySelector('.basket__item-title');
  itemTitle.innerHTML = info.name;
  var textInfo = document.querySelector('.basket__item-text-info');
  textInfo.innerHTML = info.info;
  var itemSubtitle = document.querySelector('.basket__item-subtitle');
  itemSubtitle.innerHTML = info.description;
  var textDetails = document.querySelector('.basket__item-text-details');
  textDetails.innerHTML = info.details;
  var textPrise = document.querySelector('.basket__item-prise');
  textPrise.innerHTML = '$' + info.price.value;
  var likeImg = document.querySelector('.basket__like-img');
  if (info.like) {
    likeImg.src = './img/favorite.svg';
  } else {
    likeImg.src = './img/favorite_border.svg';
  }
}

function getInfo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3007/item/' + id);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      var res = JSON.parse(xhr.response);
      var itemInfo = res.content;
      console.log(itemInfo);
      createItem(itemInfo);
    }
  };
}



getInfo();
