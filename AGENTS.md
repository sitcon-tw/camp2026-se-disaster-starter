# Agent Instructions

## 0. Repo 角色

這個 repo 是 SITCON Camp 2026 軟體工程課程的 public starter 與課中 release-pack 發佈來源。

目前專案狀態：

- Phase 0 public 起始專案。
- 已放入的課中教材包只有 `release-packs/01-interview-kit/` 與 `release-packs/02-flow-design-kit/`。
- 這次課程沒有放入 `03-build-guide`、`04-change-request`、`05-handoff-kit` 或其他後續教材包。不要自行建立、引用或預設那些內容。

Phase 0 的目標不是完成正式產品，而是讓學員使用 Codex / Coding Agent 快速做出資訊整理工作台，並看見原始資訊中的混亂、不確定性與 AI 推測風險。

Release 01 與 Release 02 都是文件與分析階段，不是前端實作階段：

- Release 01：使用者訪談與需求取捨。
- Release 02：流程設計與 Mermaid 草稿檢查。

v1 重新整理是學員的新實作目標。Phase 0 保留在 `/`，v1 成果放在 `/v1/`。

這份 `AGENTS.md` 會跟著 starter 進入學員個人 repo。請同時遵守兩個情境：

- 維護 public starter / release-pack 時：只保留 Phase 0 與已存在的 01、02 教材包，不新增未釋出的後續課程材料。
- 學員課中 repo 收到 release 材料後：把 release 材料當成教材讀取，不要覆蓋或修改；學員成果寫到指定輸出檔案。

## 1. 修改前必讀

修改前請先閱讀：

- `docs/course-context.md`
- `docs/student-context.md`
- `docs/brief.md`
- `docs/output-paths.md`
- `docs/tasks/01-phase-0-messy-sprint.md`
- `docs/tasks/02-phase-0-debrief.md`
- `docs/prompts/phase-0.md`，若存在

若正在維護或使用已放入的 release-pack，請只閱讀實際存在的 release note：

- `release-packs/01-interview-kit/docs/releases/01-interview-kit.md`
- `release-packs/02-flow-design-kit/docs/releases/02-flow-design-kit.md`

若你在學員 repo 中，且講師已經把 release-pack 內容套用到根目錄 `docs/**`，請閱讀套用後實際存在的 `docs/releases/01-interview-kit.md` 或 `docs/releases/02-flow-design-kit.md`。

不要因為編號規則而假設 03 之後的 release 存在，也不要自行補出不存在的 release note。

## 2. 展示入口

可展示成果必須接進 Vite app，並能從首頁看到：

- `src/main.tsx`
- `src/app/App.tsx`

不要只新增未被引用的 component、資料檔、docs 或 tests。

如果新增 UI component，必須由 `src/app/App.tsx` 或它匯入的 component 使用。

## 3. Phase 0 可以做什麼

Coding Agent 可以協助：

- 分析 Phase 0 原始資訊。
- 找出不能判斷的地方。
- 找出不能直接相信的地方。
- 找出不能直接變成志工任務的地方。
- 提出最小前端工作台計畫。
- 實作前端工作台。
- 改善畫面上對「需要人工確認」「尚未確認」「不能直接變成任務」的標示。
- 補 `docs/phase0-observations.md`。
- 補 `docs/ai-log.md`。
- 修正 Phase 0 相關文件與格式。

## 4. Phase 0 不可以做什麼

Coding Agent 不可以：

- 把未確認資訊標成已確認。
- 把 `needs_review` / `unverified` 顯示成 `verified` / `confirmed`。
- 把原始資訊改成正式整理後資料。
- 把推測寫成事實。
- 自動做真實救災判斷。
- 補真實世界資料。
- 查外部社群、地圖、政府資料或新聞來補內容。
- 新增後端。
- 新增資料庫。
- 新增外部 runtime API。
- 呼叫真實 LLM runtime API。
- 放入 API key、密碼或 secrets。
- 放入真實個資。
- 放入真實災情資料。
- 放入真實地圖、真實地址、真實電話或真實人物資料。
- 在 Phase 0 範圍內新增訪談、persona、sub-agent、main agent、流程設計或 Mermaid 教材。
- 新增 build guide、change request、event injection、handoff、showcase 或其他未釋出的後續課程材料。

既有 `release-packs/01-interview-kit/` 與 `release-packs/02-flow-design-kit/` 可以保留它們自己的 persona、prompt 與流程設計教材；那是已釋出的教材包，不是 Phase 0 starter 內容。

## 5. Release-pack 材料規則

本 repo 目前只維護兩個 release-pack：

- `release-packs/01-interview-kit/`
- `release-packs/02-flow-design-kit/`

release-pack 材料由講師準備，視為課程教材或外部輸入。除非使用者明確要求維護教材包本身，不要修改：

- `release-packs/**`
- 學員 repo 中由 release-pack 套用後產生的 `docs/releases/**`
- 學員 repo 中由 release-pack 套用後產生的 `docs/personas/**`
- 學員 repo 中由 release-pack 套用後產生的 `docs/prompts/**`

請使用這些材料來完成任務，但不要把它們改寫成自己的答案。

目前沒有 `events/**` 或變更事件教材。不要自行新增事件資料，也不要直接把外部未整理資料搬進整理後資料夾假裝乾淨。

## 6. 各階段輸出位置

請把學員成果寫到指定輸出位置，避免覆蓋 release 材料。

### Phase 0：探索與原型

Phase 0 成果從站台根路徑 `/` 存取。

可以修改：

- `src/app/App.tsx`
- `src/components/**`
- `src/features/phase-0/**`，若存在或需要新增
- `docs/phase0-observations.md`
- `docs/ai-log.md`

### v1 重新整理

這個階段是在同一份 Phase 0 原始資訊上，重新規劃並實作 v1 前端工作台；不是把 Phase 0 畫面搬到新路徑，也不是預先使用 Release 01 之後的教材。

v1 成果從 `/v1/` 存取。首頁 `/` 保留 Phase 0 入口，並提供進入 `/v1/` 的明確入口。

來源資料仍然只使用：

- `src/fixtures/phase-0/messy-reports.json`

可以修改：

- `src/app/App.tsx`
- `src/components/**`
- `src/features/**`
- `docs/ai-log.md`

`/v1/` 的畫面必須清楚標示資料仍來自 Phase 0 原始資訊；未確認內容不得顯示為已確認。不要新增 v1 fixture，不要新增後端、資料庫、外部 API、地圖或 runtime LLM API。

### Release 01：使用者訪談

這個階段是需求分析，不是實作階段。Codex 可以幫忙寫文件草稿，但不應修改 `src/`。

可以修改：

- `docs/interview-notes.md`
- `docs/interview-summary.md`
- `docs/decisions.md`
- `docs/ai-log.md`

不要修改：

- `src/**`
- `src/app/App.tsx`
- `src/components/**`
- `src/contracts/**`
- `src/fixtures/**`

### Release 02：流程設計

這個階段仍然不是實作階段。Codex 可以幫忙整理流程、產生 Mermaid 草稿、檢查流程漏洞，但流程合理性必須由人檢查。

可以修改：

- `docs/flow.md`
- `docs/decisions.md`
- `docs/ai-log.md`

不要修改：

- `src/**`
- `src/app/App.tsx`
- `src/components/**`
- `src/contracts/**`
- `src/fixtures/**`

### 未釋出的後續階段

目前沒有已釋出的 build guide、變更事件或交接階段教材。不要自行新增 03-05 release-pack、事件資料、變更分析、交接文件或 showcase 內容。

若講師未來明確提供新的 release-pack，先閱讀該 release-pack 的 release note，再依照實際檔案更新這份規則。

## 7. Prompt 檔案規則

public starter 可以保留：

- `docs/prompts/phase-0.md`

既有 release-pack 可以保留它們已放入的 prompt：

- `release-packs/01-interview-kit/docs/prompts/main-agent-summarizer.md`
- `release-packs/01-interview-kit/docs/prompts/subagent-interview.md`
- `release-packs/01-interview-kit/docs/prompts/team-discussion.md`
- `release-packs/02-flow-design-kit/docs/prompts/flow-designer.md`
- `release-packs/02-flow-design-kit/docs/prompts/flow-reviewer.md`

不要新增 build guide、change request、event injection、handoff、showcase 或其他未釋出階段的 prompt。

課中 release 後，這些 prompt 可能出現在學員 repo 的 `docs/prompts/**`。屆時請讀取它們、依照它們協助學員，但不要修改它們。

如果需要 Phase 0 prompt，請只修改 `docs/prompts/phase-0.md`。

## 8. 資料規則

Phase 0、v1、Release 01 與 Release 02 都只使用 Phase 0 原始資訊：

- `src/fixtures/phase-0/`

不要把未整理資料搬進 `src/fixtures/shared/` 假裝乾淨。

不要新增真實資料。

不要新增隱藏變更資料。

`sourceType` 只代表資訊取得方式，也就是資訊怎麼進來；它不是可信度、不是查核結果，也不是官方背書。UI 和文件要把取得方式與查核狀態分開呈現，避免把取得方式寫成會暗示已確認的說法。

遇到外部資料格式不一致時，優先用「轉換器」或在文件中記錄為「需要人工確認」，不要直接污染核心資料格式。

不得自行修改 `CommonRecord`。

## 9. 學員文件用語

學生可見文件請優先使用白話中文：

- 起始專案。
- 起始畫面。
- 原始資訊。
- 未整理資料。
- 整理後資料。
- 資料格式。
- 轉換器。
- 完成條件。
- 畫面從哪個檔案進入。
- 資訊取得方式。
- 需要人工確認。
- 不能直接相信。
- 不能直接變成任務。

若需要保留英文技術詞，請用括號補充，不要讓學生文件充滿英文術語。

## 10. AI 使用紀錄與人類確認

學員使用 AI / Coding Agent 完成重要工作時，必須更新 `docs/ai-log.md`。

不需要逐字貼完整 prompt，但要記錄：

- 我請 agent 做什麼。
- Agent 產出了什麼。
- 我採用或不採用什麼。
- 人類判斷理由。
- 相關檔案或 commit。

AI 產生的訪談彙整、需求取捨、流程圖或變更分析必須保留人類確認痕跡。請盡量使用低成本格式，例如：

- 我採用的 AI 建議。
- 我不採用的 AI 建議。
- 我自己補充的判斷。
- 我仍不確定的地方。

Codex 可以先寫草稿，但學員必須刪除、修改或補充，不能直接把 AI 輸出當成最終決策。

維護 starter 或 release-pack 模板時，不要把維護者自己的操作紀錄寫進學員用的 `docs/ai-log.md` 空模板；只有在更新模板內容或學員成果時才改該檔。

## 11. 驗證

完成前請執行：

```bash
pnpm format
pnpm test
pnpm build
pnpm check
```

若測試因 UI 文案改變而失敗，請同步修正測試。

不確定需求時，不可自行補完為救災決策。
