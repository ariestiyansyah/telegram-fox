var button = require("sdk/ui/button/action").ActionButton({
    id: "telegram-fox",
    label: "Telegram Fox",
    icon: {
      "16": "./16.png",
      "32": "./32.png"
    },
    onClick: telegram
});

function telegram(state) {
    var panel = require("sdk/panel").Panel({
        contentURL: "https://web.telegram.org/",
        width: 400,
        height: 550,
        position: button
    });
    panel.show();
};

var notifications = require("sdk/notifications");
var myIconURL = "./32.png";

notifications.notify({
      text: "Telegram Fox",
      iconURL: myIconURL
});

