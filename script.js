function abrirModal() {
    document.getElementById('meuModal').style.display = 'block';
  }

  function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
  }

  window.onclick = function(event) {
    let modal = document.getElementById('meuModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // botão

  const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})