var data=[];
document.querySelectorAll("#items #video-title").forEach(function (element) {
  var textContent = element.textContent.replace(/\r?\n|\r/g, '').trim();
  data.push(textContent);
});
console.log(data)
