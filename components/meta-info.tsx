import { Calendar, Hash, RefreshCw } from "lucide-react";

interface MetaInfoProps {
  // The date when the post was published
  publishDate: Date;
  // the date when the post was last updated
  updateDate: Date;
  // The number of post starting from 0
  issueNumber: number;
}

export function MetaInfo({
  publishDate,
  updateDate,
  issueNumber,
}: MetaInfoProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Calendar className="w-3 h-3" />
        <span>{publishDate.toLocaleDateString()}</span>
      </div>
      <div className="flex items-center gap-1">
        <RefreshCw className="w-3 h-3" />
        <span>{updateDate.toLocaleDateString()}</span>
      </div>
      <div className="flex items-center gap-1">
        <Hash className="w-3 h-3" />
        <span>{issueNumber}</span>
      </div>
    </div>
  );
}
