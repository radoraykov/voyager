import {PlotObject} from '../models/plot';

export interface BookmarkItem {
  plot: PlotObject;
  notes: string;
  id: number;
}

export interface Bookmark {
  bookmarks: {[key: string]: BookmarkItem};
  numBookmarks: number;
  nextID: number;
}

