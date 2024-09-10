"use client";

import "@maptiler/sdk/dist/maptiler-sdk.css";
import { config, Map, Marker, MapStyle } from "@maptiler/sdk";
import { renderToStaticMarkup } from "react-dom/server";
import { useEffect, useRef } from "react";
import { isEqual, isUndefined } from "lodash";

import { LatLngModel, MapTilerPropsModel } from "@/types/models";

config.apiKey = process.env.NEXT_PUBLIC_MAP_TILER_KEY as string;

const MapTilerMap = (props: MapTilerPropsModel) => {
  const mapRef = useRef<Map | null>(null);
  const prevCenterRef = useRef<LatLngModel>();

  useEffect(() => {
    prevCenterRef.current = props.center;
  });

  const prevCenter = prevCenterRef.current;

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new Map({
      container: "map",
      center: [props.center.lng, props.center.lat],
      zoom: props.zoom,
      maxZoom: props.maxZoom,
      minZoom: props.minZoom,
      geolocateControl: props.showGeolocateControl,
      navigationControl: props.showNavigation,
      interactive: props.isInteractive,
      pitch: props.pitch || 0,
    });

    mapRef.current?.setStyle(MapStyle.STREETS);

    props.marker?.map((item: any) => {
      const div = document.createElement("div");

      div.innerHTML = renderToStaticMarkup(item.marker);

      new Marker({
        draggable: item.isDragable,
        element: div,
        anchor: item.anchor,
        offset: item.offset,
      })
        .setLngLat([item.lng, item.lat])
        .addTo(mapRef.current as Map);
    });
  }, [props]);

  useEffect(() => {
    mapRef.current?.zoomTo(props.zoom);
  }, [props.zoom]);

  useEffect(() => {
    if (!isUndefined(prevCenter) && !isEqual(prevCenter, props.center)) {
      mapRef.current?.flyTo({
        center: [props.center.lng, props.center.lat],
      });
    }
  }, [props.center, prevCenter]);

  return (
    <div className="map-wrap">
      <div className="map" id="map" />
    </div>
  );
};

export default MapTilerMap;
