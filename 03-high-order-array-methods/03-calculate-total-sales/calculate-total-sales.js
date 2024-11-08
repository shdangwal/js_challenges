function calculateTotalSalesWithTax(products, taxRate) {
  let totalSales = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return totalSales + totalSales * (taxRate / 100);
}

module.exports = calculateTotalSalesWithTax;
