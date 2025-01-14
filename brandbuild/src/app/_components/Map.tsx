// "use client"
// import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
// import React from 'react'

// const containerStyle = {
//     width: "100%",
//     height: "50vh"
// };

// const center = { 
//     lat: 9.097530787948692,
//     lng: 7.410345440099051, 
// };

// interface MarkerData {
//     position: google.maps.LatLngLiteral;
//     title: string;
//     content: string;
// }

// const GoogleMapComponents: React.FC = () => {
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//     });

//     const [ map, setMap ] = React.useState(null)
//     const [ selectedMarker, setSelectedMarker ] = React.useState<MarkerData | null>(null);

//     const markers: MarkerData[] = [
//         {
//             position: { lat: 9.097530787948692, lng: 7.410345440099051 },
//             title: "Marker 1",
//             content: "This is Marker 1"
//         }
//     ];

//     const onLoad = React.useCallback(function callback(map: any) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map)
//     }, []); 

//     const onMount = React.useCallback(function callback(map: any) {
//         setMap(null);
//     }, []);

//     const handleMarkerClick = (marker: MarkerData) => {
//         setSelectedMarker(marker);
//     };

//   return isLoaded ? (
//     <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//         onLoad={onLoad}
//         onUnmount={onMount}
//     >
//         {markers.map((marker, index) => (
//             <Marker
//                 key={index}
//                 position={marker.position}
//                 onClick={() => handleMarkerClick(marker)} 
//             />
//         ))}
//         {selectedMarker && (
//             <InfoWindow
//                 position={selectedMarker.position}
//                 onCloseClick={() => setSelectedMarker(null)}
//             >
//                 <div>
//                     <h3>{selectedMarker.title}</h3>
//                     <p>{selectedMarker.content}</p>
//                 </div>
//             </InfoWindow>
//         )}

//     </GoogleMap>

//   )  : <></>;
// }

// export default GoogleMapComponents


// //  lat: 9.097530787948692,
// // lng: 7.410345440099051, 