import {Action, BOOKMARK_ADD_PLOT, BOOKMARK_MODIFY_NOTE, BOOKMARK_REMOVE_PLOT} from '../actions';
import {Bookmark, BookmarkItem} from '../models';


export function bookmarkReducer(bookmark: Bookmark, action: Action): Bookmark {
  switch (action.type) {
    case BOOKMARK_ADD_PLOT: {
      const {plot} = action.payload;

      const bookmarkItem: BookmarkItem = {
        plot: plot,
        notes: '',
      };

      const newBookmark = {...bookmark};
      newBookmark.numBookmarks++;
      const specKey = JSON.stringify(plot.spec);
      newBookmark.bookmarks[specKey] = bookmarkItem;
      return newBookmark;
    }

    case BOOKMARK_MODIFY_NOTE: {
      const {notes, plot} = action.payload;

      const newBookmark = {...bookmark};
      const specKey = JSON.stringify(plot.spec);
      newBookmark.bookmarks[specKey].notes = notes;
      return newBookmark;
    }

    case BOOKMARK_REMOVE_PLOT: {
      const {plot} = action.payload;

      const newBookmark = {...bookmark};
      newBookmark.numBookmarks--;
      const specKey = JSON.stringify(plot.spec);
      delete newBookmark.bookmarks[specKey];
      return newBookmark;
    }

    default: {
      return bookmark;
    }
  }
}
