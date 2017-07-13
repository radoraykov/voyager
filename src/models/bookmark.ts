import {PlotObject} from '../models/plot';

export interface BookmarkItem {
  plot: PlotObject;
  notes: string;
}

export interface Bookmark {
  bookmarks: {[key: string]: BookmarkItem};
  numBookmarks: number;
}

export const DEFAULT_BOOKMARK: Bookmark = {
  bookmarks: {} as {[key: string]: BookmarkItem},
  numBookmarks: 0,
};
