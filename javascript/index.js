function updateTime() {
  //Hawaii
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiTime = moment().tz("US/Hawaii");

  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Addis Ababa
  let losAngelesElement = document.querySelector("#addis-ababa");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("Africa/Addis_Ababa");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (event.target.value === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let cityDateElement = cityTime.format("MMMM Do YYYY");
    let cityTimeElement = cityTime.format("h:mm:ss [<small>]A[</small>]");

    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDateElement}</div>
        </div>
        <div class="time">${cityTimeElement}</div>
    </div>
    <a href="/">All Cities</a>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
