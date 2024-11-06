function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElelment = document.querySelector("#search-form");
searchFormElelment.addEventListener("submit", handleSearchSubmit);
