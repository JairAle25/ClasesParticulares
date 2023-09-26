const botonCvu = document.getElementById('cvu');

botonCvu.addEventListener('click', function(event) {
    navigator.clipboard.writeText('Jair.Cornejo.25')
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
  });