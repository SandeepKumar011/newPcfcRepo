const { faker } = require("@faker-js/faker");
const { AsYouType, parsePhoneNumber } = require("libphonenumber-js");
const { DataConstants } = require("./DataConstants");
const dataConstants = new DataConstants();

class DataUtils {
    
  getSpecifiedDate(day) {
    let datetime = new Date();
    let numberzofDays;
    if (day.includes("+")) {
      numberzofDays = day.split("+").pop().trim();
      datetime.setDate(datetime.getDate() + numberzofDays * 1);
    } else if (day.includes("-")) {
      numberzofDays = day.split("-").pop().trim();
      datetime.setDate(datetime.getDate() - numberzofDays * 1);
    } else if (day.toLowerCase() === "yesterday") {
      datetime.setDate(datetime.getDate() - 1);
    } else if (day.toLowerCase() === "tomorrow") {
      datetime.setDate(datetime.getDate() + 1);
    } else if (day.toLowerCase() === "today" || day.toLowerCase() === "none") {
      datetime = new Date();
    } else if (day) {
      datetime = new Date(day);
    }
    return datetime;
  }

  getFormattedDate(day, format, locale, timezone) {
    let finalDate;
    //get pst format date
    if (!locale || locale == "") {
      locale = "en-US";
    }
    var options;
    if (format === "full") {
      options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
      };
    } else {
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
    }
    if (timezone) {
      options["timeZone"] = timezone;
    }
    const datetime = this.getSpecifiedDate(day);
    var requiredDate = new Intl.DateTimeFormat(locale, options).format(
      datetime
    );
    finalDate = requiredDate;
    if (format === "full") {
      var updDate = requiredDate.split(",");
      updDate[2] = updDate[2].replace("AM", "am");
      updDate[2] = updDate[2].replace("PM", "pm");
      finalDate = `${updDate[0]},${updDate[1]}${updDate[2]}`;
    }
    return finalDate.toString();
  }

}

module.exports = { DataUtils };
