const botonCvu = document.getElementById('cvu');

botonCvu.addEventListener('click', function(event) {
    navigator.clipboard.writeText('Jair.Cornejo.25')
    .then(() => {
      Swal.fire({
        position: 'bottom-center',
        icon: 'success',
        title: 'CVU copiado correctamente',
        showConfirmButton: false,
        timer: 1300
      })
    })
    .catch(err => {
      Swal.fire({
        position: 'bottom-center',
        icon: 'error',
        title: 'Error al copiar el CVU',
        showConfirmButton: false,
        timer: 1300
      })
      console.error(err);
    });
  });