let bagItems;

onload();

function onload() {
  displayItemsOnHomePage();
  displayBagItem();
}

function addToBag(ItemId) {
  bagItems.push(ItemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagItem();
}

function displayBagItem() {
  let bagItemCounElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCounElement.innerText = bagItems.length;
    bagItemCounElement.Style.visibility = "visible";
  } else {
    bagItemCounElement.Style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemContainerElement = document.querySelector(".items-container");
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div class="item-container">
        <img class="" src="${item.item_image}" alt=" ">
        <div class="rating">${item.rating.stars} &#11088; | ${item.rating.noOfReviews}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="Orignal-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  itemContainerElement.innerHTML = innerHtml;
}
