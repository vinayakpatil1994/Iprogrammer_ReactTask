import React from 'react';
 
function PhotoItem(props) {

    const photoItem = props.photos.length ? props.photos.map((photo)=>{
                        return(<div class="col-md-2" style={{margin: "15px"}}>
                            <div className="card" style={{width: "12rem"}}>
                                <img src={photo.url} className="card-img-top" alt="" style = {{ height:"100px"}}/>
                                <div className="card-body" style = {{paddingBottom:"0px", paddingTop: "5px"}}>
                                <h6 title = {photo.title} className="card-title">{props.ellipsisText(photo.title)}</h6>
                                <p title = {photo.idv} className="card-text" style = {{marginBottom:"0px"}}>{photo.id}</p>
                                <a title = {photo.thumbnailUrl} href = {photo.thumbnailUrl} className="link-primary">{props.ellipsisText(photo.thumbnailUrl)}</a>
                                
                                </div>
                                <div className="card-body">
                                <button type="button" class="btn btn-primary"onClick = {(e)=>props.handleClick(e,photo)}>{photo.compareLable ? "Compare" : "Remove"}</button>
                                </div>
                            </div>
                        </div>)
                        }): null
        return photoItem
    }
     
    
 
 
export default PhotoItem;