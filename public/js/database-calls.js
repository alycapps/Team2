// When user clicks add btn
$("#add").on("click", function(event) {
    event.preventDefault();
  
    // Make a new product object
    var newProduct = {
      item: $("#item-name").val().trim(),
      description: $("#description").val().trim(),
      price: $("#price").val().trim(),
      //negotiable: $("#negotiable").val().trim(),
      //userId: $("#userId").val().trim(),
    };
  
    console.log(newProduct);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/products", newProduct)
      // On success, run the following code
      .then(function() {

        var row = $("<div>");
  
        row.append("<p>" + data[i].item + "</p>");
        row.append("<p>" + data[i].description + "</p>");
        row.append("<p>" + data[i].price + "</p>");
       // row.append("<p>" + data[i].negotiable + "</p>");
        //row.append("<p>" + data[i].barter + "</p>");

        $("#stock-items").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    // item: $("#item-name").val(""),
    // description: $("#description").val(""),
    // price: $("#price").val(""),
    //negotiable: $("#negotiable").val(""),
    //userId: $("#userId").val(""),
  });
  
 
// When the page loads, grab all products for the logged in user
$.get("/api/products/:userId", function(data) {
    //If there is data
    if (data.length !== 0) {
      //Loop through the user's products 
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
  
        row.append("<p>" + data[i].item + "</p>");
        row.append("<p>" + data[i].description + "</p>");
        row.append("<p>" + data[i].price + "</p>");
        //row.append("<p>" + data[i].negotiable + "</p>");
        //row.append("<p>" + data[i].barter + "</p>");

        //Display them
        $("#stock-items").prepend(row);
      }
    }
});