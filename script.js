//your JS code here. If required.
 const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');

    // Add event listeners to each square
    square1.addEventListener('mouseover', () => {
      square2.style.backgroundColor = '#6f4e37'; // Change color to Coffee
      square3.style.backgroundColor = '#6f4e37'; // Change color to Coffee
    });

    square2.addEventListener('mouseover', () => {
      square1.style.backgroundColor = '#6f4e37'; // Change color to Coffee
      square3.style.backgroundColor = '#6f4e37'; // Change color to Coffee
    });

    square3.addEventListener('mouseover', () => {
      square1.style.backgroundColor = '#6f4e37'; // Change color to Coffee
      square2.style.backgroundColor = '#6f4e37'; // Change color to Coffee
    });

    // Reset colors when the cursor leaves any square
    [square1, square2, square3].forEach(square => {
      square.addEventListener('mouseout', () => {
        square1.style.backgroundColor = '#E6E6FA'; // Reset to Lavender
        square2.style.backgroundColor = '#E6E6FA'; // Reset to Lavender
        square3.style.backgroundColor = '#E6E6FA'; // Reset to Lavender
      });
    });