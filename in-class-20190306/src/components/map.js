import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWh1aW1hbnU2OSIsImEiOiJjanNpYnZnNG0wbTB6NDlxb3VqbzQ0ZjRpIn0.a4bjWgujDq3W3RxGVeuwVw',
  }); 

  const mapstyles = ["basic", "streets", "bright", "light", "dark", "satellite"];

class Mapbox extends Component{


    state = {
        lng: -98.5795,
        lat: 39.828175,
        zoom: 2,
        mapstyle: mapstyles[Math.floor(Math.random() * mapstyles.length)],
      };


    randomizeMapStyle(){
        const selected = this.state.mapstyles[Math.floor(Math.random() * this.state.mapstyles.length)];
        return selected;
    }
    componentDidMount(){
         //check to see if we can get the browser's geolocation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          //set state properties for lat and long
          this.setState( () => {
              return {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            }
          );
        });
      }else{
        console.log("Geolocation is not supported by this browser.");
      }

    }

  render() {

    //unpacking the object
    const { lng, lat, zoom, mapstyle } = this.state;

    return (
      <div className="container">
        <LoginForm onFormSubmit={this.handleFormSubmission} />
        <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        <Map style={`mapbox://styles/mapbox/${mapstyle}-v9`}
             center={[lng, lat]}
             containerStyle={{
              height: "400px",
              width: "100%"
             }}>
             <Layer type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15"}}>
                    <Feature coordinates={[lng, lat]}/>
             </Layer>
        </Map>
      </div>
    )

}
}