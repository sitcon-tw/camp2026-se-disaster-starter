const labels: Record<string, string> = {
  field_report: "現場回報",
  phone_call: "電話轉述",
  social_post: "社群轉傳",
  forwarded_screenshot: "轉傳截圖",
  official_notice: "公告類資訊",
  volunteer_update: "志工回報",
  mock: "模擬資料",
};

export function SourceLabel({ sourceType }: { sourceType: string }) {
  return (
    <span
      className="source-label"
      title="取得方式只描述資訊怎麼進來，不代表可信度或已查核。"
    >
      取得方式：{labels[sourceType] ?? sourceType}（不等於查核）
    </span>
  );
}
