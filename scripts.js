function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
  
      var removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", function() {
        li.remove();
      });
  
      var editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", function() {
        var newText = prompt("Enter new task text:", taskText);
        if (newText !== null && newText.trim() !== "") {
          li.textContent = newText;
          li.appendChild(removeBtn);
          li.appendChild(editBtn);
        }
      });
  
      li.appendChild(removeBtn);
      li.appendChild(editBtn); // Append edit button after remove button
  
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  var addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", addTask);
  