import React from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [countrySelected, setCountrySelected] = React.useState("Afghanistan");

  React.useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  const handleCountryChange = (event) => {
    setCountrySelected(event.target.value);
  };

  return (
    <div className="App">
      {/* dropdown to select country */}
      <select onChange={handleCountryChange}>
        {countries.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>

      {/* Display single country */}
      {countries
        .filter((country) => country.name === countrySelected)
        .map((item) => (
          <div>
            <h1>{item.name}</h1>
            <img src={item.flag} height="200" width="200" />
            {item.languages.map((language) => (
              <p>{language.nativeName}</p>
            ))}
            <p>{item.translations.ja}</p>
            {item.currencies.map((currency) => (
              <p>{currency.name}</p>
            ))}
          </div>
        ))}
    </div>
  );
}

export default App;
