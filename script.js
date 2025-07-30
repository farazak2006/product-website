// Live Search Filter
const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product-card');

searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  products.forEach(product => {
    const title = product.querySelector('h2').textContent.toLowerCase();
    const desc = product.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || desc.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});


// Scroll to Top Button (Optional Feature)
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollToTop';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: #8b5e3c;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

