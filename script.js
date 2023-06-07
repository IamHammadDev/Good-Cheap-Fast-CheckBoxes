const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  })
);

function doTheTrick(theClickedOn) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOn) {
      fast.checked = false;
      cheap.checked = false;
    }
    if (cheap === theClickedOn) {
      good.checked = false;
      fast.checked = false;
    }
    if (fast === theClickedOn) {
      cheap.checked = false;
      good.checked = false;
    }
  }
}
