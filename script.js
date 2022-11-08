const product = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    amount: 0,
    kkal: 300,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSumm() {
      return this.amount * this.kkal;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH",
    price: 20500,
    amount: 0,
    kkal: 450,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSumm() {
      return this.amount * this.kkal;
    },
  },
  freshCombo: {
    name: "FRESH COMBO",
    price: 31900,
    amount: 0,
    kkal: 700,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSumm() {
      return this.amount * this.kkal;
    },
  },
};

const btns = document.querySelectorAll(".main__product-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    plusOrMinus(this);
  });
});
function plusOrMinus(el) {
  const parent = el.closest(".main__product"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kkal = parent.querySelector(".main__product-kcall span"),
    attribute = el.getAttribute("data-symbol"),
    parentId = parent.getAttribute("id");

  if (attribute == "+") {
    product[parentId].amount++;
  } else if (attribute == "-" && product[parentId].amount > 0) {
    product[parentId].amount--;
  }
  num.innerHTML = product[parentId].amount;
  price.innerHTML = product[parentId].Summ;
  kkal.innerHTML = product[parentId].kkalSumm;
}

const timeExtra = document.querySelector(".header__timer-extra");
window.onload = () => iteration();
function iteration() {
  timeExtra.innerHTML++;
  if (timeExtra.innerHTML < 50) {
    setTimeout(() => {
      iteration();
    }, 10);
  } else if (timeExtra.innerHTML < 100) {
    setTimeout(() => {
      iteration();
    }, 50);
  }
}
const mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewClose = document.querySelector(".view__close"),
  viewImg = document.querySelector(".view img");
for (let i = 0; i < mainProductInfo.length; i++) {
  mainProductInfo[i].addEventListener("dblclick", function () {
    view.classList.add("active");
    addImg(this);
  });
}
function addImg(btn) {
  let img = btn.querySelector(".main__product-img"),
    imgAtt = img.getAttribute("src");
  viewImg.setAttribute("src", imgAtt);
}

viewClose.onclick = () => view.classList.remove("active");
//

// Receipt
const addCart = document.querySelector(".addCart"),
  receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptWindowOut = document.querySelector(".receipt__window-out");

addCart.addEventListener("click", () => {
  receipt.style = `display:flex;`;
  setTimeout(() => {
    receipt.style.opacity = `1`;
    receiptWindow.style = "top:15%";
  }, 500);

  let text = "";
  let totalSum = 0;
  let totalKkal = 0;
  let total = "";
  let objValue = Object.values(product).filter((item) => item.amount);
  for (let i = 0; i < objValue.length; i++) {
    text += `<div class="product">
                <span>${i + 1}</span>
                <p class="product__name">${objValue[i].name}</p>
                <p class="product__amount">${objValue[i].amount} x ${
      objValue[i].price
    } = </p>
                <p class="product__price">${objValue[i].Summ}</p>
              </div>`;
    totalSum += objValue[i].Summ;
    totalKkal += objValue[i].kkalSumm;
    total = `<div class="total">
Total price: <span>${totalSum}</span>sum
Total kkal: <span>${totalKkal}</span>kkal
        </div>`;
  }

  receiptWindowOut.innerHTML = text + total;
});

const windowBtn = document.querySelector('.receipt__window-btn');

windowBtn.onclick = ()=> this.location.reload()
