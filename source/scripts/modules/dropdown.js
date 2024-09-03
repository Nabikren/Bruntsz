const dropdowns = document.querySelectorAll('.dropdown');

export const initDropdown = () => {
  if (dropdowns.length === 0) return;

  dropdowns.forEach(dropdown => {
    const dropdownTab = dropdown.querySelector('.dropdown__tab');
    const dropdownContent = dropdown.querySelector('.dropdown__content');
    const arrowTab = dropdownTab.querySelector('svg');

    dropdownTab.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = dropdownContent.style.maxHeight;

      if (isOpen) {
        dropdownContent.style.maxHeight = null;
        dropdownContent.style.opacity = 0;
        arrowTab.classList.remove('state');
      } else {
        dropdownContent.style.display = 'block';
        const contentHeight = dropdownContent.scrollHeight + 'px';
        dropdownContent.style.maxHeight = contentHeight;
        dropdownContent.style.opacity = 1;
        arrowTab.classList.add('state');
      }
    });
  });
}
