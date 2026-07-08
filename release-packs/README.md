# Release Packs

這個目錄用來準備課中才會釋出的教學材料。

public starter 只保留 Phase 0；這裡的材料不應在 Phase 0 前進入學員 repo。

每個 release pack 都應盡量採 append-only 設計，只新增檔案，不覆蓋學員已修改的內容。

## 釋出順序

1. `01-interview-kit`：使用者訪談、persona sub-agent、main agent 彙整與人類取捨。
2. `02-flow-design-kit`：自然語言流程描述、Mermaid 產生與人工檢查。
3. `03-build-guide`：根據流程與取捨用 Codex 迭代 v1 prototype。
4. `04-change-request`：新事件、新資料與設計假設變更。
5. `05-handoff-kit`：交接、維護者視角與小隊 showcase 準備。

## 包裝原則

release pack 內的目錄結構應該對應釋出後的目標路徑。例如：

```text
release-packs/01-interview-kit/docs/releases/01-interview-kit.md
```

釋出到學員 repo 後會成為：

```text
docs/releases/01-interview-kit.md
```

## 不要放入

- 真實個資。
- 真實災情資料。
- API key 或 secrets。
- 標準答案。
- 會讓 AI 替學員做最終產品決策的指示。
