# Release 03：Build Guide

## 你現在在哪個階段

你已經完成：

- Phase 0 prototype。
- 三個 persona sub-agent 訪談。
- main agent 彙整與自己的取捨決策。
- 自然語言流程描述與 Mermaid 流程圖。

接下來才進入**實作迭代**：用 Codex 根據你的取捨與流程圖，把 Phase 0 prototype 推進到 v1。

## 這一階段的重點

這不是自由加功能。

你的任務是讓 prototype 從「我用 Codex 快速做出來的第一版」變成「根據使用者回饋與流程設計調整過的 v1」。

請把 Codex 當成實作者，而不是產品決策者。

## 你會使用哪些檔案

請閱讀：

- `docs/decisions.md`
- `docs/flow.md`
- `docs/build-goals.md`
- `docs/demo-checklist.md`
- `docs/prompts/build-from-flow.md`
- `docs/prompts/review-against-flow.md`

請更新：

- `src/app/App.tsx`
- `src/components/**` 或 `src/features/**`，依照你的實作需要
- `docs/ai-log.md`

必要時可補充：

- `docs/decisions.md`
- `docs/flow.md`

## Codex 可以做什麼

Codex 可以幫你：

- 根據 `docs/flow.md` 實作 v1 主流程。
- 改善首頁資訊呈現。
- 新增或整理 component。
- 讓畫面更清楚標示需要人工確認、不能直接相信、不能直接變成任務的資訊。
- 檢查成果是否符合 `docs/demo-checklist.md`。
- 更新 `docs/ai-log.md` 草稿。

## Codex 不應該做什麼

Codex 不應該：

- 無視 `docs/decisions.md` 自行決定產品方向。
- 無視 `docs/flow.md` 直接亂加功能。
- 把未確認資訊標成已確認。
- 讓 AI 自動決定資訊是否為真。
- 讓 AI 自動決定救災、派工或行動優先順序。
- 新增後端、資料庫、外部 API 或真實 LLM runtime API。
- 只新增沒被 `src/app/App.tsx` 使用的孤兒 component。

## 完成條件

完成這一階段時，你應該能展示：

- v1 可以從首頁操作。
- v1 有對應你在 `docs/decisions.md` 選定的主要使用者。
- v1 有對應 `docs/flow.md` 的主流程。
- 畫面看得出至少一個需要人工確認的地方。
- 畫面看得出至少一個不能直接相信或不能直接處理的資訊。
- 有一筆操作、判斷或處理紀錄的呈現。
- `docs/ai-log.md` 有記錄 Codex 實作過程。

## 小隊討論

實作過程中可以和小隊討論：

- 哪個 prompt 讓 Codex 最能照流程實作？
- 哪裡 Codex 又開始替你做產品決策？
- 哪個人的流程圖最容易轉成實作？
- 哪個人的 v1 最能看出人工確認點？
