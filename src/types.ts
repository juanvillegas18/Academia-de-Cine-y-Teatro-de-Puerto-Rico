export interface Program {
  title: string;
  description: string;
  icon: string;
}

export interface ContentData {
  name: string;
  acronym: string;
  summary: string;
  programs: Program[];
  impact: {
    creativeIndustries: string;
    orangeEconomy: string;
  };
  director: {
    name: string;
    title: string;
    bio: string[];
    achievements: string[];
  };
}
