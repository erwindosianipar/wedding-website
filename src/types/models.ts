import type { PositionAnchor, PointLike } from "@maptiler/sdk";

export type LatLngModel = {
  lat: number;
  lng: number;
};

export type MapTilerMarkerProps = {
  lat: number;
  lng: number;
  marker: JSX.Element;
  isDragable?: boolean;
  anchor?: PositionAnchor;
  offset?: PointLike;
};

export type MapTilerPropsModel = {
  center: LatLngModel;
  zoom: number;
  maxZoom?: number;
  minZoom?: number;
  showNavigation?: boolean;
  showGeolocateControl?: boolean;
  isInteractive?: boolean;
  pitch?: number;
  marker?: MapTilerMarkerProps[];
};

export type GuestbookModel = {
  id: string;
  name: string;
  message: string;
  present: boolean;
  created_at: string;
};
