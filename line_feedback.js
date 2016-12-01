// 需求
// 可以快速的針對關鍵字以及編號拿到對應網址
// 影片要放上序號
// 2          1
// 影片序號 + 編號
var data = [
    { id: 501, url: 'http://yesbrain.org/2016/11/yong-yi-ge-gu-shi-lai-shuo-ming-he-wei-yong-qian-h/'},
    { id: 502, url: 'https://www.youtube.com/watch?v=RBLrPUGSaV4&t=2s'},
    { id: 503, url: 'http://www.gegugu.com/2016/04/13/11216.html'},
]

$(document).ready(function() {
    $(".produce_line").on("click", function() {
        new Clipboard('.btn');
        var value = $(".input_line").val();
        var result = _.find(data, {id: +value}).url
        $('.result').html(result);
    })
});
