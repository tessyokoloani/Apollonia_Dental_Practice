document.getElementById("editDeptForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    confirm("Are you sure you want to update this department's information?")
  ) {
    //   update data
    const existing_name = document.getElementById(
      "existing_department_name"
    ).value;
    const department_name = document.getElementById("editDepartmentName").value;
    const department_code = document.getElementById("editDepartmentCode").value;

    fetch(`http://localhost:4004/api/department`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        existing_name,
        department_code,
        department_name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Department successfully updated") {
          console.log(data.message);
          alert(data.message);
          window.location.reload();
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
  document.getElementById("deleteDeptForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this department?")) {
      const department_name = document.querySelector(
        "#existing_department_name1"
      ).value;
      console.log(department_name);
      fetch(`http://localhost:4004/api/department`, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ department_name: department_name }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Department deleted successfully") {
            console.log(data.message);
            alert("Department successfully deleted");
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

// Add Department

document
  .getElementById("addDepartmentForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const department_name = document.getElementById("department_name").value;
    const department_code = document.getElementById("department_code").value;

    const response = await fetch("http://localhost:4004/api/department", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department_name: department_name,
        department_code: department_code,
      }),
    });
    const data = await response.json();
    if (data.message === "New department successfully created") {
      alert(data.message);
      console.log(data.message);
      window.location.reload();
    } else {
      alert(data.message);
    }
  });
