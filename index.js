require("dotenv").config();
const request = require("request");
const Telegram = require("node-telegram-bot-api");

const bot = new Telegram(process.env.TELEGRAM_TOKEN);
const bot_id = process.env.TELEGRAM_CHAT_ID;
const wakatimeApiKey = process.env.WAKATIME_API_KEY;

const weekNumber = () => {
  currentdate = new Date();
  var oneJan = new Date(currentdate.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
};

const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

today = new Date();
monday = getMonday(today);

todayString = today.toISOString();
mondayString = monday.toISOString();

startDate = mondayString.split("T");
endDate = todayString.split("T");

wakaURL = "https://wakatime.com/api/v1/users/current/summaries?";
range = "start=" + startDate[0] + "&end=" + endDate[0] + "&";
apiKey = "api_key=" + wakatimeApiKey;

const main = async () => {
  request(wakaURL + range + apiKey, function (err, res, body) {
    jsonBody = JSON.parse(body);
    // customize text format as you like
    bot.sendMessage(
      bot_id,
      `W${weekNumber()} :: TOTAL :: ${jsonBody.cummulative_total.text} `
    );
    if (jsonBody.data[1])
      for (project in jsonBody.data[1].projects) {
        projectName = jsonBody.data[1].projects[project].name;
        time = jsonBody.data[1].projects[project].text;
        // customize text format as you like
        bot.sendMessage(
          bot_id,
          `W${weekNumber()} :: ${projectName} :: ${time} `
        );
      }
  });
};
main();
