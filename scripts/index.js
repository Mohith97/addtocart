  // Get all the box elements
  const boxes = document.querySelectorAll('.box');
  let openContainer = null; 
  // Add click event listener to each box
  boxes.forEach(box => {
      box.addEventListener('click', (event) => {          
          const dropdownContainer = box.querySelector('.dropdwn-container');// Find the dropdown container within this box
          
          if (event.target.closest('.dropdwn-container')) {// Checking if the click target is inside the dropdown container
              return; 
          }
         
          if (openContainer && openContainer !== dropdownContainer) { // Close the currently open container 
              openContainer.style.display = 'none';
          }
         
          if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {//  display property of the dropdown container
              dropdownContainer.style.display = 'block';
              openContainer = dropdownContainer; // Update the currently open container
          } else {
              dropdownContainer.style.display = 'none';
              openContainer = null; // Reset the currently open container
          }
      });
  });