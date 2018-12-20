function fn(ev) {
  var ev = ev || event;
  var b = true;

  if (ev.wheelDelta) {
    b = ev.wheelDelta > 0 ? true : false;
  } else {
    b = ev.detail < 0 ? true : false;
  }

  if (b) {
    this.style.height = this.offsetHeight - 10 + "px";
  } else {
    this.style.height = this.offsetHeight + 10 + "px";
  }

  if (ev.preventDefault) {
    ev.preventDefault();
  }

  return false;
}