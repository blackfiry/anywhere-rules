# anywhere-rules

Anywhere 代理自用订阅：MITM 重写规则集（.amrs）与分流规则集（.arrs）。

在 Anywhere 中订阅：把下面的原始链接填入「添加规则集」，或点一键导入。

## MITM 重写（.amrs）

除 RevenueCat（动态订阅，每次更新拉取最新转换结果）外，均为转换器原始输出的静态快照（2026-10-16 起）。

| 名称 | 订阅链接 |
| --- | --- |
| iTunes解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-unlock.amrs |
| 小熊油耗VIP | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/xiaoxiong-youhao-vip.amrs |
| 看理想VIP解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/kanlixiang-vip.amrs |
| iTunes系列解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/itunes-series-unlock.amrs |
| Reven | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/reven.amrs |
| RevenueCat解锁（动态） | https://worker.anywhere-converter.ccwu.cc/sub/mitm.amrs?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblackfiry%2Fanywhere-rules%2Fmain%2Fsgmodules%2Freheji.sgmodule&name=RevenueCat%E8%A7%A3%E9%94%81&ruleSetRouting=default |
| One | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/one.amrs |
| App解锁合集 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/app-unlock-collection.amrs |
| 扫描全能王 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/camscanner.amrs |
| Fine Pro会员解锁 | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/mitm/fine-pro-vip.amrs |

> 看理想、RevenueCat、App解锁合集因文件较大存放在仓库根目录，功能无差别。

## 分流规则（.arrs）

| 名称 | 订阅链接 | 说明 |
| --- | --- | --- |
| Gemini（独立，不含其他 AI） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/gemini.arrs | 含 2026 新增域名 |
| Muse（Meta 系） | https://raw.githubusercontent.com/blackfiry/anywhere-rules/main/routing/muse.arrs | muse.ai + meta.com / fb.com / facebook.com / fbcdn.net / fbsbx.com |

## 一键导入（Anywhere）

`anywhere://add-rule-set?link=` + 上表链接 URL 编码后的地址，可直接在 Anywhere 中打开导入。
