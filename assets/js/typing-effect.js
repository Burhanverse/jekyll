var TxtRotate = function (t, e, i) {
  (this.toRotate = e),
    (this.el = t),
    (this.loopNum = 0),
    (this.period = parseInt(i, 10) || 2e3),
    (this.txt = ""),
    this.tick(),
    (this.isDeleting = !1);
};
function randomizeOrder() {
  for (
    var t = document.getElementById("skills"),
      e = t.getElementsByTagName("div"),
      i = document.createDocumentFragment();
    e.length;

  )
    i.appendChild(e[Math.floor(Math.random() * e.length)]);
  t.appendChild(i);
}
TxtRotate.prototype.tick = function () {
  var t = this.loopNum % this.toRotate.length,
    t = this.toRotate[t],
    e =
      (this.isDeleting
        ? (this.txt = t.substring(0, this.txt.length - 1))
        : (this.txt = t.substring(0, this.txt.length + 1)),
      (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"),
      this),
    i = 200 - 100 * Math.random();
  this.isDeleting && (i /= 5),
    this.isDeleting || this.txt !== t
      ? this.isDeleting &&
        "" === this.txt &&
        ((this.isDeleting = !1), this.loopNum++, (i = 500))
      : ((i = this.period), (this.isDeleting = !0)),
    setTimeout(function () {
      e.tick();
    }, i);
};
