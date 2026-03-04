var items = groceryItems;

// Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var $itemsElement = createItems(items);
  $app.append($itemsElement);
}

// Toggle completed state
function editCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id === itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  render();
}

// Remove item
function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  render();
  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}

// Initialize App
$(document).ready(function () {
  render();

  // Delegate checkbox clicks → toggle completed
  $("#app").on("change", "input[type=checkbox]", function () {
    var itemId = $(this).closest(".single-item").data("id");
    editCompleted(itemId);
  });

  // Delegate remove button clicks → delete item
  $("#app").on("click", ".remove-btn", function () {
    var itemId = $(this).closest(".single-item").data("id");
    removeItem(itemId);
  });
});
