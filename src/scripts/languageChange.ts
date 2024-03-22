
import {changeCurrentLanguage } from '../globals';


document.addEventListener("DOMContentLoaded", () => {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
  
    dropdownItems.forEach(item => {
      item.addEventListener("click", () => {
        const language = item.getAttribute("id");
        changeCurrentLanguage(String(language));
        
      });
    });
  });