var items = groceryItems;

// Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var $itemsElement = createItems(items);
  $app.append($itemsElement);
}

// Initialize App
$(document).ready(function () {
  render();
});
