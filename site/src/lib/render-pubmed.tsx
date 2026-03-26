import { ExternalLink } from "lucide-react";

export function renderWithPubMedLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\(PMID\s*(\d+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const pmid = match[1];
    parts.push(
      <a
        key={match.index}
        href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sage-dark hover:text-dark underline decoration-sage/40 hover:decoration-sage transition-colors font-medium"
      >
        <span>исследование PubMed</span>
        <ExternalLink className="w-3.5 h-3.5 inline" strokeWidth={2} />
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
