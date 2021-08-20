let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let promBtn = document.querySelector(".icon-campaign");
let monBtn = document.querySelector(".icon-assignment");
let manBtn = document.querySelector(".icon-manage-accounts");
let collapseClose = document.querySelector(".cerrar");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

promBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

monBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

manBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("icon-menu-dropdown", "icon-menu");//replacing the iocns class
  } else {
    // collapseClose.toggle("false");//replacing the iocns class
    closeBtn.classList.replace("icon-menu", "icon-menu");//replacing the iocns class
  }
}