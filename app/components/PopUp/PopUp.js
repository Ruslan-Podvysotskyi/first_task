function popup() {
    const open = document.querySelector('.open-btn');
    const next = document.querySelector('.popup__btn_true');
    const popup = document.querySelector('.popup');



    function showPopup (){
        popup.classList.add('active');
    }

    function removeClass () {
        popup.classList.remove('active');
    }

    function hidePopup(e){
        if(e.target.classList.contains('close')){
            removeClass();
        }
    }


    function done () {
        alert('DONE')
    }

    function uninstall (){
        removeClass();
        setTimeout(done, 300);
    }

    open.addEventListener('click', showPopup);

    popup.addEventListener('click', hidePopup);

    next.addEventListener('click', uninstall);
}

popup();