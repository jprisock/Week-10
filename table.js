(function () {
  const Table = document.getElementById("tableBody"); // finds tbody element to insert new rows
  const Confirm = document.getElementById("confirm"); // finds confirm button to add event listener

  Confirm.addEventListener("click", function () {
    // adds click event listener to confirm button
    let firstName = document.getElementById("inputFirstName").value; // finds all input fields and gets their values
    let lastName = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    const row = document.createElement("template"); // creates a template element to insert new rows and table data
    // use template literals to insert values into table data
    if (firstName && lastName && email != null) {
      row.innerHTML = `<tr>
        <td>${firstName}</td> 
        <td>${lastName}</td>
        <td>${email}</td>
        </tr>`;
      Table.appendChild(row.content.firstElementChild); // appends new row to table
    } else return;
  });
})();
