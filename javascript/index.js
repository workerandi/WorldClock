function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#losAngeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimezone = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Tijuana
  let tijuanaElement = document.querySelector("#tijuana");
  if (tijuanaElement) {
    let tijuanaDateElement = tijuanaElement.querySelector(".date");
    let tijuanaTimeElement = tijuanaElement.querySelector(".time");
    let tijuanaTimezone = moment().tz("America/Tijuana");

    tijuanaDateElement.innerHTML = tijuanaTimezone.format("MMMM Do YYYY");
    tijuanaTimeElement.innerHTML = tijuanaTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split(`/`)[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm"
          )} <small> ${cityTime.format("A")}</small></div>
        </div>
        <a href="/"> All Cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
