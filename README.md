# anywhere-rules

Anywhere 代理自用订阅：MITM 重写规则集（.amrs）与分流规则集（.arrs）。

在 Anywhere 中订阅：把下面的原始链接填入「添加规则集」，或点一键导入。

## MITM 重写（.amrs）

静态快照（转换器原始输出，2026-10-16）：

| 名称 | 订阅链接 |
| --- | --- |
| iTunes解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-unlock.amrs |
| 小熊油耗VIP | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/xiaoxiong-youhao-vip.amrs |
| iTunes系列解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-series-unlock.amrs |
| Reven | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/reven.amrs |
| One | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/one.amrs |
| 扫描全能王 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/camscanner.amrs |

转换器动态订阅（源地址稳定，内容与转换器实时输出一致）：

| 名称 | 订阅链接 |
| --- | --- |
| 看理想VIP解锁 | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fraw.githubusercontent.com%2Fios151%2FRewrite%2Frefs%2Fheads%2Fmain%2Fklx.sgmodule&name=%E7%9C%8B%E7%90%86%E6%83%B3VIP%E8%A7%A3%E9%94%81&ruleSetRouting=default |
| RevenueCat解锁 | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblackfiry%2Fanywhere-rules%2Fmain%2Fsgmodules%2Freheji.sgmodule&name=RevenueCat%E8%A7%A3%E9%94%81&ruleSetRouting=default |
| App解锁合集 | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchxm1023%2FScript_X%2Fmain%2FCollections.plugin&name=App%E8%A7%A3%E9%94%81%E5%90%88%E9%9B%86&ruleSetRouting=default |

## 分流规则（.arrs）

| 名称 | 订阅链接 | 说明 |
| --- | --- | --- |
| Gemini（独立，不含其他 AI） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/gemini.arrs | 含 2026 新增域名 |
| Muse（Meta 系） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/muse.arrs | muse.ai + meta.com / fb.com / facebook.com / fbcdn.net / fbsbx.com |

## 一键导入（Anywhere）

`anywhere://add-rule-set?link=` + 上表链接 URL 编码后的地址，可直接在 Anywhere 中打开导入。
