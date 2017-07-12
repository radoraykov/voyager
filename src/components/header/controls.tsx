import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import {BookmarkPane} from './bookmark';
// import { BookmarkSelector } from './bookmark';
import * as styles from './controls.scss';
import { UndoRedo } from './undo-redo';

class ControlsBase extends React.PureComponent<{}, {}> {
  public render() {
    // const length =  something like bookmark.numBookmarks
    // const bookmarkIcon = (
    //   <button>
    //     <i className='fa fa-bookmark' /> Bookmarks ({length})
    //   </button>
    // );

    const bookmarkIcon = (
      <button>
        <i className='fa fa-bookmark' /> Bookmarks (0)
      </button>
    );
    return (
      <div styleName='controls'>
        {/* {showBookmarkSelector ? <BookmarkSelector /> : bookmarkIcon} */}
        <BookmarkPane/>
        {bookmarkIcon}
        <UndoRedo/>
      </div>
    );
  }
};

export const Controls = CSSModules(ControlsBase, styles);
