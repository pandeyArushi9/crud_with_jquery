// Create SingleItem Element
function createSingleItem(item) {
  // Wrapper div with data-id
  var $div = $('<div class="single-item"></div>').attr("data-id", item.id);

  // Inner HTML
  $div.html(`
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
      ${item.name}
    </p>
    <button class="btn icon-btn edit-btn" type="button" title="Edit item">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button" title="Remove item">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `);

  // Checkbox event → call editCompleted
  $div.find('input[type="checkbox"]').on("change", function () {
    editCompleted(item.id);
  });

  // Remove button event → call removeItem
  $div.find(".remove-btn").on("click", function () {
    removeItem(item.id);
  });

  // Edit button event → call setEditId
  $div.find(".edit-btn").on("click", function () {
    setEditId(item.id);
  });

  return $div;
}
