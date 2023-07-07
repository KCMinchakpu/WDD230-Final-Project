function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  formJSON.payment = data.getAll('payment');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.fresh-form');
form.addEventListener('submit', handleFormSubmit);
