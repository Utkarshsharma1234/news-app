// COPIED FROM BOOTSTRAP AND THEN MODIFIED.

import React, { Component } from "react";

export class NewsItem extends Component {    // to convert to function based component remove this line by const NewsItem (props){
  // whole code goes here
// }
// THE CONSTRUCTOR DECLARED HERE CAN BE USED TO SET THE STATE OF THE CARD FROM HERE ONLY BUT WE WILL NOT DO SO, WE WILL TAKE IT TO THE NEWS.JS AND THEN CHANGE ITS CLASS.

    
  render() {    // we have to remove render() method

    let {title,description, imageUrl,newsUrl,author, date,source} = this.props    // we can remove this. from this.props
    return (
      <div className="my-3">
        <div className="card" >
          <div   style = { { display: 'flex',
        justifyContent: 'end',
        position: 'absolute',
        right: '0'}}>
        <span class=" badge rounded-pill bg-success" >
              {source}
        </span>
          </div>   
          <img src={imageUrl} className="card-img-top" alt="this is a cricket pic" />
          <span class="visually-hidden">unread messages</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            <p class="card-text"><small className="text-muted">by {author} at {new Date(date).toGMTString()}</small></p>
             {description}
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">  
            
            {/* btn-sm is used to resize your button. it is a feature of bootstrap */}
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
