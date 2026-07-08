# Prompt：變更影響分析

這個 prompt 用來請 Codex 分析新事件對你目前 v1 prototype 的影響。

## 使用前先確認

你應該已經有：

- v1 prototype
- `docs/decisions.md`
- `docs/flow.md`
- `docs/demo-checklist.md`

這一階段請先做分析，不要立刻改 code。

## Prompt

```text
請先不要修改程式碼。

你是變更影響分析助手。
請閱讀：
- docs/decisions.md
- docs/flow.md
- docs/demo-checklist.md
- events/04-change-request/README.md
- events/04-change-request/incoming-data.json
- events/04-change-request/task.md

請分析新事件對我目前 v1 prototype 的影響，並更新 docs/change-notes.md 草稿。

請用以下結構回覆：

## 新事件摘要

## 它打破了哪個原本假設

## 需求影響

## 流程影響

## UI 影響

## 資料格式或資料判斷影響

## 需要人工確認的地方

## 不能讓 AI 自動決定的地方

## 最小改版建議

請注意：
- 不要直接把 events/ 裡的資料當成整理後資料。
- 不要把未確認資訊顯示成已確認。
- 不要替我自動決定要合併、派工或救災優先順序。
- 不要提出大型重寫計畫。
- 如果你認為目前不該改 code，也可以建議只記錄為已知限制。
```

## 如果你決定改 code

請先自己判斷是否採用 Codex 的建議。

如果要改，請再給 Codex 明確限制：

```text
我決定只做以下最小修改：
- ...

請只修改必要檔案，讓首頁可以看見這個變更處理。
不要新增其他功能。
請更新 docs/ai-log.md 草稿。
```
