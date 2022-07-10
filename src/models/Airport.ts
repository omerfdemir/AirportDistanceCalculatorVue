import  Location  from "./Location";

export default interface Airport {
  id: number;
  country: string;
  cityIATA: string;
  iata: string;
  city: string;
  timeZoneRegionName: string;
  countryIATA: string;
  rating: number;
  name: string;
  location: Location;
  type: string;
  hubs: number;
}