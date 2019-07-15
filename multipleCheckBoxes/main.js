const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const deleteBtn = document.querySelector('.deleteBtn');
const selectBtn = document.querySelector('.selectBtn');
const selectAll = document.querySelector('.select-all');
const unselect = document.querySelector('.unselect-all');

let lastChecked;

function handleCheck(e) {
  // check if they have the shift key dow
  // and check if they are checking it
  let inBetween = false;

  if (e.shiftKey && this.checked) {
  // loop over every single checkbox
    [...checkboxes].map(checkbox => {

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
      
    });
    
  }

  lastChecked = this;
}

const deleteItem = () => {
  const checkboxes = document.querySelectorAll('input:checked');
  [...checkboxes].map(item => {
    item.parentElement.remove();
  });
};

const toogleHandler = () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('d-none');
}


const selectAllHandler = () => {
  [...checkboxes].map(check => check.checked = true);
  toogleHandler();
}

const unselectAllHandler = () => {
  [...checkboxes].map(check => check.checked = false);
  toogleHandler();
}

// $('#drop-options .dropdown-icon').removeClass('fas fa-check text-blue');
// $(this).children('.dropdown-icon').addClass('fas fa-check text-blue');

deleteBtn.addEventListener('click', deleteItem);
selectBtn.addEventListener('click', toogleHandler);
selectAll.addEventListener('click', selectAllHandler);
unselect.addEventListener('click', unselectAllHandler);