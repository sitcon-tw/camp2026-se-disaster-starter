# Prompt：對照流程圖檢查 v1

這個 prompt 用來請 Codex 檢查你的 v1 prototype 是否真的符合 `docs/flow.md`，而不是只是看起來有畫面。

## 使用前先確認

你應該已經有：

- 一個可操作的 v1 prototype
- `docs/flow.md`
- `docs/demo-checklist.md`

## Prompt

```text
請檢查我的 v1 prototype 是否符合流程圖與 demo 檢查表。

請閱讀：
- docs/flow.md
- docs/decisions.md
- docs/demo-checklist.md
- docs/output-paths.md
- src/app/App.tsx
- 相關 component

請不要先修改程式碼。

請回覆：

## 已符合的地方

請列出目前 prototype 已經符合 flow.md 和 demo-checklist 的地方。

## 不符合或不清楚的地方

請列出目前 prototype 和 flow.md 不一致的地方。

## 可能誤導使用者的地方

請特別檢查：
- 是否把未確認資訊顯示成已確認
- 是否把資訊取得方式當成查核結果
- 是否看起來像讓 AI 自動做真偽判斷
- 是否讓行動者誤以為可以直接採取行動

## 最小修正建議

請只提出 1–3 個最小修正，不要新增大型功能。

## 我需要人類決定的地方

請列出哪些不是 Codex 應該自動決定的取捨。
```

## 若要請 Codex 修正

請只選擇你同意的修正，並明確指示：

```text
請只修正以下項目：
- ...

不要新增其他功能。
修正後請更新 docs/ai-log.md 草稿。
```
