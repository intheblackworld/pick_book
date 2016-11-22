// 需求
// 可以快速的針對關鍵字以及編號拿到對應網址
// 影片要放上序號
// 2          1
// 影片序號 + 編號
var data = [
    { id: 111, url: 'a'},
    { id: 112, url: 'ab'},
    { id: 012, url: 'abc'},
]

$(document).ready(function() {
    $(".produce_line").on("click", function() {
        new Clipboard('.btn');
        var value = $(".input_line").val();
        var result = _.find(data, {id: +value}).url
        $('.result').html(result);
    })
});
