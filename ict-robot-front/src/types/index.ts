export type RobotLog = {
  time: string;
  id: string;
  location: {
    latitude: string;
    longitude: string;
  };
  battery: string;
};

export type TrashResult = {
  time: string;
  all: number;
  plastic: number;
  paper: number;
  general: number;
};

export type MapData = {
  robotId: string;
  latlng: {
    lat: number;
    lng: number;
  };
  time: string;
  trashType: string;
};
