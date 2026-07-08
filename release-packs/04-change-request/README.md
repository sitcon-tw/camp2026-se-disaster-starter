# 04 Change Request

這個 release pack 會在 v1 prototype 完成後釋出。

目標：讓學員體驗軟體生命週期中的「變更」。新的現場資訊進來後，不是立刻請 Codex 改功能，而是先分析：原本的需求取捨、流程圖、畫面與資料判斷被打破了什麼。

## 釋出內容

```text
docs/releases/04-change-request.md
docs/change-notes.md
docs/prompts/change-impact-analysis.md
events/04-change-request/README.md
events/04-change-request/incoming-data.json
events/04-change-request/task.md
events/04-change-request/notes-for-review.md
```

## 學員要完成

- 讀取新的未整理事件資料。
- 先請 Codex 做影響分析，不立刻改 code。
- 找出原本設計被打破的假設。
- 判斷要支援、部分支援，還是記錄為目前不支援。
- 若修改前端，必須能從首頁看到變更處理結果。
- 不把未確認資訊顯示成已確認。
- 更新 `docs/change-notes.md`、`docs/decisions.md` 與 `docs/ai-log.md`。
