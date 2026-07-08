# Prompt：維護者接手理解

這個 prompt 用來讓 Codex 協助你理解同隊另一位學員的 repo。

請記得：這一階段是交接與維護，不是重寫別人的專案。

## 使用前先確認

你應該已經打開對方 repo，並能看到：

- `docs/handoff.md`
- `docs/decisions.md`
- `docs/flow.md`
- `docs/change-notes.md`，若存在
- `src/app/App.tsx`

## Prompt

```text
請先不要修改任何檔案。

你是維護者 onboarding 助手。
我正在接手另一位同學的 repo。
請幫我閱讀這個 repo，整理我作為下一位協作者需要知道的事情。

請閱讀：
- README.md
- docs/handoff.md
- docs/decisions.md
- docs/flow.md
- docs/change-notes.md（若存在）
- docs/ai-log.md
- src/app/App.tsx
- 主要 component

請用以下格式回覆：

## 這個 prototype 主要服務誰

## 它的主流程是什麼

## 原作者做過哪些重要取捨

## Change Request 後目前支援 / 不支援什麼

## 我應該先看哪些檔案

## 如果我要做下一個小修改，可能從哪裡開始

## 哪些地方文件不足或容易誤解

## 哪些地方不能讓 AI 自動判斷

請不要修改程式碼。
請不要替我重寫設計。
請不要把未確認資訊當成已確認。
```

## 完成後

請根據 Codex 的整理，填寫：

```text
docs/handoff-review.md
```

如果 Codex 看錯或過度推論，請在 `docs/handoff-review.md` 中記錄。
