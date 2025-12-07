import { TrendingUp, TrendingDown, Clock, ExternalLink, Bookmark } from 'lucide-react';
import { useState } from 'react';

interface InsightCardProps {
  insight: {
    id: number;
    company: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
    priority: string;
    tags: string[];
    sentiment: string;
    isBookmarked: boolean;
  };
  onBookmark: () => void;
}

export function InsightCard({ insight, onBookmark }: InsightCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const priorityColors = {
    high: 'border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50',
    medium: 'border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50',
    low: 'border-slate-200 bg-slate-50',
  };

  const sentimentIcon = insight.sentiment === 'positive' ? TrendingUp : TrendingDown;
  const SentimentIcon = sentimentIcon;
  const sentimentColor = insight.sentiment === 'positive' ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`bg-white border rounded-xl p-4 md:p-5 hover:shadow-lg transition-all ${priorityColors[insight.priority as keyof typeof priorityColors]}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-slate-900 text-sm md:text-base">{insight.company}</span>
            <span className="text-xs px-2 py-0.5 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full border border-slate-200">
              {insight.type}
            </span>
          </div>
          <h4 className="text-slate-900 text-sm md:text-base">{insight.title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <SentimentIcon className={`w-5 h-5 ${sentimentColor}`} />
          <button 
            onClick={onBookmark}
            className="p-1.5 hover:bg-slate-100 rounded transition-colors"
          >
            <Bookmark 
              className={`w-4 h-4 ${insight.isBookmarked ? 'fill-indigo-600 text-indigo-600' : 'text-slate-400'}`} 
            />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-4 text-sm md:text-base">
        {showFullDescription ? insight.description : `${insight.description.slice(0, 150)}...`}
        {insight.description.length > 150 && (
          <button 
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-indigo-600 hover:text-indigo-700 ml-1"
          >
            {showFullDescription ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {insight.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{insight.timestamp}</span>
          </div>
          <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
            <span className="hidden md:inline">View details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
