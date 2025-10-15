function removeColor() {
      let colorSelect = document.getElementById('colorSelect');
      let selectedIndex = colorSelect.selectedIndex; 

      if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex); 
      }
    }