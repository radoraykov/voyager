import {Action, BOOKMARK_ADD_PLOT, BOOKMARK_MODIFY_NOTE, BOOKMARK_REMOVE_PLOT} from '../actions';
import {Bookmark, BookmarkItem} from '../models';


export function bookmarkReducer(bookmark: Bookmark, action: Action): Bookmark {
  switch (action.type) {
    case BOOKMARK_ADD_PLOT: {
      const {plot} = action.payload;

      const bookmarkItem: BookmarkItem = {
        plot: plot,
        notes: '',
        id: bookmark.nextID
      };

      const newBookmark = {...bookmark};
      newBookmark.idList.push(newBookmark.nextID);
      newBookmark.nextID++;
      // javascript converts numbers to a strings for key purposes
      newBookmark.bookmarks[bookmarkItem.id] = bookmarkItem;
      return newBookmark;
    }

    case BOOKMARK_MODIFY_NOTE: {
      const {notes, id} = action.payload;

      const newBookmark = {...bookmark};
      newBookmark.bookmarks[id].notes = notes;
      return newBookmark;
    }

    case BOOKMARK_REMOVE_PLOT: {
      const {id} = action.payload;

      const newBookmark = {...bookmark};
      newBookmark.idList = newBookmark.idList.filter(key => key !== id);
      delete newBookmark.bookmarks[id];
      return newBookmark;
    }
  }
}
