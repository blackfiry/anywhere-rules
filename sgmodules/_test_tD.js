/*******************************

脚本名称: 小熊油耗——解锁VIP
下载地址：https://is.gd/Xfq8EM
软件版本：3.4.9
脚本作者：彭于晏💞
更新时间：2023-9-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https?:\/\/api\.rc-backup\.com\/v1\/(subscribers\/[^/]+|receipts)$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiaoxiongyouhao.js

[mitm] 

hostname = www.xiaoxiongyouhao.com

*******************************/

var body = $response.body.replace(/vip_state":\d/g,'vip_state":2')
.replace(/membership_days":\d+/g,'membership_days":888')
.replace(/vip_valid_till_date":".*?"/g,'vip_valid_till_date":"9999年08月31日"')
$done({ body });
