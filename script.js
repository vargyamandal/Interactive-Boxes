// Get all boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Toggle expanded class
    box.classList.toggle('expanded');

    // Toggle visibility of options
    const options = box.querySelector('.options');
    options.classList.toggle('hidden');

    // Update box size and color based on user input
    if (box.classList.contains('expanded')) {
      const colorInput = box.querySelector('input[type="color"]');
      const sizeInput = box.querySelector('input[type="range"]');

      colorInput.addEventListener('input', () => {
        box.style.backgroundColor = colorInput.value;
      });

      sizeInput.addEventListener('input', () => {
        box.style.width = `${sizeInput.value}px`;
      });
    }
  });
});