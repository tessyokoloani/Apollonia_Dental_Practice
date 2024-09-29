// edit staff

document.getElementById("editStaffForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to update this employee's information?")) {
    //   update data
    const first_name = document.getElementById("editFirstName").value;
    const last_name = document.getElementById("editLastName").value;
    const email = document.getElementById("editEmail").value;
    const phone_number = document.getElementById("editPhoneNumber").value;
    const department_name = document.getElementById("editDepartment").value;
    const position = document.getElementById("editPosition").value;

    fetch(`http://localhost:4004/api/employee`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        department_name,
        position,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Employee successfully updated") {
          console.log(data.message);
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log("Error updating data", err.message);
      });
  }
}),
  //   delete data
  document.querySelector("#deleteStaffForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this employee?")) {
      const email = document.querySelector("#deleteStaffEmail").value;
      console.log(email);
      fetch(`http://localhost:4004/api/employee`, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Employee deleted successfully") {
            console.log(data.message);
            alert("Employee successfully deleted");
            window.location.reload();
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.log("Error deleting data", err.message);
        });
    }
  });
