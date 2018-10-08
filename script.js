(function() {


  var defaultOrder = [
    {name: "original",
    options: {
      glaze: "creamCheese",
      quantity: 6,
    },
      id: 1,

    },
    {name: "blueberry",
      options: {
        glaze: "creamCheese",
        quantity: 6,
      },
      id: 2,

    },
    {name: "caramel_pecan",
      options: {
        glaze: "creamCheese",
        quantity: 6,
      },
      id: 3,

    },
    {name: "walnut",
      options: {
        glaze: "creamCheese",
        quantity: 6,
      },
      id: 4,

    },
    {name: "citrus",
      options: {
        glaze: "creamCheese",
        quantity: 6,
      },
      id: 5,

    },
    {name: "pumpkin_spice",
      options: {
        glaze: "creamCheese",
        quantity: 6,
      },
      id: 6,

    }
  ]
  function optionsVal (options) {
    var selectedOption;
      for (var i = 0; i < options.length; i++) {
        if (options[i].checked){
          selectedOption = options[i].value;
          break;
        }
      }
      return selectedOption;

  };

  function buildCartItem (id, glaze, quantity) {
    var cartObject = {
      options: {
        glaze: glaze,
        quantity: quantity,
      },
      id: id,
    };
    cartObject.name = defaultOrder[id - 1].name;

    return cartObject;
  };

  function saveShoppingCart(cart) {
    // this is how you save to local storage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  var shoppingCart = [];

  function addToCart(e) {
    if (e && e.target) {
      e.preventDefault();

      var quantityOptions;
      var glazeOptions;

      if (document.getElementsByName('quantity').length || document.getElementsByName('glaze').length) {
        quantityOptions = optionsVal(document.getElementsByName('quantity'));
        glazeOptions = optionsVal(document.getElementsByName('glaze'));
      } else {
        quantityOptions = defaultOrder[(e.target.id - 1)].options.quantity;
        glazeOptions = defaultOrder[e.target.id - 1].options.glaze;
      }

      var shoppingCartItem = buildCartItem(e.target.id, glazeOptions, quantityOptions);

      shoppingCart.push(shoppingCartItem);
      // after adding item to array save the array/shopping cart to local storage
      saveShoppingCart(shoppingCart);
      // also update the shopping cart preview count after adding item
      updateShoppingCartPreviewCount();
    }
  };

  var elements = document.getElementsByClassName("order");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", addToCart)
  }

  function updateShoppingCartPreviewCount() {
    // get shopping cart count element to append number later
    var shoppingCartPreviewCountEl = document.getElementById("cart-preview-count");
    if (shoppingCart.length >= 1) {
      // if the shopping cart has one or more items, append that number to the preview count element
      shoppingCartPreviewCountEl.innerHTML = shoppingCart.length;
    } else {
      // if it doesn't remove any number
      shoppingCartPreviewCountEl.innerHTML = "";
    }
  }

  // this runs on page load to check if anything has been saved to local storage
  function loadShoppingCart() {
    if (localStorage.getItem('shoppingCart')) {
      // the data is saved to local storage as JSON so we need to parse the json to turn it into an js object
      shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }

    // update cart preview number, the function has the logic to display a number if greater than one item
    updateShoppingCartPreviewCount();
  }

  loadShoppingCart();

}());
