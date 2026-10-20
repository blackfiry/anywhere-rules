// 应用开屏去广告 - Surge 配套脚本
// 来源: @ddgksf2013 StartUpAds (Anywhere AMOD 版经 @chikacya 转换), 本脚本为 Surge 转换版
// 用法:
//   http-request 规则: 按 argument 返回空响应 (200/404), 不发出实际请求
//   http-response 规则: 财新 / 神州租车 / 微信公众号 三处正文替换
if (typeof $response !== "undefined" && $response.body != null) {
  var url = $request.url;
  var body = $response.body;
  if (url.indexOf("gg.caixin.com") > -1) {
    body = body
      .replace(/"sday":"[^"]*"/g, '"sday":"2029-12-01 00:00:00"')
      .replace(/"eday":"[^"]*"/g, '"eday":"2029-12-30 00:00:00"')
      .replace(/"intval":\d/g, '"intval":0');
  } else if (url.indexOf("apiproxy.zuche.com") > -1) {
    body = "{}";
  } else if (url.indexOf("mp.weixin.qq.com") > -1) {
    body = body.replace(/advertisement/g, "ddgksf2013");
  }
  $done({ body: body });
} else {
  $done({ response: { status: parseInt($argument) || 200, body: "" } });
}
