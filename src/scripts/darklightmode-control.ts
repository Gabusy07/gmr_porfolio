document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
  const body = document.body as HTMLBodyElement;

  const darkModeClasses = ['bg-gray-900', 'text-white'];
  const lightModeClasses = ['bg-gray-100', 'text-black'];

  toggleButton.addEventListener("click", () => {
    if (darkModeClasses.every(cls => body?.classList?.contains(cls))) {
      setTimeout(()=>{
        lightModeClasses.forEach(cls => body?.classList?.add(cls));
      darkModeClasses.forEach(cls => body?.classList?.remove(cls));

      }, 50);
      
    } else {
      setTimeout(()=>{
        darkModeClasses.forEach(cls => body?.classList?.add(cls));
        lightModeClasses.forEach(cls => body?.classList?.remove(cls));

      }, 50);
     
    }
  });
});