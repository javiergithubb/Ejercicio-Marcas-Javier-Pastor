$(document).ready(function() {
  // Display all clients initially
  displayClients(clientes);

  // Filter clients based on search input
  $("#searchInput").on("keyup", function() {
    var searchText = $(this).val().toLowerCase();
    var searchField = $("#searchField").val();
    $(".card").each(function() {
      var clientValue = $(this).find("." + searchField).text().toLowerCase();
      if (clientValue.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

// Function to display clients
function displayClients(clients) {
  var clientsList = $("#clientsList");
  clientsList.empty();
  $.each(clients, function(index, client) {
    var card = $("<div class='card'></div>");
    card.append("<h3 class='name'>" + client.name + "</h3>");
    card.append("<img src='" + client.image + "' alt='" + client.name + "'>");
    card.append("<p class='phone'>Teléfono: " + client.phone + "</p>");
    card.append("<p class='email'>Correo: " + client.email + "</p>");
    clientsList.append(card);
  });
};

let clientes = [
  {
    "name": "Nico Acuña",
    "phone": "6641234567",
    "email": "nicopayaso@gmail.com",
    "image": "imagenes/nico.jpg"
  },
  {
    "name": "Adriano",
    "phone": "6649876543",
    "email": "adriano@gmail.com",
    "image": "imagenes/adriano.jpg"
  },
  {
    "name": "Noel Santiañez",
    "phone": "6643334444",
    "email": "noel@gmail.com",
    "image": "imagenes/noel.jpg"
  },
  {
    "name": "Roberto",
    "phone": "6195556666",
    "email": "roberto@hotmail.com",
    "image": "imagenes/roberto.jpg"
  }
];
