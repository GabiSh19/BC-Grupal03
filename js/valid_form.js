// Validacion Formulario

function validateForm() {
    const regExName = /^([a-z ñáéíóú]{1,14})$/i;
    const regExEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
    const regExPhone = /^[0-9+/s]{8,12}$/;
    let inputName = document.querySelector("#form-name").value;
    let inputSurname = document.querySelector("#form-surname").value;
    let inputEmail = document.querySelector("#form-email").value;
    let inputPhone = document.querySelector("#form-phone").value;
    let inputText = document.querySelector("#form-text").value;
    
  
    if (!inputName) {
      alert('Ingrese Nombre');
      return false;
    } else if (!regExName.test(inputName)) {
      alert('El nombre solo debe contener letras');
      return false;
    } else if (!inputSurname) {
      alert('Ingrese Apellido');
      return false;
    } else if (!regExName.test(inputSurname)) {
      alert('El apellido solo debe contener letras');
      return false;
    } else if (!inputEmail) {
      alert('Ingrese Email');
      return false;
    } else if (!regExEmail.test(inputEmail)) {
      alert('El formato de email no cumple los requisitos ej: mail@ejemplo.com');
      return false;
    } else if (!inputPhone) {
      alert('Ingrese Teléfono');
      return false;
    } else if (!regExPhone.test(inputPhone)) {
      alert("El teléfono debe incluir al menos 8 números, ejemplo: +56933333333");
      return false;
    }
    else if (!inputText) {
      alert('Ingrese su comentario en la caja de texto');
      return false;
    } else {
      alert('¡Guardado exitosamente!')
    }
  }
  
  const buttonSubmit = document.querySelector("#form-submit");
  buttonSubmit.addEventListener('click', validateForm)