console.log('bobbyhadz.com');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    box.setAttribute('style', 'background-color: yellow;');
  });
});
