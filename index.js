const modal = document.querySelector('.modal');
const accBtn1 = document.querySelector('.acc-btn1');
const accBtn2 = document.querySelector('.acc-btn2');

accBtn1.addEventListener('click',()=>{
    alert('계좌번호 : ');
    // modal.style.display = 'block';
});
accBtn2.addEventListener('click',()=>{
    modal.style.display = 'block';
});
