document.addEventListener("DOMContentLoaded", function () {
  const budgetInput = document.getElementById("budget");
  const budgetValue = document.getElementById("budget-value");

  budgetInput.addEventListener("input", function () {
    budgetValue.textContent = "$" + budgetInput.value;
  });
});
