export default (userAgent = navigator.userAgent) =>
  /MicroMessenger/i.test(userAgent)
