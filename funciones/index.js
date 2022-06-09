const { ipcRenderer } = require("electron")

const botonMin = document.getElementById("botonMin")
const botonMaxRestore = document.getElementById("botonMaxRestore")
const botonCerrar = document.getElementById("botonCerrar")

//ESCUCHA MINIMIZAR, sendea mensaje para que le main lo ejecute
botonMin.addEventListener("click", () => {
    ipcRenderer.send("minimize")
})

//ESCUCHA CERRAR
botonCerrar.addEventListener("click", () => {
    ipcRenderer.send("close")
})

//Maximizar y restorear
botonMaxRestore.addEventListener("click", () => {
    ipcRenderer.send("maximizeRestoreApp")
})

ipcRenderer.on("isRestored", () => {
    ipcRenderer.send("maximize")
})

ipcRenderer.on("isMaximized", () => {
    ipcRenderer.send("unmaximize")
})

//Cambiar icono maximizar
function changeMaxResBtn(isMaximizedApp) {
    if (isMaximizedApp) {
      botonMaxRestore.style.backgroundImage = "url('src/icon_restore.png')"
    } else {
        botonMaxRestore.style.backgroundImage = "url('src/icon_maximize.png')"
    }
}
  
  
// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isMaximized", () => {
changeMaxResBtn(true)
})
ipcRenderer.on("isRestored", () => {
changeMaxResBtn(false)
})



//Cambiar focus
function changeColorFocus(isFocus) {
if (isFocus) {
    barra.style.backgroundColor = '#212A5E'
} else {
    barra.style.backgroundColor = '#3a3f5d'
}
}


// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isFocus", () => {
changeColorFocus(true)
})

ipcRenderer.on("isInactive", () => {
changeColorFocus(false)
})



/*Función común, 

function minimizarClick() {
	Alert("Click función común")
}

//Función flecha,

const minimizarClick = () => {
	Alert("Click función común")
}

*/
