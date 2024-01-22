document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
  const body = document.getElementById("body_layout") as HTMLBodyElement;

  const darkModeClasses = ['bg-gray-900', 'text-white'];
  const lightModeClasses = ['bg-gray-100', 'text-black'];

  toggleButton.addEventListener("click", () => {
    if (darkModeClasses.every(cls => body.classList.contains(cls))) {
      lightModeClasses.forEach(cls => body.classList.add(cls));
      darkModeClasses.forEach(cls => body.classList.remove(cls));
    } else {
      darkModeClasses.forEach(cls => body.classList.add(cls));
      lightModeClasses.forEach(cls => body.classList.remove(cls));
    }
  });
});