// 豆瓣去广告 - Surge 配套脚本
// 作者: ishowshu / fmz200 (Loon 插件), 本脚本为 Surge 转换版
// http-request: 直接返回 200 + {} (application/json), 不发出实际请求
$done({ response: { status: 200, headers: { "Content-Type": "application/json" }, body: "{}" } });
