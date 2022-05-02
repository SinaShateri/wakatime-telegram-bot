![alt text](https://github.com/waaeel/wakatime-telegram-bot/blob/master/screenshot.png?raw=true)
## 📖 Usage

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the below installed on your computer

- [Git](https://git-scm.com) _git@2.17.1 or higher\_
- [NodeJS](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) _node@v12 or higher_, _npm@6.9.0 or higher\_
- [Telegram Desktop](https://desktop.telegram.org/) or [Telegram App](https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_IN&gl=US)

### Cloning the repository

```sh
$ git clone https://github.com/waaeel/wakatime-telegram-bot.git
$ cd wakatime-telegram-bot
$ npm install
```

## ⚙️ Configuration

1. Create a file called `.env` in the root directory of your project. OR
   _Note_: Instead of creating a `.env` file, create a replica of the `env.example` file provided

   ```shell
   $ cp env.example .env
   ```

2. Inside the `.env` file, add key `WAKATIME_API_KEY` obtained from [Wakatime Settings](https://wakatime.com/api-key). One must create an account and copy the API Key.

   ```javascript
   WAKATIME_API_KEY = "YOUR OPEN WAKATIME API TOKEN HERE";
   ```

3. Inside the `.env` file, add key `TELEGRAM_TOKEN` and `TELEGRAM_CHAT_ID` obtained from [Telegram Bots App](https://core.telegram.org/bots). Follow the below steps:

   - Click [BotFather](https://t.me/botfather) and open in either Telegram Desktop or Mobile App(search for `@BotFather`)
   - After opening it, press `start` and type `/newbot`
   - Provide a name and a username for the bot. **ensure it ends with `bot` at its end**, for instance `Richierich25_bot`
   - It will provide a link to the newly created bot and provide the `HTTP API Key` or `TELEGRAM_TOKEN`. Open the link provided. **important as the bot has to be started for it to receive messages later**
   - Press `start` or to start chatting with the newly created bot
   - To obtain the `TELEGRAM_CHAT_ID`, search for the `@get_id_bot` account and press`start`
   - it will provide you your chat id

   ```javascript
   TELEGRAM_TOKEN = "YOUR TELEGRAM TOKEN HERE";
   TELEGRAM_CHAT_ID = "YOUR TELEGRAM CHAT ID HERE";
   ```

## 🖥️ Deployment

When you are done with the setup, and have tested locally, we recommend you to deploy it using Github Actions.
We highly recommend to read through the [Using Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/quickstart) docs.

1. Inside the `.github/workflows/build.yml` file, set the desired time interval in [CRON FORMAT](https://www.freeformatter.com/cron-expression-generator-quartz.html) after which you wish the Application to execute and push further notifications

More documention for troubleshooting [CRON FORMAT](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows)

      ```yaml
        schedule:
          - cron: '20 16 * * 0' #every sunday at 4:20pm
      ```

2. Adding API Tokens and Secrets into the repository

   - Open your repository with the application code
   - Click on `Settings` from the Github Menu options
   - Press `Secrets` from the left section
   - Press `New Secret` and add your tokens one by one by giving it a suitable `Name` and `Value`
   - Add `WAKATIME_API_KEY`, `TELEGRAM_TOKEN` and `TELEGRAM_CHAT_ID`

## 🛠️ Technology Used

- NodeJS
- Javascript

## ❤️ Credits

- [Richard Abraham](https://github.com/richierich25/weather-bot)
- [Albert Schweitzer](https://chatbotslife.com/code-every-day-c26022045099)
