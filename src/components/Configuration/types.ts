export enum Layout {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

export interface Breakpoint {
  layout: Layout;
  query: string;
  matches: boolean;
}
