function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimezone = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Morelia
  let moreliaElement = document.querySelector("#morelia");
  let moreliaDateElement = moreliaElement.querySelector(".date");
  let moreliaTimeElement = moreliaElement.querySelector(".time");
  let moreliaTimezone = moment().tz("America/Mexico_City");

  moreliaDateElement.innerHTML = moreliaTimezone.format("MMMM Do YYYY");
  moreliaTimeElement.innerHTML = moreliaTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
//left of here------
function updateCity(event) {
  let cityTimezone = event.target.value;
  console.log(cityTimezone);
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
