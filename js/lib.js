var menuBorder = document.getElementById ('mobile-menu');
var k = 0;
function mobileMenu (){
	
	if (k == 0) {
		menuBorder.style.display = 'block';
		k++;
	}
	else{
		menuBorder.style.display = 'none';
		k--;
	}
}

menuBorder.innerHTML += document.getElementById ('header-nav').innerHTML;