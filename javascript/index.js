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
updateTime();
setInterval(updateTime, 1000);
