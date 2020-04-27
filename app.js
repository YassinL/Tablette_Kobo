const onOff = document.querySelector('.boutonOn');
let modifyColor = document.querySelector('.screen');

onOff.addEventListener('click', () => {
    modifyColor.classList.toggle('screenB');
    onOff.classList.toggle('boutonOnClick');

})