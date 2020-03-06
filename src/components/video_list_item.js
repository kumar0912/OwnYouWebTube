import React from 'react';

const VideListItem = ({video,onVideoSelect}) =>{
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onclick = {() => onVideSelect(video)} className = "list-group-item">
        <div className = "video-list-media">
          <div className = "media-left">
            <img className = "media-object" src = {imageUrl} />
          </div>

          <div classname = "media-body">
            <div className = "media-heading">video.snippet.title</div>
          </div>
        </div>
    </li>
  );
};

export default VideoListItem;
