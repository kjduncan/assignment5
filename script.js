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
        console.warn(defaultOrder[(e.target.id - 1)].options.quantity);
        quantityOptions = defaultOrder[(e.target.id - 1)].options.quantity;
        glazeOptions = defaultOrder[e.target.id - 1].options.glaze;
      }

      var shoppingCartItem = buildCartItem(e.target.id, glazeOptions, quantityOptions);

      shoppingCart.push(shoppingCartItem);
      console.dir(e.target);
      console.warn(shoppingCart);
      // shoppingCart.push(_.find(defaultOrder, function(o) { return o.id === parseInt(e.target.id); }));
    }
    console.warn(shoppingCart);
  };

  var elements = document.getElementsByClassName("order");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", addToCart)
  }

  // _.find(defaultOrder, ['id', 6]);





}());
