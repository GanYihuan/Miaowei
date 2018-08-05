/**
 * Created by ganyihuan on 16/5/10.
 */

function ajax(method, url, data, success) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (method == 'get' && data) {
        url += '?' + data;
    }

    xhr.open(method, url, true);
    if (method == 'get') {
        xhr.send();
    } else {
        // 请求头格式,固定的内容
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                success && success(xhr.responseText);
            } else {
                alert('wrong', +xhr.status);
            }
        }
    }
}


