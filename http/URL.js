/**
 * Created by Administrator on 2016/5/9 0009.
 */
var url = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

var res = url.parse(url);

console.log(res);