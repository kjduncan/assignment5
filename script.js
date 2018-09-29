(function() {


  var defaultOrder = [
    {name: "original",
    options: {
      glaze: "cream cheese",
      quantity: 6,
    },
      id: 1,

    },
    {name: "blueberry",
      options: {
        glaze: "cream cheese",
        quantity: 6,
      },
      id: 2,

    },
    {name: "caramel_pecan",
      options: {
        glaze: "cream cheese",
        quantity: 6,
      },
      id: 3,

    },
    {name: "walnut",
      options: {
        glaze: "cream cheese",
        quantity: 6,
      },
      id: 4,

    },
    {name: "citrus",
      options: {
        glaze: "cream cheese",
        quantity: 6,
      },
      id: 5,

    },
    {name: "pumpkin_spice",
      options: {
        glaze: "cream cheese",
        quantity: 6,
      },
      id: 6,

    }
  ]

  var shoppingCart = [];

  function addToCart(e) {
    if (e && e.target) {
      e.preventDefault();
      console.warn(e.target.id);
      console.warn(_.find(defaultOrder, function(o) { return o.id === 6; }));
      shoppingCart.push(_.find(defaultOrder, function(o) { return o.id === e.target.id; }));
    }
    console.warn(shoppingCart);
  };

  var elements = document.getElementsByClassName("order");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", addToCart)
  }

  // _.find(defaultOrder, ['id', 6]);





}());
