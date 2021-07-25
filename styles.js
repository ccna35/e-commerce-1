var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0%";

function showmenu() {
  if (MenuItems.style.maxHeight == "0%") {
    MenuItems.style.maxHeight = "100%";
  } else {
    MenuItems.style.maxHeight = "0%";
  }
}
