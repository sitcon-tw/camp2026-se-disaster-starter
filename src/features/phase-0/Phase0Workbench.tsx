import { RecordCard } from "../../components/RecordCard";
import { StatusBadge } from "../../components/StatusBadge";
import { Phase0JudgementCard } from "./Phase0JudgementCard";
import { createPhase0Judgement } from "./phase0-heuristics";
import Phase0Editor from "./Phase0Editor";
import type { Phase0MessyRecord, Phase0JudgementDraft } from "./phase0-types";
import { useState, useEffect } from "react";

export function Phase0Workbench({
  records,
  selectedRecordId,
  onSelect,
}: {
  records: Phase0MessyRecord[];
  selectedRecordId: string;
  onSelect: (recordId: string) => void;
}) {
  const selectedRecord =
    records.find((record) => record.id === selectedRecordId) ?? records[0];
  const safetyBoundary = createPhase0Judgement(selectedRecord);
  const [drafts, setDrafts] = useState<Record<string, Phase0JudgementDraft | undefined>>(() => {
    // 預先建立保守草稿：前 6 筆建立可編輯草稿，其中前 2 筆作為候選並標示需人類質疑
    const initial: Record<string, Phase0JudgementDraft | undefined> = {};
    records.slice(0, 6).forEach((r, i) => {
      if (i < 2) {
        // make first two explicit examples that need human review
        initial[r.id] = {
          messyRecordId: r.id,
          possibleKind: "task_candidate",
          confidence: i === 0 ? "low" : "medium",
          evidence: ["初步候選：需要人工確認來源與時效"],
          blockers: ["來源未完全核實；時間或地點可能不明"],
          suggestedNextStep: "send_to_human_review",
          unsafeToActDirectly: true,
          humanReviewNote:
            i === 0
              ? "人工質疑：來源未確認；不應直接派工。需聯絡回報者核實時間與位置。"
              : "人工質疑：需再次盤點與確認是否為當日現場狀態。",
        };
      } else {
        initial[r.id] = {
          messyRecordId: r.id,
          possibleKind: "unknown",
          confidence: "low",
          evidence: [],
          blockers: ["需人工確認來源/細節"],
          suggestedNextStep: "send_to_human_review",
          unsafeToActDirectly: true,
        };
      }
    });
    return initial;
  });
  const draftCount = Object.keys(drafts).filter((k) => drafts[k]).length;

  function saveDraft(draft: Phase0JudgementDraft) {
    setDrafts((prev) => ({ ...prev, [draft.messyRecordId]: draft }));
  }

  function deleteDraft(recordId: string) {
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[recordId];
      console.debug("Phase0Workbench.deleteDraft", { recordId, prev, next });
      return next;
    });
  }

  // debug: log drafts whenever they change to help investigate UI state
  // (remove this in production)
  useEffect(() => {
    console.debug("Phase0Workbench.drafts", drafts);
  }, [drafts]);

  function resetDraft(recordId: string) {
    setDrafts((prev) => ({ ...prev, [recordId]: undefined }));
  }

  return (
    <div className="workbench">
      <div className="workbench__intro">
        <p className="eyebrow">整理工作台</p>
        <h2>第一階段的成功不是分類正確，而是把為什麼現在還不能判斷說清楚。</h2>
        <p>
          這裡先只標示安全邊界，真正的候選判斷要由小組和 coding agent
          補上；這不是 runtime LLM 分析，也不是正式資料模型。
        </p>
      </div>

      <div className="workbench__layout">
        <aside className="workbench__queue" aria-label="選擇原始資訊">
          {records.map((record) => (
            <button
              className={record.id === selectedRecord.id ? "active" : ""}
              key={record.id}
              type="button"
              onClick={() => onSelect(record.id)}
            >
              <span>{record.id}</span>
              <StatusBadge status={record.verificationStatus} />
              {drafts[record.id] ? <span className="badge badge--draft">草稿</span> : null}
            </button>
          ))}
        </aside>

        <div className="workbench__main">
          <RecordCard record={selectedRecord} />

          <Phase0JudgementCard
            judgement={safetyBoundary}
            record={selectedRecord}
          />

          <Phase0Editor
            record={selectedRecord}
            draft={drafts[selectedRecord.id]}
            onChange={(d) => saveDraft(d)}
            onDelete={() => deleteDraft(selectedRecord.id)}
            onReset={() => resetDraft(selectedRecord.id)}
          />
        </div>

        <aside className="workbench__checklist">
          <h3>第一階段完成檢查</h3>
          <ul>
            <li>Starter 已載入 {records.length} 筆原始資訊</li>
            <li>目前草稿數量：{draftCount}</li>
            <li>請 agent 加上建立、編輯、刪除或重設整理草稿</li>
            <li>至少讓 6 筆原始資訊被嘗試整理成可編輯草稿</li>
            <li>至少挑 2 個候選判斷由人類質疑或修正</li>
            <li>
              把資料品質問題寫進 observations，並記錄 agent 哪裡不能直接相信
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
