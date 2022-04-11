var headerElement = document.getElementById("header");
var mobileMenu = document.getElementById("menu-btn");
var headerHeight = headerElement.clientHeight;

//Begin function: Open and close menu in mobile
mobileMenu.onclick = function() {
    var isClosed = headerElement.clientHeight === headerHeight ;
    if (isClosed){
      headerElement.style.height = 'auto';
    } else {
      headerElement.style.height = null;  
    }
}
//End function: Open and close menu in mobile

//Eegin function: close menu when click on navbar
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++){
  var menuItem = menuItems[i];

  menuItem.onclick = function(){
  var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

    if (isParentMenu){
      event.preventDefault();
    }else{
      headerElement.style.height = null;
    }
  }
}