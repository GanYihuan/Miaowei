<!-- 兼容 ie7 -->
<script src="json2.js"></script>
<script>
  var arr = [1, 2, 3];
  // stringify() 对象转成字符串
  alert(JSON.stringify(arr));
  // parse() 字符串转成对象
  var s1 = "[100,200]";
  var a1 = JSON.parse(s1);
  alert(a1);
  var s2 = '{"left":100}';
  var a2 = JSON.parse(s2);
  alert(a2);