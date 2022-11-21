const buttonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('modalWrapper');

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

documento.addEventListener('keydown', function(event)){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        modalWrapper.classList.add('invisible')

}