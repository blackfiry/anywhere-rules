// 美团与美团外卖去广告 - Surge 配套脚本
// 上游: fmz200/wool_scripts (Anywhere AMRS 版经 chikacya 转换), 本脚本为 Surge 转换版
// http-request 规则按 argument 返回本地响应, 不发出实际请求:
//   argument = "{}"  -> 200 + JSON 空对象 (开屏配置/数据接口)
//   argument = "gif" -> 200 + 1px 透明 GIF (图片/视频开屏素材)
if ($argument === "gif") {
  var gif = new Uint8Array([71,73,70,56,57,97,1,0,1,0,240,0,0,255,255,255,0,0,0,33,249,4,0,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59]);
  $done({ response: { status: 200, headers: { "Content-Type": "image/gif" }, body: gif } });
} else {
  $done({ response: { status: 200, body: $argument || "" } });
}
