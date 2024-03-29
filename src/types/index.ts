import { ColumnDef } from "@tanstack/react-table";

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

export type ResultProps = CharacterProps[] | EpisodeProps[] | LocationProps[];

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ResponseProps<T> {
  info: Info;
  results: T;
}

export interface DataTableProps<TData, TValue> {
  info: Info;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // TODO: fix types
  // Тут не должно быть any, пока не понял что требует TS.
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  next: () => void;
  prev: () => void;
  cur: number;
}
export interface PageControlsProps {
  next: () => void;
  prev: () => void;
  max: number;
  cur: number;
}
