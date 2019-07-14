const checkboxes = document.querySelectorAll('input[type="checkbox"]');

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
      
    })
    
  }

  lastChecked = this;
}

[...checkboxes].map(checkbox => checkbox.addEventListener('click', handleCheck))
