const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch('/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    const paintableTotalArea = data.paintableTotalArea;
    const paintLiters = data.paintLiters;
    const paintCans = data.paintCans;
    resultDiv.innerHTML = `Área pintável total: ${paintableTotalArea} m2. Quantidade de litros de tinta necessários: ${paintLiters}. Latas de tintas necessárias: ${paintCans}`;
  
  })
  .catch(error => console.error(error));
});
