/**
 * AddressSection component displays the address and location on a map.
 *
 * This component uses the `useQuery` hook to fetch address data and render it.
 * It displays a map using Mapbox GL and places a marker at a predefined location.
 * If there is an error in fetching the address data, it shows an error block.
 *
 * @module AddressSection
 * @returns {JSX.Element} - The rendered address section with map and address details.
 */
import classes from "./AddressSection.module.css";
import { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "../../util/http";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_ACCESS_TOKEN } from "../../util/token";

import Header from "../UI/Header";
import ErrorBlock from "../UI/ErrorBlock";

function AddressSection() {
  // Fetch address data using React Query
  const { data, isError, error } = useQuery({
    queryKey: ["address"],
    queryFn: fetchAddress,
  });

  // Refs for map and marker
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef();

  // Initialize the map and marker when the component is mounted
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

    // Cleanup the map and marker when the component is unmounted
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
          {data && (
            <div className={classes.info}>
              <div>
                <h2 className={classes.header}>{data.name}</h2>
                <p>{`${data.street} ${data.houseNumber}`}</p>
                <p>{`${data.postcode} ${data.city}`}</p>
              </div>
              <div>
                <h2 className={classes.header}>Öffnungszeiten</h2>
                <p>Mon-Sam 10:00-20:00Uhr</p>
              </div>
            </div>
          )}
          {isError && (
            <ErrorBlock
              title="Die Adresse konnte nicht geladen werden"
              message={
                error.info?.message ||
                "Die Adresse konnte nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
              }
            />
          )}
        </div>
      </section>
    </>
  );
}

export default AddressSection;
