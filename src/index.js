
const tasks = [
    {
      id: 1,
      title: "Complete documentation",
      completed: false
    },
    {
      id: 2,
      title: "Prepare video tutorial",
      completed: true
    },
    {
      id: 3,
      title: "Review project",
      completed: false
    }
  ];
  
  // Display application welcome message
  console.log("Welcome to Task Manager!");
  
  // Display all tasks
  function displayTasks() {
    console.log("\nMy Tasks:");
  
    tasks.forEach((task) => {
      const status = task.completed ? "Completed" : "Pending";
  
      console.log(`${task.id}. ${task.title} - ${status}`);
    });
  }
  
  // Add a new task
  function addTask(title) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false
    };
  
    tasks.push(newTask);
    console.log(`New task added: ${title}`);
  }
  
  // Run the application
  displayTasks();
  
  addTask("Learn README documentation");
  
  displayTasks();
  