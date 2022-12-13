export default (userAgent = navigator.userAgent) =>
  /Android/i.test(userAgent)
