window.addEventListener("load", () => {
  const dialog = document.getElementById("js-dialog");
  document.getElementById("js-dialog-open").addEventListener("click", () => {
    dialog.showModal();
  });
  document.getElementById("js-dialog-close").addEventListener("click", () => {
    dialog.close();
  });

  // Set `indeterminate`
  document.querySelectorAll(".js-indeterminate").forEach((el) => {
    el.indeterminate = true;
  });
});
