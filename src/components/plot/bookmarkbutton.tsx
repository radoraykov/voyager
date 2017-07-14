import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import {FacetedCompositeUnitSpec} from 'vega-lite/build/src/spec';
import {BOOKMARK_ADD_PLOT, BOOKMARK_REMOVE_PLOT, BookmarkAction} from '../../actions/bookmark';
import {ActionHandler} from '../../actions/redux-action';
import {Bookmark} from '../../models/bookmark';
import {PlotFieldInfo} from '../../models/plot';
import * as styles from './bookmarkbutton.scss';



export interface BookmarkProps extends ActionHandler<BookmarkAction> {
  bookmark: Bookmark;
  plotObjectFieldInfos: PlotFieldInfo[];
  plotObjectSpec: FacetedCompositeUnitSpec;
}

export class BookmarkButtonBase extends React.PureComponent<BookmarkProps, any> {
  constructor(props: BookmarkProps) {
    super(props);

    this.state = {
      isBookmarked: !!this.props.bookmark.bookmarks[JSON.stringify(this.props.plotObjectSpec)], openDialog: false
    };

    this.onBookmarkRemove = this.onBookmarkRemove.bind(this);
    this.onBookmarkAdd = this.onBookmarkAdd.bind(this);
    this.onBookmarkClick = this.onBookmarkClick.bind(this);
    this.onKeepBookmark = this.onKeepBookmark.bind(this);
  }

  public render() {
    const bookmarkColor = (this.state.isBookmarked) ? '#0c96d0' : '#aaa';
    const openDialog = (this.state.openDialog) ? 'block' : 'none';

    let bookmarkAlert;
    if (this.state.openDialog) {
      bookmarkAlert = (
        <div styleName="bookmarkAlert" style={{display: openDialog}}>
          <div>Remove bookmark?</div>
          <small>Your notes will be lost</small>
          <div>
            <a onClick={this.onBookmarkRemove}>
              <i className="fa fa-trash-o">Remove it</i>
            </a>
            <a onClick={this.onKeepBookmark}>
              <i className="fa fa-bookmark">Keep it</i>
            </a>
          </div>
        </div>
      );
    }

    return (
      <div>
        <i
          className="fa fa-bookmark"
          style = {{color: bookmarkColor}}
          onClick = {this.onBookmarkClick}
        />
        {bookmarkAlert}
      </div>
    );
  }

  private onKeepBookmark() {
    this.setState({openDialog: false});
  }

  private onBookmarkClick() {
    if (this.state.isBookmarked) {
      this.setState({openDialog: !this.state.openDialog});
    } else {
      this.onBookmarkAdd();
    }
  }


  private onBookmarkRemove() {
    this.setState({isBookmarked: false, openDialog: false});
    this.props.handleAction({
      type: BOOKMARK_REMOVE_PLOT,
      // modify it to just take the spec for payload
      payload: {
        plot: {
          fieldInfos: this.props.plotObjectFieldInfos,
          spec: this.props.plotObjectSpec
        }
      }
    });
  }

  private onBookmarkAdd() {
    this.setState({isBookmarked: true});
    this.props.handleAction({
      type: BOOKMARK_ADD_PLOT,
      payload: {
        plot: {
          fieldInfos: this.props.plotObjectFieldInfos,
          spec: this.props.plotObjectSpec
        }
      }
    });
  }

}

export const BookmarkButton = CSSModules(BookmarkButtonBase, styles);
