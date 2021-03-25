import React, { Component } from 'react';
import ComparisonTable from './components/ComparisonTable';
import PhotoItem from './components/PhotoItem';

class App extends Component {

  state = {
    photos : [],
    comparePhotos :[]
  }
  
  componentDidMount(){
    this.fetchPhotos();
  }

  fetchPhotos() {
     
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(
        data =>{
          const trimedData = data.slice(0, 20).map((photo)=>{
             photo["compareLable"] = true;
             return photo;
          });

          this.setState({
            photos: trimedData
          })}
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // Elipse the text
  ellipsisText = (text, limit) => {
    let defaultLimit = 25;
    if (!limit) limit = defaultLimit;

    if (text && text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
}

  handleClick = (e,photo) => {
    let comparePhotos = this.state.comparePhotos;
    if(photo.compareLable){
      comparePhotos = [photo].concat(comparePhotos)
    }
    else{
      comparePhotos = comparePhotos.filter((elelment)=>{
          return elelment.id != photo.id
      })
    }
    photo.compareLable = !photo.compareLable;
      const allPhotos = this.state.photos;
      const updatedPhotos = allPhotos.filter((element)=>{
                 if(element.id != photo.id){
                   return element
                 }else {
                   return photo
                 }
          return 
        })
      
      this.setState({
        ...this.state,photos:updatedPhotos,comparePhotos
      })
  }

  render() {

    return (
      <div class="container">
        <div class="row">
         <PhotoItem photos = {this.state.photos} ellipsisText = {this.ellipsisText} handleClick = {this.handleClick}/>
        </div>
      <br/>
        <ComparisonTable comparePhotos = {this.state.comparePhotos}/>
      </div>
    );
  }
}

export default App;
