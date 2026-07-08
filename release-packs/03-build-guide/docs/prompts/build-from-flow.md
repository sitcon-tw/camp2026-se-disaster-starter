# Prompt：根據流程圖實作 v1

這個 prompt 用來請 Codex 根據你的需求取捨與流程圖，實作 v1 prototype。

## 使用前先確認

你應該已經完成：

- `docs/decisions.md`
- `docs/flow.md`
- `docs/build-goals.md`

這一階段可以修改前端程式，但要限制 Codex 的範圍。

## Prompt

```text
請根據我的需求取捨與流程圖，協助我實作 v1 prototype。

請先閱讀：
- docs/decisions.md
- docs/flow.md
- docs/build-goals.md
- docs/demo-checklist.md
- docs/output-paths.md
- docs/ai-log.md

請先輸出一個最小實作計畫，不要立刻改 code。

計畫中請列出：
1. 你會修改哪些檔案
2. v1 會從首頁看到什麼
3. 會對應 flow.md 的哪幾個節點
4. 如何顯示需要人工確認
5. 如何顯示不能直接相信或不能直接變成任務的資訊
6. 如何留下操作、判斷或處理紀錄
7. 哪些事情今天不做

我確認計畫後，才開始修改程式。

限制：
- 不新增後端
- 不新增資料庫
- 不呼叫外部 API
- 不呼叫真實 LLM runtime API
- 不放 API key 或 secrets
- 不查真實地圖、真實地址、真實電話或真實人物資料
- 不修改 CommonRecord
- 不把未確認資訊顯示成已確認
- 不讓 AI 自動決定資訊真偽、救災優先順序或派工
- 成果必須能從 src/app/App.tsx 看到
```

## 確認計畫後的實作 prompt

如果你同意 Codex 的計畫，可以接著說：

```text
我同意這個最小實作計畫。
請開始實作，但只做計畫中的範圍。
完成後請說明：
1. 修改了哪些檔案
2. 對應 demo-checklist 哪些項目
3. 哪些事情沒有做
4. 我需要手動檢查什麼
5. docs/ai-log.md 要新增什麼紀錄
```

## 完成後

請用 `docs/demo-checklist.md` 檢查成果。
