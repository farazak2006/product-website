// Simple button alert (can be expanded to form submission or cart logic)
document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.querySelector(".buy-btn");

  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      alert("Order confirmed! Thank you for purchasing 🌿");
    });
  }
});
