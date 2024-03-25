document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foods = document.querySelectorAll('input[name="food"]:checked');
    const foodChoices = Array.from(foods).map(food => food.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    // Create table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${foodChoices.join(', ')}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
  
    // Append row to table
    document.getElementById('tableBody').appendChild(newRow);
  
    // Clear form fields
    document.getElementById('myForm').reset();
  });
  