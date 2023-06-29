// selectors;
const toggleButton = document.querySelector(".toggle-button");

// state;
const theme = localStorage.getItem("theme");

// on mount;
theme && document.body.classList.add("dark-mode");

// handerls;
const toggleHandler = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};
// events;
toggleButton.addEventListener("click", toggleHandler);
