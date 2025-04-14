var title=[];
document.querySelectorAll("#items #video-title").forEach(function (element) {
  var textContent = element.textContent.replace(/\r?\n|\r/g, '').trim();
  title.push(textContent);
});
console.log(title);

var urls=[];
document.querySelectorAll("#items #wc-endpoint").forEach(function (element) {
  var textContent = element.href;
  urls.push(textContent);
});
console.log(urls);
