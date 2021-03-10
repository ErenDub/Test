var menuBorder = document.getElementById ('mobile-menu');
var menuBurger = document.getElementById ('burger');
var k = 0;
function mobileMenu (){
	
	if (k == 0) {
		menuBorder.style.display = 'block';
		menuBurger.style.opacity = '0';
		k++;
	}
	else{
		menuBorder.style.display = 'none';
		menuBurger.style.opacity = '1';
		k--;
	}
}

menuBorder.innerHTML += document.getElementById ('header-nav').innerHTML;