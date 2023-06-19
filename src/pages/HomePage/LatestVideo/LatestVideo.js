// rafce

// node_modules imports
import PropTypes from 'prop-types';

const LatestVideo = (props) => {
  /* receiving the data from parent comp in props
    props are objects
    props are read-only
    props can also have children
  */

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.thumbnailUrl}
            className="img-fluid rounded-start"
            alt={props.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.children}</p>
            <p className="card-text">
              <small className="text-body-secondary">{props.views} Views</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer text-body-secondary">
        {props.publishedDate}
      </div>
    </div>
  );
};

LatestVideo.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  children: PropTypes.string
};

export default LatestVideo;
