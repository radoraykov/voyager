import {PlotObject} from '../models/plot';
import {ReduxAction} from './redux-action';

export type BookmarkAction = BookmarkAddPlot | BookmarkRemovePlot | BookmarkModifyNote;

export const BOOKMARK_ADD_PLOT = 'BOOKMARK_ADD_PLOT';
export type BookmarkAddPlot = ReduxAction<typeof BOOKMARK_ADD_PLOT, {
  plot: PlotObject
}>;

export const BOOKMARK_REMOVE_PLOT = 'BOOKMARK_REMOVE_PLOT';
export type BookmarkRemovePlot = ReduxAction<typeof BOOKMARK_REMOVE_PLOT, {
  plot: PlotObject
}>;

export const BOOKMARK_MODIFY_NOTE = 'BOOKMARK_MODIFY_NOTE';
export type BookmarkModifyNote = ReduxAction<typeof BOOKMARK_MODIFY_NOTE, {
  notes: string,
  plot: PlotObject
}>;