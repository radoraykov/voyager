import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {BookmarkAction} from '../../actions/bookmark';
import {ActionHandler, createDispatchHandler} from '../../actions/redux-action';
import {State} from '../../models';
import {Bookmark} from '../../models/bookmark';
import {PlotObject} from '../../models/plot';
import {Plot} from '../plot';
import * as styles from './bookmark.scss';



export interface BookmarkProps extends ActionHandler<BookmarkAction> {
  bookmark: Bookmark;
}

export class BookmarkBase extends React.PureComponent<BookmarkProps, any> {
  constructor(props: BookmarkProps) {
    super(props);

    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  public render() {
    return (
      <div>
        <button onClick={this.openModal}>
          <i className='fa fa-bookmark' /> Bookmarks ({this.props.bookmark.numBookmarks})
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Bookmark Selector"
          styleName="modal"
        >
          {this.renderBookmarks(this.props.bookmark)}
        </Modal>
      </div>
    );
  }

  private openModal() {
    this.setState({modalIsOpen: true});
  }

  private closeModal() {
    this.setState({modalIsOpen: false});
  }

  private renderBookmarks(bookmark: Bookmark) {
    console.log('all my bookmarks:', bookmark.bookmarks);
    const bookmarks = bookmark.bookmarks;
    const plots: PlotObject[] = [];
    for (const id in bookmarks) {
      if (bookmarks.hasOwnProperty(id)) {
        plots.push(bookmarks[id].plot);
      }
    }

    const bookmarkPlotListItems = plots.map(plot => {
      const {spec, fieldInfos} = plot;

      return (
        <div>
          <Plot
            key={JSON.stringify(spec)}
            fieldInfos={fieldInfos}
            handleAction={null} // what does this do???
            isPlotListItem={true}
            scrollOnHover={true}
            showBookmarkButton={true}
            showSpecifyButton={true}
            spec={spec}
          />
          <span>INSERT NOTES DIV BOX HERE</span>
        </div>
      );
    });

    return (
      <div>
        {bookmarkPlotListItems}
      </div>
    );
  }
}

const BookmarkRenderer = CSSModules(BookmarkBase, styles);

export const BookmarkPane = connect(
  (state: State) => {
    return {
      bookmark: state.present.bookmark
    };
  },
  createDispatchHandler<BookmarkAction>()
)(BookmarkRenderer);
