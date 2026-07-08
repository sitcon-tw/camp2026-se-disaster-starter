# Release 04：Change Request

## 你現在在哪個階段

你已經根據訪談、取捨與流程圖，做出 v1 prototype。

接下來現場傳來新的資訊。這不代表你要立刻加功能，而是要先判斷：

> 新事件打破了我原本哪個設計假設？

這是軟體生命週期中的**變更**。真實專案不會在第一次實作後就停止，新的資料、新需求、新限制會不斷出現。

## 這一階段要完成什麼

請完成四件事：

1. 閱讀 `events/04-change-request/` 裡的新事件。
2. 讓 Codex 先做影響分析，不立刻改 code。
3. 更新 `docs/change-notes.md`，寫出你的判斷。
4. 決定要改版、部分支援，或記錄為目前不支援。

## 你會使用哪些檔案

請閱讀：

- `docs/decisions.md`
- `docs/flow.md`
- `docs/demo-checklist.md`
- `events/04-change-request/README.md`
- `events/04-change-request/incoming-data.json`
- `events/04-change-request/task.md`
- `docs/prompts/change-impact-analysis.md`

請產出或更新：

- `docs/change-notes.md`
- `docs/decisions.md`
- `docs/ai-log.md`

如果你決定改版，也可以修改：

- `src/app/App.tsx`
- `src/components/**` 或 `src/features/**`

## Codex 可以做什麼

Codex 可以幫你：

- 分析新事件影響哪些需求、流程、畫面與資料判斷。
- 找出原本設計接不住的地方。
- 找出可能誤導使用者的地方。
- 建議最小改版範圍。
- 協助更新 `docs/change-notes.md`。
- 在你確認後，協助做小幅前端修改。

## Codex 不應該做什麼

Codex 不應該：

- 一看到新事件就直接改 code。
- 直接把 `events/04-change-request/incoming-data.json` 搬進整理後資料。
- 把未確認或格式不一致的資訊顯示成已確認。
- 把 AI 建議當成真實查核結果。
- 自動決定合併、派工、救災優先順序或現場行動。
- 大幅重寫整個 prototype。

## 完成條件

完成這一階段時，你應該能回答：

- 新事件內容是什麼？
- 它打破了我原本哪個假設？
- 我的流程或畫面哪裡接不住？
- 我選擇支援、部分支援，還是暫時不支援？
- 哪些資訊不能直接相信？
- 我有沒有避免把不確定資訊顯示成已確認？

## 小隊討論

每人先做自己的變更分析，再和小隊討論：

- 誰的新事件處理最保守？
- 誰的處理最容易誤導使用者？
- 誰明確記錄了目前不支援的限制？
- 誰讓 Codex 做了太多決策？
- 哪個設計原本看起來很好，但遇到新事件就不夠了？
