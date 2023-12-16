// Modal
const modalBtn = document.getElementById("openModalBtn");
const accessibleModal = document.getElementById("accessibleModal");
const closeModal = document.getElementById("closeModalBtn");
let lastClicked;

//Open Modal
modalBtn.addEventListener("click", () => {
  accessibleModal.style.display = "block";
  closeModal.focus();
  overlay.style.display = "block";
  openDialog();
  lastClicked = modalBtn;
});
//Close Modal
closeModal.addEventListener("click", () => {
  accessibleModal.style.display = "none";
  modalBtn.focus();
  overlay.style.display = "none";
  closeDialog();
});

// Dialog
const dialogBtn = document.getElementById("openDialogBtn");
const accessibleDialog = document.getElementById("accessibleDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

//Open Dialog
dialogBtn.addEventListener("click", () => {
  accessibleDialog.style.display = "block";
  closeDialogBtn.focus();
  overlay.style.display = "block";
  openDialog();
  lastClicked = dialogBtn;
});
//Close Dialog
closeDialogBtn.addEventListener("click", () => {
  accessibleDialog.style.display = "none";
  dialogBtn.focus();
  overlay.style.display = "none";
  closeDialog();
});

//Nav menu
const menuBtn = document.getElementById("menuButton");
const navMenu = document.getElementById("menuContent");

menuBtn.addEventListener("click", () => {
  navMenu.hidden = !navMenu.hidden;
  menuBtn.setAttribute("aria-expanded", navMenu.hidden ? "false" : "true");
});

//ESC key
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    accessibleDialog.style.display = "none";
    accessibleModal.style.display = "none";
    overlay.style.display = "none";
    closeDialog();
    lastClicked.focus();
  }
});

//Overlay for masking background
const overlay = document.getElementById("overlay");

//Disabling other buttons when dialog/modal is open
const allButtons = [modalBtn, dialogBtn, menuBtn];

function openDialog() {
  allButtons.forEach((button) => {
    button.setAttribute("tabindex", "-1");
    button.setAttribute("aria-hidden", "true");
  });
}
function closeDialog() {
  allButtons.forEach((button) => {
    button.removeAttribute("tabindex");
    button.removeAttribute("aria-hidden");
  });
}
