// JavaScript function to populate the select tag
async function populateSelect() {
  try {
    // Fetch employees from the API
    const response = await fetch("http://localhost:4004/api/department");
    const departments = await response.json();

    // Select the dropdown element
    const selects = document.querySelectorAll(".select");
    selects.forEach((select) => {
      departments.forEach((department) => {
        // Create an option element for each department
        const option = document.createElement("option");
        option.value = department.department_name; // Use MongoDB ID as the option value
        option.textContent = department.department_name; // Display the department name
        // Populate the select with options
        select.appendChild(option);
      });
      // });
    });
  } catch (error) {
    console.log("Error fetching employee data:", error.message);
  }
}

// Call the function to populate the select on page load
window.onload = populateSelect;
