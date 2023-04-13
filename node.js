function addRow() {
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1);
    const productCell = newRow.insertCell(0);
    const priceCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const totalCell = newRow.insertCell(3);
    const buttonCell = newRow.insertCell(4);
  
    productCell.innerHTML = '<input type="text" name="product_name[]" required>';
    priceCell.innerHTML = '<input type="number" name="price[]" min="0" step="0.01" required>';
    quantityCell.innerHTML = '<input type="number" name="quantity[]" min="0" required>';
    totalCell.textContent = '$0.00';
    buttonCell.innerHTML = '<button type="button" class="button" onclick="removeRow(this)">Remove</button>';
  }
  
  function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  const form = document.getElementById('billing-form');
  const totalButton = document.getElementById('total-button');
  const grandTotalCell = document.getElementById('grand-total');
  
  totalButton.addEventListener('click', () => {
    const totalCells = document.querySelectorAll('table tbody td:nth-child(4)');
    let grandTotal = 0;
    for (let i = 0; i < totalCells.length; i++) {
      const price = parseFloat(totalCells[i].previousElementSibling.previousElementSibling.querySelector('input').value);
      const quantity = parseInt(totalCells[i].previousElementSibling.querySelector('input').value);
      const total = price * quantity;
      totalCells[i].textContent = '$' + total.toFixed(2);
      grandTotal += total;
    }
    grandTotalCell.textContent = '$' + grandTotal.toFixed(2);
    document.getElementById('total-table').style.display = 'table';
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Billing form submitted!');
    form.reset();
    const totalCells = document.querySelectorAll('table tbody td:nth-child(4)');
    for (let i = 0; i < totalCells.length; i++) {
      totalCells[i].textContent = '$0.00';
    }
    grandTotalCell.textContent = 'Rs 0.00';
    document.getElementById('total-table').style.display = 'none';
  });