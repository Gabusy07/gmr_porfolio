function changeThemeStyle() {
  const body = document.body as HTMLBodyElement;
  const darkModeClasses = ["bg-gray-900", "text-white"];
  const lightModeClasses = ["bg-gray-100", "text-black"];
  const isDarkMode = darkModeClasses.every((cls) =>
    body?.classList?.contains(cls)
  );

  if (isDarkMode) {
    setTimeout(() => {
      lightModeClasses.forEach((cls) => body?.classList?.add(cls));
      darkModeClasses.forEach((cls) => body?.classList?.remove(cls));
      setThemeInLocalStorage("light");
    }, 50);
  } else {
    setTimeout(() => {
      darkModeClasses.forEach((cls) => body?.classList?.add(cls));
      lightModeClasses.forEach((cls) => body?.classList?.remove(cls));
      setThemeInLocalStorage("dark");
    }, 50);
  }
}

function setThemeInLocalStorage(theme: string) {
  localStorage.theme = theme;
}

function setThemeStyleUsingLocalStorageSavedTheme() {
  const body = document.body as HTMLBodyElement;
  const darkModeClasses = ["bg-gray-900", "text-white"];
  const lightModeClasses = ["bg-gray-100", "text-black"];

  if (localStorage.theme === "dark") {
    const toggleButton = document.getElementById(
      "toggleButton"
    ) as HTMLInputElement;
    if (toggleButton) {
      toggleButton.checked = true;
    }
    setTimeout(() => {
      darkModeClasses.forEach((cls) => body?.classList?.add(cls));
      lightModeClasses.forEach((cls) => body?.classList?.remove(cls));
    }, 50);
  } else {
    setTimeout(() => {
      lightModeClasses.forEach((cls) => body?.classList?.add(cls));
      darkModeClasses.forEach((cls) => body?.classList?.remove(cls));
    }, 50);
  }
}

document.addEventListener("astro:page-load", () => {
  const toggleButton = document.getElementById(
    "toggleButton"
  ) as HTMLButtonElement;

  toggleButton.addEventListener("click", () => {
    changeThemeStyle();
  });
});

document.addEventListener("astro:after-swap", () => {
  setThemeStyleUsingLocalStorageSavedTheme();
});
