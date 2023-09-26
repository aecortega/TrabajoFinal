// Variable para mantener un registro del elemento actualmente visible
var elementoActual = null;

// Función para mostrar una imagen
function mostrarImagen(numeroImagen) {
  // Oculta el elemento actual, si existe
  ocultarElemento();

  // Muestra la imagen seleccionada
  var imagen = document.getElementById("imagen" + numeroImagen);
  if (imagen) {
    imagen.style.display = "block";
    elementoActual = imagen;
  }
  // Cambia la propiedad position del footer a 'static' para que no sea fijo
  var footer = document.getElementById("footer");
  if (footer) {
    footer.style.position = "static";
  }
  // Cambia la propiedad width
  var footer = document.getElementById("footer");
  if (footer) {
    footer.style.width = "1;";
  }
}

//funcion para mostrar la vision o mision
function mostrarVision() {
  ocultarElemento();

  var vision = document.getElementById("vision");
  if (vision) {
    vision.style.display = "block";
    elementoActual = vision;
  }
  // Cambia la propiedad position del footer a 'static' para que no sea fijo
  var footer = document.getElementById("footer");
  if (footer) {
    footer.style.position = "static";
  }
}
function mostrarMision() {
  ocultarElemento();

  var mision = document.getElementById("mision");
  if (mision) {
    mision.style.display = "block";
    elementoActual = mision;
  }
  // Cambia la propiedad position del footer a 'static' para que no sea fijo
  var footer = document.getElementById("footer");
  if (footer) {
    footer.style.position = "static";
  }
}

// Función para mostrar un formulario
function mostrarFormulario(numeroFormulario) {
  // Oculta el elemento actual, si existe
  ocultarElemento();

  // Muestra el formulario seleccionado
  var formulario = document.getElementById("formulario" + numeroFormulario);
  if (formulario) {
    formulario.style.display = "block";
    elementoActual = formulario;

    // Cambia la propiedad position del footer a 'static' para que no sea fijo
    var footer = document.getElementById("footer");
    if (footer) {
      footer.style.position = "static";
    }
  }
}

// Función para ocultar el elemento actual
function ocultarElemento() {
  if (elementoActual) {
    elementoActual.style.display = "none";
  }
}
