/**
 * Filter array items based on search criteria (query)
 */
function filterItems(query, limit, callback) {
  const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

  const filterName = function (currentValue) {
    return currentValue.toLowerCase().includes(query);
  };

  const nameFiltered = names.filter(filterName);

  const result = callback(nameFiltered, limit);

  console.log(result);
}

function limiter(data, limit) {
  return data.slice(0, limit);
}

filterItems("an", 3, limiter);
