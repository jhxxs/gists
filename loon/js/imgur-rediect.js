// 将原始请求 URL 编码后重定向到目标服务
const url = encodeURIComponent($request.url);
const redirect = `https://img.noobzone.ru/getimg.php?url=${url}`;
$done({ url: redirect });