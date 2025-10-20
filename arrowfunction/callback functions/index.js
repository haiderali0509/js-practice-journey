// list some time when we passed function as argument
// Array methods = foreach, map, reduce
// Settimeout SetInterval
// Event Listeners

function notifyUser(notificationFn) {
  notificationFn();
}
const emailNotify = () => console.log("Email Sent")
const messageNotify = () => console.log("Message Sent")