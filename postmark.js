const postmark = require("postmark");
const serverToken = "";
const client = new postmark.ServerClient(serverToken);

export {client}