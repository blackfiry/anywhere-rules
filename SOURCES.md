# 模块原始源地址

本仓库中各模块/规则集的上游原始地址。重新转换或跟进上游更新时用这些地址。

## AMOD 模块（modules/）

| 模块 | 上游源地址 |
|------|-----------|
| bending.amod（bending合集） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/bending.js |
| adapty.amod（adapty合集） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/adapty.js |
| qonversion.amod（qonversion合集） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/qonversion.js |
| apphud.amod（apphud合集） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/apphud.js |
| snow.amod（SNOW解锁） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/snow.js |
| yuredirect.amod（Yu9191链接重定向） | https://raw.githubusercontent.com/ios151/Rewrite/main/YuRedirect.sgmodule |
| goodnotes6.amod（Goodnotes6） | 用户直接提供配置，无上游链接 |
| weidian_remove_ads.amod（微店去广告） | https://kelee.one/Tool/Loon/Lpx/Weidian_remove_ads.lpx（Cloudflare 防护，源码转存 lpx/Weidian_remove_ads.lpx） |
| fleamarket_remove_ads.amod（闲鱼去广告） | https://kelee.one/Tool/Loon/Lpx/FleaMarket_remove_ads.lpx（Cloudflare 防护，源码转存 lpx/FleaMarket_remove_ads.lpx） |
| taobao_remove_ads.amod（淘宝去广告） | https://kelee.one/Tool/Loon/Lpx/Taobao_remove_ads.lpx（Cloudflare 防护，源码转存 lpx/Taobao_remove_ads.lpx） |
| jd_remove_ads.amod（京东去广告） | https://kelee.one/Tool/Loon/Lpx/JD_remove_ads.lpx（Cloudflare 防护，源码转存 lpx/JD_remove_ads.lpx） |
| kanlixiang.amod（看理想 APP端 VIP解锁 + 去广告） | https://raw.githubusercontent.com/Aioneas/Surge/main/Module/kanlixiang.app.sgmodule（视频兼容脚本钉在 commit 8918cca，会员页脚本钉在 commit b29d585，其余走 main 分支；视频脚本前加了一段 Anywhere 兼容垫片（$persistentStore/$httpClient 缺失时兜底），上游原文存 sgmodules/klx_app_video_compat.js） |

## 动态订阅（转换器实时转换）

| 模块 | 上游源地址 |
|------|-----------|
| RevenueCat解锁 | https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js |
| 小浣熊OpenAI反代 | https://raw.githubusercontent.com/LinkPass888/Surge/main/sgmodule/小浣熊OpenAI反代.sgmodule |

## 静态 MITM（mitm/）

| 模块 | 上游源地址 |
|------|-----------|
| fine-pro-vip.amrs（Fine Pro会员解锁） | https://raw.githubusercontent.com/curtinp118/Scripthub/main/scripts/finepro/finepro.js |
| itunes-series-unlock.amrs（iTunes系列解锁） | https://reven.jsforbaby.workers.dev/reven/iTunes.sgmodule |
| xiaoxiong-youhao-vip.amrs（小熊油耗VIP） | https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiaoxiongyouhao.js |
| itunes-unlock.amrs（iTunes解锁） | https://raw.githubusercontent.com/chxm1023/Rewrite/main/iTunes.js |
| reven.amrs（Reven） | https://reven.jsforbaby.workers.dev/reven/reven.sgmodule |
| one.amrs（One） | https://one-api.zzxu.de/one/one.sgmodule |
| kanlixiang-vip.amrs（看理想VIP解锁） | https://raw.githubusercontent.com/ios151/Rewrite/refs/heads/main/klx.sgmodule |
| camscanner.amrs（扫描全能王） | https://yfamilys.com/module/camscanner.sgmodule |

## Surge 模块（sgmodules/）

| 模块 | 上游源地址 |
|------|-----------|
| youtube-enhance-ibl3nd.sgmodule（YouTube 增强：去广告/后台播放/画中画/原生下载/双语字幕，由 IBL3ND 的 Egern 配置转换） | https://raw.githubusercontent.com/IBL3ND/module/refs/heads/main/Egern-YouTube.yaml |

## Loon 插件（lpx/）

| 模块 | 上游源地址 |
|------|-----------|
| kanlixiang.lpx（看理想 APP端 VIP解锁 + 去广告，Loon 插件） | 由 https://raw.githubusercontent.com/Aioneas/Surge/main/Module/kanlixiang.app.sgmodule 转写（[Map Local] → [Rewrite] mock-response-body，[Script] 原文照搬，[MITM] 去 %APPEND%） |

## 分流规则（routing/）

| 规则集 | 上游源地址 |
|--------|-----------|
| apple-ai-clash.yaml | https://raw.githubusercontent.com/RocM301/Apple-Rule/refs/heads/main/Apple-AI.list |
| gemini-clash.yaml | 由仓库内 routing/gemini.arrs 转换，无上游 |
| gemini.list（Gemini，Loon 远程规则，27 条 DOMAIN-SUFFIX + 4 条 DOMAIN-KEYWORD） | 由仓库内 routing/gemini.arrs 转换（Loon .list 格式，订阅时策略设为 PROXY），无上游 |
| Direct-Domains-1.arrs（直连域名 1，100,000 条域名后缀规则） | https://raw.githubusercontent.com/lovebaba1069/anywhere-direct-rules/main/rules/Direct-Domains-1.arrs |
| Direct-Domains-2.arrs（直连域名 2，12,213 条域名后缀规则） | https://raw.githubusercontent.com/lovebaba1069/anywhere-direct-rules/main/rules/Direct-Domains-2.arrs |
| Direct-IP.arrs（直连 IP 网段，10,048 条 IP 段规则） | https://raw.githubusercontent.com/lovebaba1069/anywhere-direct-rules/main/rules/Direct-IP.arrs |
| Direct-Domains-1-clash.yaml | 由仓库内 routing/Direct-Domains-1.arrs 转换（DOMAIN-SUFFIX，100,000 条），无上游 |
| Direct-Domains-2-clash.yaml | 由仓库内 routing/Direct-Domains-2.arrs 转换（DOMAIN-SUFFIX，12,213 条），无上游 |
| Direct-IP-clash.yaml | 由仓库内 routing/Direct-IP.arrs 转换（IP-CIDR 6,552 条 + IP-CIDR6 3,496 条），无上游 |
| Direct-Domains-1.mrs | 由仓库内 routing/Direct-Domains-1.arrs 经 Mihomo convert-ruleset 转制（domain，100,000 条），仅 Mihomo 内核可用 |
| Direct-Domains-2.mrs | 由仓库内 routing/Direct-Domains-2.arrs 经 Mihomo convert-ruleset 转制（domain，12,213 条），仅 Mihomo 内核可用 |
| Direct-IP.mrs | 由仓库内 routing/Direct-IP.arrs 经 Mihomo convert-ruleset 转制（ipcidr，10,048 条去重后存 10,012 条，36 条被更大网段覆盖属冗余），仅 Mihomo 内核可用 |
| adblock.arrs（去广告，247,339 条域名后缀规则） | 由 https://github.com/217heidai/adblockfilters/releases/download/rule/adblockmihomo.mrs 经 Mihomo convert-ruleset 解码后转制（domain，247,339 条） |
| adblock-1.arrs（去广告 1，100,000 条域名后缀规则） | 由仓库内 routing/adblock.arrs 拆分（第 1 部分） |
| adblock-2.arrs（去广告 2，100,000 条域名后缀规则） | 由仓库内 routing/adblock.arrs 拆分（第 2 部分） |
| adblock-3.arrs（去广告 3，47,339 条域名后缀规则） | 由仓库内 routing/adblock.arrs 拆分（第 3 部分） |
| ios-noir.arrs（iOS-NOIR 隐私防护，75 条域名后缀规则） | 由 https://github.com/arnold117/iOS-NOIR/blob/main/shields/ios_noir_shield.module 转换（DOMAIN-SUFFIX，75 条），策略 REJECT |

## 源地址未知的

- app-unlock-collection.amrs（App解锁合集）：已于 2026-10-18 删除（原始 .sgmodule 源地址未存档）
