const container = document.getElementById("countries");

const loadCountryAPI = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countryHTML = countries.map((country) => getCountry(country));
  container.innerHTML = countryHTML.join();
};

const getCountry = (data) => {
  console.log(data);
  return data?.area
    ? `
  <div class="card">
        <img src="${data.flags.png}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.name.common}</h5>
          <hr/>
          <ul class = "list-unstyled">
          <li><span>Continents:</span>${data.continents}</li>
          <li><i class="fa-solid fa-person"></i> <span>Population:</span>${
            data.population
          }</li>
          <li><span>language:</span>
          lkjhg
          ${data?.languages ? Object.values(data?.languages)[0] : "NA"}
         </li>
          <li> <i class="fa-solid fa-star" style="color: gold;"></i><span>Capital:</span>${
            data.capital
          }</li>
          </ul>
          
          
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  `
    : "No data found!";
};

loadCountryAPI();
