function popup() {
    const open = document.querySelector('.open-btn');
    const close = document.querySelectorAll('.close');
    const next = document.querySelector('.popup__btn_true');
    const popup = document.querySelector('.popup');

    function showPopup (){
        popup.classList.add('active');
    }

    function hidePopup(){
        popup.classList.remove('active');
    }

    function done () {
        alert('DONE')
    }

    function uninstall (){
        hidePopup();
        setTimeout(done, 300);
    }

    open.addEventListener('click', showPopup);

    for(let i = 0; i < close.length; i++){
        close[i].addEventListener('click', hidePopup);
    }

    next.addEventListener('click', uninstall)
}

popup();