$(document).ready(function () {
  // Load data to table
  function loadData() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let output = "";

    users.forEach((user, index) => {
      output += `
        <tr class="text-center">
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.city}</td>
          <td>${user.dob}</td>
          <td><button class="btn btn-sm btn-primary px-3 py-[1px] btn-edit" data-id="${
            user.id
          }">Edit</button></td>
          <td><button class="btn btn-sm btn-danger px-3 py-[1px] btn-delete" data-id="${
            user.id
          }">Delete</button></td>
        </tr>
      `;
    });

    $("tbody").html(output);
  }

  // Add user
  function addUser() {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const city = $("#city").val().trim();
    const dob = $("#dob").val().trim();

    if (!name || !email || !city || !dob) {
      $("input").each(function () {
        if ($(this).val().trim() === "") {
          $(this).addClass("border border-danger");
        } else {
          $(this).removeClass("border-danger");
        }
      });
      alert("Please fill in all details.");
      return;
    }

    $("input").removeClass("border-danger").addClass("border-success");

    const user = {
      id: Math.floor(1000 + Math.random() * 9000),
      name,
      email,
      city,
      dob,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    showMessage("User added successfully...");
    count();
    loadData();
    clearForm();
  }

  // Edit user
  function editUser(id) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.id === id);

    if (user) {
      $("#name").val(user.name);
      $("#email").val(user.email);
      $("#city").val(user.city);
      $("#dob").val(user.dob);

      $("#btnSave")
        .off("click")
        .click(function () {
          updateUser(id);
        });
    }
  }

  // Update user
  function updateUser(id) {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const city = $("#city").val().trim();
    const dob = $("#dob").val().trim();

    if (!name || !email || !city || !dob) {
      alert("Please fill in all details.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex((user) => user.id === id);

    if (index > -1) {
      users[index] = { id, name, email, city, dob };
      localStorage.setItem("users", JSON.stringify(users));
      showMessage("User updated successfully...");
      loadData();
      clearForm();
    }
  }

  // Delete user
  function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    loadData();
    clearForm();
  }

  // Clear form fields
  function clearForm() {
    $("#name").val("");
    $("#email").val("");
    $("#city").val("");
    $("#dob").val("");
  }

  // Add user on save button click
  $("#btnSave").click(addUser);

  // Handle edit and delete button clicks
  $("tbody").on("click", ".btn-edit", function () {
    const id = $(this).data("id");
    editUser(id);
  });

  $("tbody").on("click", ".btn-delete", function () {
    const id = $(this).data("id");
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
      showMessage("User deleted successfully...");
      count();
    }
  });

  // Show success message with fade effect
  function showMessage(message) {
    let msg = $(".msg").hide();
    msg.html(message).fadeIn(1000);

    setTimeout(function () {
      msg.fadeOut(1000);
      $("input").removeClass("border-success");
    }, 3000);
  }

  // User count function
  function count() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const rowCount = users.length;
    $(".row-count").html("Total user : " + rowCount);
  }
  count();

  // Initial Load
  loadData();
});
