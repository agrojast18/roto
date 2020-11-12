const hamburguer = document.querySelector("navbar-toggler navbar-toggler-right"); 
const menu = document.querySelector("navbar-collapse");

console.log(menu)
console.log(hamburguer)

//cuando alguien toque la ventana dispare otra funcion de flecha
//e.targuet se va a ejecutar cada vez que de un click en pantalla
//y ademas dice que elemento se le dio clic
window.addEventListener("click", e=>{
	if(hamburguer.classList.contains("show") && e.target != menu && e.target != hamburguer){
		menu.classList.toggle("show")
	}
})