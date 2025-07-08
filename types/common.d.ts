export interface PostData {
  id: string;
  title: string;
  description: string;
  date: string;
  contentHtml?: string;
}

export interface Plugin {
  id?: string;
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  author?: string;
  category?: string;
  rating?: number;
  downloads?: number;
  version?: string;
  lastUpdated?: string;
  tags?: string[];
  features?: string[];
  screenshots?: string[];
  review?: string | null;
  reviewRating?: number | null;
}
