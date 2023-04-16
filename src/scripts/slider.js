let counter = 1; 

export default setInterval(function() {
  const input = document.getElementById(`item-${counter}`);
  input.checked = !input.checked; 
  counter = counter % 4 + 1; 
}, 5000); 