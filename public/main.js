// add employee
document
  .getElementById("addStaffForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const department = document.getElementById("department").value;
    const position = document.getElementById("position").value;

    fetch(`http://localhost:4004/api/employee`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        department: department,
        position: position,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data) {
          alert("Employee added successfully");
          window.location.reload();
        } else {
          alert("Failed to add employee");
        }
        // // Clear the form
        // document.getElementById("addStaffForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }),
  //   read and populate content
  document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://localhost:4004/api/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(typeof data);
        console.log(data);
        console.log(typeof data.employees);
        console.log(data.employees.length);
        console.log(Object.values(data.employees));
        const table = document.querySelector("#staffTable tbody");

        Object.values(data.employees).forEach((j) => {
          const row = document.createElement("tr");
          const cell1 = document.createElement("td");
          cell1.textContent = j.first_name;
          row.appendChild(cell1);
          const cell2 = document.createElement("td");
          cell2.textContent = j.last_name;
          row.appendChild(cell2);
          const cell3 = document.createElement("td");
          cell3.textContent = j.email;
          row.appendChild(cell3);
          const cell4 = document.createElement("td");
          cell4.textContent = j.phone_number;
          row.appendChild(cell4);
          const cell5 = document.createElement("td");
          cell5.textContent = j.department_name;
          row.appendChild(cell5);
          const cell6 = document.createElement("td");
          cell6.textContent = j.position;
          row.appendChild(cell6);

          table.appendChild(row);
        });
      })
      .catch((err) => {
        console.log("Error fetching data", err.message);
      });
  });

// Contact us
document
  .getElementById("contact_us_form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contact_us_name").value;
    const email = document.getElementById("contact_us_email").value;
    const message = document.getElementById("contact_us_message").value;

    try {
      const response = await fetch(`http://localhost:4004/api/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      if (!response) {
        alert("Cannot fetch");
      }
      const data = await response.text();
      console.log(data);
      if (data) {
        console.log(data);
        alert(data);
      } else {
        console.log(data);
        alert(data);
      }
    } catch (error) {
      console.log(error);
    }
  });
