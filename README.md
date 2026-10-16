# anywhere-rules

Anywhere 代理自用订阅：MITM 重写规则集（.amrs）与分流规则集（.arrs）。

在 Anywhere 中订阅：把下面的原始链接填入「添加规则集」，或点一键导入。

## MITM 重写（.amrs）

| 名称 | 订阅链接 |
| --- | --- |
| iTunes解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-unlock.amrs |
| 小熊油耗VIP | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/xiaoxiong-youhao-vip.amrs |
| 看理想VIP解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/kanlixiang-vip.amrs |
| iTunes系列解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-series-unlock.amrs |
| Reven | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/reven.amrs |
| One | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/one.amrs |
| 扫描全能王 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/camscanner.amrs |

以下两个走转换器动态订阅（未收录为静态文件）：

| 名称 | 订阅链接 | 说明 |
| --- | --- | --- |
| RevenueCat解锁 | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fmuse.ai%2Ffiles%2F1395223436999324%2F1388845809669157%2Fzf0tpx3b2ored9vaztnhl831%2Freheji.sgmodule&name=RevenueCat%E8%A7%A3%E9%94%81&ruleSetRouting=default | 源模块链接约 2026-10-17 过期，过期后需重新转换 |
| App解锁合集 | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchxm1023%2FScript_X%2Fmain%2FCollections.plugin&name=App%E8%A7%A3%E9%94%81%E5%90%88%E9%9B%86&ruleSetRouting=default | 源为 GitHub 稳定地址，动态订阅即可 |

## 分流规则（.arrs）

| 名称 | 订阅链接 |
| --- | --- |
| Gemini（独立，不含其他 AI） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/gemini.arrs |
| Muse（muse.ai，独立） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/muse.arrs |

## 一键导入（Anywhere）

`anywhere://add-rule-set?link=` + 上表链接 URL 编码后的地址，可直接在 Anywhere 中打开导入。
