var L1 = L;
var R1 = L + obj.offsetWidth;
var T1 = T;
var B1 = T + obj.offsetHeight;
var L2 = oImg.offsetLeft;
var R2 = L2 + oImg.offsetWidth;
var T2 = oImg.offsetTop;
var B2 = T2 + oImg.offsetHeight;
if (R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2) {
  oImg.src = "1.jpg";
} else {
  oImg.src = "2.jpg";
}