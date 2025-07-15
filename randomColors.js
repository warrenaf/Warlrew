const colorCombinations = [
  {
    background: '#f0f0f0',   // Light gray background
    text: '#333333',          // Dark text
    links: '#007BFF',         // Blue links
  },
  {
    background: '#333333',   // Dark background
    text: '#f0f0f0',          // Light text
    links: '#10c493',         // Green links
  },
  {
    background: '#1a1a1a',   // Darker background
    text: '#e0e0e0',          // Light gray text
    links: '#FF6347',         // Tomato red links
  },
  {
    background: '#fffbf2',   // Light cream background
    text: '#5a5a5a',          // Soft dark text
    links: '#ff6f61',         // Coral red links
  },
];

function applyRandomColors() {
  // Pick a random color combination
  const randomColors = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];

  // Apply the colors to the body and other elements
  document.body.style.backgroundColor = randomColors.background;
  document.body.style.color = randomColors.text;
  
  // Update link colors
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = randomColors.links;
  });
}

// Call the function when the page loads
window.onload = applyRandomColors;