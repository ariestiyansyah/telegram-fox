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
