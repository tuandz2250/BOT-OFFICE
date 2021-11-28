const fs = require("fs");
module.exports.config = {
	name: "Đập",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đập",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đập")==0 || (event.body.indexOf("Đập")==0)) {
		var msg = {
				body: "Tém Lại Nhe 😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/dap.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }