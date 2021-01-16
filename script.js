function openNav() {
	document.getElementById('myNav').style.height = "100%";
	document.getElementById('openNav').style.display = "none";
	document.getElementById('myNav').style.position = "fixed";
}
function closeNav() {
	document.getElementById('myNav').style.height = "0";
		document.getElementById('openNav').style.display = "block";
}