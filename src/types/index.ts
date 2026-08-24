export type FactStatus = 'verified_fact' | 'theory' | 'unverified_claim' | 'unresolved_unknown';

export type CategoryId = 
  | 'paranormal'
  | 'sirli-hadiseler'
  | 'qorxulu-yerler'
  | 'cinayet-hadiseleri'
  | 'psixologiya'
  | 'ufo-namelum'
  | 'efsaneler-mifler'
  | 'kosmosun-qaranliq-terefi'
  | 'qeribe-canlilar';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
  subcategories: string[];
  color: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  source?: string;
}

export interface TableRowData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  level?: 2 | 3;
  content: string;
  badge?: 'fact' | 'theory' | 'claim' | 'unknown';
  badgeText?: string;
  image?: string;
  imageCaption?: string;
  table?: TableRowData;
}

export interface KeyFact {
  label: string;
  value: string;
  status?: FactStatus;
}

export interface TimelineEvent {
  date: string;
  event: string;
  source?: string;
  status?: 'fact' | 'theory' | 'claim' | 'unknown';
}

export interface PersonEntity {
  name: string;
  role: string;
  fateOrStatus?: string;
  significance?: string;
}

export interface LocationEntity {
  name: string;
  significance: string;
  coordinates?: string;
}

export interface EvidenceItem {
  item: string;
  category: string;
  foundLocation?: string;
  forensicStatus: string;
  verificationBadge?: 'fact' | 'theory' | 'claim' | 'unknown';
}

export interface TheoryItem {
  name?: string;
  title?: string;
  likelihood?: 'Yüksək' | 'Orta' | 'Aşağı' | 'Təkzib edilmiş' | string;
  probability?: string;
  description: string;
  status?: string;
  scientificConsensus?: string;
  proponents?: string;
  critique?: string;
  counterArguments?: string;
}

export interface ArticleSource {
  title: string;
  author?: string;
  publisher: string;
  year?: string;
  url?: string;
  type: 'academic' | 'government' | 'book' | 'news' | 'documentary' | 'archive' | 'peer_reviewed' | 'official_report' | 'investigation';
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  originalName?: string;
  description: string;
  category: CategoryId;
  subcategory: string;
  tags: string[];
  date: string;
  location: string;
  coordinates?: string;
  status: string; // e.g. "Açılmamış hadisə", "Tarixi qeyd", "Təsdiqlənmiş elmi fakt"
  theoriesCount?: string;
  image?: string;
  imageCaption?: string;
  gallery?: GalleryImage[];
  readingTime: number; // in minutes (e.g. 25)
  wordCount?: number; // e.g. 7842
  views: number;
  trendingScore: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isMostRead?: boolean;
  factStatus: FactStatus;
  publicationStatus?: 'draft' | 'review' | 'published';
  contentWarning?: string;
  lastUpdated: string;
  author?: string;
  tableOfContents: { id: string; title: string; level?: 2 | 3 }[];
  sections: ArticleSection[];
  keyFacts: KeyFact[];
  theories: TheoryItem[];
  timelineTable?: TimelineEvent[];
  peopleTable?: PersonEntity[];
  locationsTable?: LocationEntity[];
  evidenceTable?: EvidenceItem[];
  confirmedFacts?: string[];
  unresolvedQuestions?: string[];
  scientificExplanation?: string;
  sources: ArticleSource[];
  relatedArticleSlugs: string[];
}

export interface ArticleSummary {
  id: string;
  title: string;
  slug: string;
  originalName?: string;
  description: string;
  category: CategoryId;
  subcategory: string;
  tags: string[];
  date: string;
  location: string;
  image: string;
  readingTime: number;
  wordCount?: number;
  views: number;
  trendingScore: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isMostRead?: boolean;
  factStatus: FactStatus;
  publicationStatus?: 'draft' | 'review' | 'published';
  lastUpdated: string;
}

export type GenerationStageNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface GenerationStageInfo {
  stage: GenerationStageNumber;
  title: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  result?: any;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface Comment {
  id: string;
  articleId?: string;
  articleSlug?: string;
  author: string;
  date: string;
  content?: string;
  text?: string;
  likes: number;
  isReported?: boolean;
  reports?: number;
  isApproved?: boolean;
  status?: 'approved' | 'rejected' | 'pending';
  avatar?: string;
  avatarColor?: string;
}

export interface DarkFact {
  id: string;
  text: string;
  category: CategoryId;
  categoryName: string;
  articleSlug: string;
  articleTitle: string;
  isScientific: boolean;
  date: string;
  image?: string;
}

export interface RabbitHoleNode {
  level: number;
  articleSlug: string;
  title: string;
  category: CategoryId;
  hookText: string;
  quote: string;
  image: string;
  nextClue: string;
}

export interface RabbitHoleChain {
  id: string;
  title: string;
  description: string;
  steps: RabbitHoleNode[];
}

export interface DailyMystery {
  id: string;
  date: string;
  title: string;
  articleSlug: string;
  subtitle: string;
  image: string;
  location: string;
  year: string;
  whatHappened: string;
  knownFacts: string[];
  unresolvedTheories: string[];
  whatRemainsUnexplained: string;
  officialVerdict: string;
  sourcesCount: number;
}

export type SupportedLanguage = 'AZ' | 'TR' | 'EN' | 'RU';

export type AdverticaPlacement = 'header' | 'sidebar' | 'in_content' | 'footer' | 'interstitial';

export interface AdverticaAdConfig {
  enabled: boolean;
  publisherId: string;
  headerZoneId?: string;
  sidebarZoneId?: string;
  inContentZoneId?: string;
  footerZoneId?: string;
  customScriptCode?: string;
  showDemoNotice?: boolean;
}

export interface AIInvestigationMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  articleSlug?: string;
  theories?: string[];
  scientificAnalysis?: string;
  isError?: boolean;
}
