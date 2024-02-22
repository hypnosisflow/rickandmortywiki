interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterProps {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: CharacterOrigin;
  location?: CharacterLocation;
  image?: string;
  episode?: Array<string>;
  url: string;
  created: string;
}

export interface LocationProps {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
  residents?: Array<string>;
  url: string;
  created: string;
}

export interface EpisodeProps {
  id: number;
  name: string;
  air_date?: string;
  episode?: string;
  characters?: Array<string>;
  url: string;
  created: string;
}
