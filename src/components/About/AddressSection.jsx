import classes from "./AddressSection.module.css";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_ACCESS_TOKEN } from "../../util/token";
import Header from "../UI/Header";

function AddressSection() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = MAP_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [13.41053, 52.52437],
      zoom: 14.0,
    });
    markerRef.current = new mapboxgl.Marker()
      .setLngLat([13.41053, 52.52437])
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
      markerRef.current.remove();
    };
  }, []);

  return (
    <>
      <section className={classes.addressSection}>
        <div id={classes.mapContainer} ref={mapContainerRef}></div>
        <div className={classes.address}>
          <Header styleType="type1">Adresse</Header>
          <div className={classes.info}>
            <div>
              <h2 className={classes.header}>Möbel-demo</h2>
              <p>Mustermann Str. 26</p>
              <p>10000 Berlin</p>
            </div>
            <div>
              <h2 className={classes.header}>Öffnungszeiten</h2>
              <p>Mon-Sam 10:00-20:00Uhr</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressSection;
