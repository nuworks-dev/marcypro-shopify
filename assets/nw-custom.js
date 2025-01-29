document.addEventListener("DOMContentLoaded", () => {
	const decorativeBlocks = document.querySelectorAll('.decorative-block');
	decorativeBlocks.forEach(decorativeBlock => {
	  const parts = decorativeBlock.innerHTML.split('<br>');
	  if (parts.length === 2) { // Ensure there is a <br> to split
		decorativeBlock.innerHTML = `<span class="before-break">${parts[0]}</span><br>${parts[1]}`;
	  }
	});
});
  