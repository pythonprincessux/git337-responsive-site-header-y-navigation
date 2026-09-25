const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1: progressively enhance the document and initialize the narrow state.
document.documentElement.classList.add("js");
button.hidden = false;
list.hidden = true;

// TODO 2: write one named function that keeps aria-expanded and visible state synchronized.
function setMenuState(open) {
  button.setAttribute("aria-expanded", open);
  list.hidden = !open;
}
// TODO 3: use the native button's click event to toggle the state.
button.addEventListener("click", () => {
  const isOpen = button.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});
// TODO 4: close on Escape when open, then return focus to the button.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setMenuState(false);
    button.focus();
  }
});
// Add a comment above every logical step explaining what it does and why it is needed.
