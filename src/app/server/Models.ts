export class RiderGeoJson {
  type: string = 'Feature';

  constructor(public geometry: Geometry, public properties: RiderProperties) {}
}

export class RiderProperties {
  constructor(
    public pssid: string,
    public name: string | null,
    public dis: number,
    public speed: number,
    public course: string,
    public imgUrl: string,
    public starttimestamp: number
  ) {}
}

export class Geometry {
  constructor(public type: string | null, public coordinates: number[]) {}
}
export class RiderPosition {
  constructor(
    public id: string,
    public dis: number,
    public speed: number,
    public course: string,
    public lon: number,
    public lat: number,
    public timestamp: number
  ) {}
}

export class RiderMetadata {
  constructor(
    public id: string,
    public no: string,
    public name: string,
    public imgUrl: string,
    public startDate: Date,
    public updateDate: number
  ) {}
}

export class LiveRider {
  constructor(
    public dis: number,
    public coord: number[],
    public speed: number,
    public imgUrl: string,
    public startDate: Date,
    public updateDate: number
  ) {}
}
