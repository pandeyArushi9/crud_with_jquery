var items = groceryItems;
var editId = null;

// Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var itemToEdit = editId
    ? $.grep(items, function (item) {
        return item.id === editId;
      })[0]
    : null;

  var $formElement = createForm(editId, itemToEdit);
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add Item Function
function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };
  items.push(newItem);
  render();
  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
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

// Update Item Name Function
function updateItemName(newName) {
  items = $.map(items, function (item) {
    if (item.id === editId) {
      return $.extend({}, item, { name: newName });
    }
    return item;
  });
  editId = null;
  render();
  setTimeout(function () {
    alert("Item Updated Successfully!");
  }, 0);
}

// Set Edit ID Function
function setEditId(itemId) {
  editId = itemId;
  render();

  // Focus input after render
  setTimeout(function () {
    $(".form-input").focus();
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

  // Delegate edit button clicks → set editId
  $("#app").on("click", ".edit-btn", function () {
    var itemId = $(this).closest(".single-item").data("id");
    setEditId(itemId);
  });
});
