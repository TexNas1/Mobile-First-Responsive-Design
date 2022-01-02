// setTimeout(() => {
//     document.getElementById('splash').classList.toggle('fade');
// }, 2000);

const dummyData = [
  {
    id: 0,
    category: "Dranken",
    subCategory: "Warme Dranken",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 1,
    category: "Dranken",
    subCategory: "Warme Dranken",
    title: "Espresso",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 2,
    category: "Dranken",
    subCategory: "Warme Dranken",
    title: "Cappuccino",
    price: 3.1,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 3,
    category: "Dranken",
    subCategory: "Frisdranken",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 4,
    category: "Dranken",
    subCategory: "Bieren",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 5,
    category: "Dranken",
    subCategory: "Witte Wijnen Per Fles",
    title: "Espresso",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 6,
    category: "Menu",
    subCategory: "Warme Menu",
    title: "m Espresso",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 7,
    category: "Menu",
    subCategory: "Warme Menu",
    title: "Cappuccino",
    price: 3.1,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 8,
    category: "Menu",
    subCategory: "Frisdranken",
    title: "koffie m",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 9,
    category: "Menu",
    subCategory: "Bieren",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 10,
    category: "Menu",
    subCategory: "Witte Wijnen Per Fles",
    title: "Espresso",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 11,
    category: "Dessert",
    subCategory: "Dessert Dranken",
    title: "Dessert 1",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 12,
    category: "Dessert",
    subCategory: "Bieren",
    title: "Dessert 2",
    price: 3.1,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 13,
    category: "Dessert",
    subCategory: "Frisdranken",
    title: "Dessert 3",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 14,
    category: "Dranken",
    subCategory: "Frisdranken",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 15,
    category: "Dranken",
    subCategory: "Frisdranken",
    title: "koffie",
    price: 2.9,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 16,
    category: "Menu",
    subCategory: "Witte Wijnen Per Fles",
    title: "Cappuccino",
    price: 3.1,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
  {
    id: 17,
    category: "Dessert",
    subCategory: "Bieren",
    title: "Dessert 3",
    price: 4.1,
    imgIcon: "img/coffee.webp",
    imgBig: "img/coffee.png",
  },
];

const CategoryButtons = document.querySelectorAll(".category-main");
const subCategories = document.querySelector(".subcategory");
const selectedData = document.querySelector(".subcategoryWithItems");
const selGrid = document.querySelector(".grid");
const searchBar = document.getElementById("search-prod");
const itemsDisplay = document.querySelector(".display-items");
const subCat = document.querySelector(".subcategory-list");



//load items
window.addEventListener("DOMContentLoaded", function (event) {
  CategoryButtons[0].focus();
  CategoryButtons[0].click();
  // CategoryButtons[0].css('background-color',"#fc7eaefa");
  // displayItems(dummyData);
});

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// search bar, getting entered input
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  // selectedData.innerHTML = ``;

  const subCategoryFiltered = [];
  const filteredProducts = dummyData.filter(function (product) {
    if (product.title.toLowerCase() === searchString) {
      subCategoryFiltered.push(product.subCategory);
      return product;
    }
  });
  // passing the filtered items and subcategories to display function
  displaySubCategories(subCategoryFiltered, filteredProducts);
});

// filter items
CategoryButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    $(".display-items").animate({ scrollTop: 0 }, "fast");
    $(".subcategory-list").animate({ scrollLeft: 0 }, "fast");
    searchBar.value = "";
    const category = e.currentTarget.dataset.id;
    const filterCategory = dummyData.filter(function (Item) {
      if (Item.category === category) {
        return Item;
      }
    });

    // filtering the subcategories
    const filterSubCategories = filterCategory.map(function (item) {
      return item.subCategory;
    });
    uniqueSubCategories = filterSubCategories.filter(onlyUnique);
    // passing the category filtered data and subcategories to main displaying function
    displaySubCategories(uniqueSubCategories, filterCategory);
  });
});

// function to display specific items within a certain subcategory
function displayItems(dataItems) {
  let displayItems = dataItems.map(function (item) {
    return `<div class="item">
            <ul>
              <li><img class="image-main" src="${item.imgIcon}" alt="" /></li>
              <li class="item-details">
                <span class="v-line"></span>
                <h4>${item.title}</h4>
                <ul>
                  <li><p class="desc">&euro; ${item.price.toFixed(2)}</p></li>
                  <li><img class="img-mini" src="img/leaf.svg" alt="" /></li>
                  <li><img class="img-mini" src="img/leaf.svg" alt="" /></li>
                </ul>
              </li>
              <li>
                <button type="button" class="addToCart">
                  <img class="add-cart" src="img/plus.svg" alt="" />
                </button>
              </li>
            </ul>
          </div>`;
  });
  displayItems = displayItems.join("");
  return displayItems;
  //   gridSel.innerHTML = displayItems;
}

// main function which display all items with subcategories
function displaySubCategories(categoryData, dataItems) {
  let SubCategories = categoryData.map(function (item) {
    return `
        <li id="${item}">${item.toUpperCase()}</li>
      `;
  });
  SubCategories = SubCategories.join("");
  subCategories.innerHTML = SubCategories;

  let totalData = categoryData.map(function (item) {
    const filteredItems = dataItems.filter(function (Item) {
      if (Item.subCategory === item) {
        return Item;
      }
    });

    // console.log(gridData);
    return (
      `<div class="subcategory-title">${item}</div>
      <div class="grid">` +
      displayItems(filteredItems) +
      `</div>`
    );
  });
  totalData = totalData.join("");
  selectedData.innerHTML = totalData;
}

jQuery(function ($) {
  $(function () {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    $("html, body").css({ width: w, height: h });
  });
});

// for autoscrolling of subcategories based on items scroll
itemsDisplay.addEventListener("scroll", (event) => {
  const subcategories = document.querySelectorAll(".subcategory-title");
  console.log(itemsDisplay.offsetHeight);

  subcategories.forEach(function (cat) {
    if (isVisible(cat, itemsDisplay)) {
      Topelem = document.getElementById(cat.textContent);
      Topelem.scrollIntoView(true);
      Topelem.style.color = "#fc7eaefa";
    } else {
      otherElem = document.getElementById(cat.textContent);
      otherElem.style.color = "black";
    }
  });
});

// alternative function for autoscrolling of horizontal div
// jQuery(function ($) {
//   $(".display-items").on("scroll", function () {
//     $(".subcategory-list").scrollLeft($(this).scrollTop());
//   });
// });

// functions to check whwther an element is visible in scrollview or not

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

const isVisible = function (ele, container) {
  const { bottom, height, top } = ele.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return top <= containerRect.top
    ? containerRect.top - top <= height
    : bottom - containerRect.bottom <= height;
};
