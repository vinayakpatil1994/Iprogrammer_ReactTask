import React from 'react';
 
function ComparisonTable(props) {
 
    const compareTable = 
        props.comparePhotos.length ?
        <div>
          <h5 className="card-title">Comparison Table</h5>
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Url</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {
              props.comparePhotos && props.comparePhotos.map((photo)=>{

                let image = <img src={photo.url} className="card-img-top" alt="" style = {{ width: "50px", height:"50px"}}/>
                return(
                  <tr>
                  <th scope="row">{image}</th>
                  <td>{photo.id}</td>
                  <td>{photo.url}</td>
                  <td>{photo.title}</td>
              </tr>
                )
              })
          }
         
        </tbody>
      </table>
       </div> : null

       return compareTable
      
}
 
 
export default ComparisonTable;