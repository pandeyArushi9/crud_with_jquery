// Create Form Element
function createForm(editId, itemToEdit) {
  var $form = $("<form></form>");

  // Dynamic input value and button text
  $form.html(`
    <h2>grocery bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `);

  // Form submit handler
  $form.on("submit", function (e) {
    e.preventDefault();
    var $input = $form.find(".form-input");
    var value = $.trim($input.val());

    if (!value) {
      alert("Please provide value");
      return;
    }

    // Add or Edit depending on mode
    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }

    $input.val("");
  });

  return $form;
}
