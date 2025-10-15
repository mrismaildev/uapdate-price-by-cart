const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const quantity = document.querySelector('.quantity');
const itemPrice = document.querySelector('.item-price');
const price = document.querySelector('.price');

const basePrice = parseFloat(itemPrice.textContent.replace('$', ''));
let count = parseInt(quantity.textContent);
function updateItemPrice() {
  const total =basePrice*count
  itemPrice.textContent = `$${total.toFixed(2)}`;
  updateTotalPrice(total)
}

function updateTotalPrice(total) {
  // Total price এলিমেন্টে মান বসাও
  price.textContent = `$${total.toFixed(2)}`;
}

plusBtn.addEventListener('click', () => {
  count++;
  quantity.textContent = count;
  updateItemPrice();
});

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  quantity.textContent = count;
  updateItemPrice();
});
