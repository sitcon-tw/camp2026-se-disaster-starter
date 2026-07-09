import type { Phase0JudgementDraft } from "./phase0-types";

export const initialDrafts: Record<string, Phase0JudgementDraft> = {
  "M-001": {
    messyRecordId: "M-001",
    possibleKind: "task_candidate",
    confidence: "low",
    evidence: [
      "社群貼文指出需要十幾人清泥",
      "提到位置為「老雜貨店後面」",
    ],
    blockers: ["地點描述模糊", "來源未驗證", "無時間戳"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "人工質疑：來源未確認；不應直接派工。需聯絡回報者核實時間與位置。",
  },
  "M-002": {
    messyRecordId: "M-002",
    possibleKind: "site_status_candidate",
    confidence: "medium",
    evidence: ["志工更新提及早上還有雨鞋"],
    blockers: ["未標示盤點時間（下午情況不明）"],
    suggestedNextStep: "ask_for_more_info",
    unsafeToActDirectly: true,
    humanReviewNote:
      "請現場志工或負責人再次盤點並回報下一次盤點時間。",
  },
  "M-003": {
    messyRecordId: "M-003",
    possibleKind: "site_status_candidate",
    confidence: "low",
    evidence: ["現場回報：老街口不缺鏟子，較需要水電"],
    blockers: ["回報可能過時或未同步更新"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "核實是否有最新現場盤點支援水電需求。",
  },
  "M-004": {
    messyRecordId: "M-004",
    possibleKind: "announcement_candidate",
    confidence: "low",
    evidence: ["社群貼文稱溪畔活動中心有很多雨鞋可領"],
    blockers: ["來源未驗證、可能與 M-002 衝突"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "請服務台或現場志工確認發放規則與實際庫存。",
  },
  "M-005": {
    messyRecordId: "M-005",
    possibleKind: "announcement_candidate",
    confidence: "low",
    evidence: ["截圖標示『中午前道路封閉』"],
    blockers: ["截圖未標示日期或出處，無法確認是否為官方公告"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "需確認截圖原始來源與發布日期，避免誤導行動。",
  },
  "M-006": {
    messyRecordId: "M-006",
    possibleKind: "site_status_candidate",
    confidence: "low",
    evidence: [
      "有人回報學校側門可當集合點，但另有志工說該處剛淹水",
    ],
    blockers: ["回報矛盾，無明確決策者說明"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "需現場主管確認集合點現況與安全性。",
  },
  "M-007": {
    messyRecordId: "M-007",
    possibleKind: "assignment_candidate",
    confidence: "low",
    evidence: ["社群貼文稱某工班可支援水電，但留言說是昨天名單"],
    blockers: ["可用性時效不明、未直接聯絡該工班"],
    suggestedNextStep: "ask_for_more_info",
    unsafeToActDirectly: true,
    humanReviewNote:
      "需聯絡工班確認是否當日可支援。",
  },
  "M-008": {
    messyRecordId: "M-008",
    possibleKind: "site_status_candidate",
    confidence: "low",
    evidence: ["現場回報：A 區先不要再派人"],
    blockers: ["未說明原因（人手過多/道路危險/任務已完成）"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "請現場負責人說明原因再決定是否恢復派遣。",
  },
  "M-009": {
    messyRecordId: "M-009",
    possibleKind: "site_status_candidate",
    confidence: "medium",
    evidence: [
      "14:20 志工回報臨時集合點接受已報到清淤志工、不收一般物資",
    ],
    blockers: ["未見官方公告同步更新，物流/志工指南需確認"],
    suggestedNextStep: "ask_for_more_info",
    unsafeToActDirectly: true,
    humanReviewNote:
      "請志工站或站方確認臨時政策與公告位置。",
  },
  "M-010": {
    messyRecordId: "M-010",
    possibleKind: "site_status_candidate",
    confidence: "medium",
    evidence: [
      "志工盤點：雨鞋約剩 12 雙，尺寸 26-28；飲水暫不缺；不再收二手衣物",
    ],
    blockers: ["需確認盤點是否為最新且被負責人核實"],
    suggestedNextStep: "ask_for_more_info",
    unsafeToActDirectly: true,
    humanReviewNote:
      "建議再次於預定時間（16:30）重新盤點並更新狀態。",
  },
  "M-011": {
    messyRecordId: "M-011",
    possibleKind: "help_request_candidate",
    confidence: "low",
    evidence: [
      "志工代長者轉述：住家泥水已退，需搬大型家具，位置描述模糊",
    ],
    blockers: [
      "是否經當事人同意公開地址不明、需特殊器具/人力",
    ],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "需確認當事人同意與具體地址，評估是否需專業搬運團隊。",
  },
  "M-012": {
    messyRecordId: "M-012",
    possibleKind: "help_request_candidate",
    confidence: "low",
    evidence: ["外地家屬來電表示親友疑似需要藥品協助"],
    blockers: ["無法確認當事者位置與狀況，來電者非現場"],
    suggestedNextStep: "send_to_human_review",
    unsafeToActDirectly: true,
    humanReviewNote:
      "需核實被幫助者位置與診療需求，確認是否由醫療單位介入。",
  },
};
