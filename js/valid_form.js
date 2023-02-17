// Validacion Formulario

function validateForm() {
    const regExName = /^([a-z ñáéíóú]{2,60})$/i;
      const regExEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
    const regExPhone = /[0-9]$/;
    let inputName = document.querySelector("#form-name").value;
    let inputPhone = document.querySelector("#form-phone").value;
    let inputEmail = document.querySelector("#form-email").value;
    let inputAddress = document.querySelector("#form-address").value;
    let inputText = document.querySelector("#form-text").value;
    
  
    if (!inputName) {
      alert('Ingrese Nombre Completo');
    } else if (!regExName.test(inputName)) {
      alert('El nombre solo debe contener letras');
    } else if (!inputPhone) {
      alert('Ingrese Telefono');
    } else if (!regExPhone.test(inputPhone)) {
      alert('El telefono solo debe contener numeros');
    } else if (!inputEmail) {
      alert('Ingrese Email');
    } else if (!regExEmail.test(inputEmail)) {
      alert('El formato de email no cumple los requisitos ej: mail@ejemplo.com')
    } else if (!inputAddress) {
      alert('Ingrese Direccion');
    } else if (!inputText) {
      alert('Ingrese su pedido en la caja de texto');
    }
  }
  
  const buttonSubmit = document.querySelector("#form-submit");
  buttonSubmit.addEventListener('click', validateForm)