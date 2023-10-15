import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Geography } from "./../types/property";

interface Props {
  geography: Geography;
  fullAddress: string;
}

function MapView({ geography, fullAddress }: Props) {
  return (
    <MapContainer
      center={[geography?.lat, geography?.lng]}
      zoom={3}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[geography?.lat, geography?.lng]}>
        <Popup>{fullAddress}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
