export type RobotLog = {
  time: string;
  id: string;
  location: {
    row: string;
    column: string;
  };
  battery: string;
};

export type TrashResult = {
  time: string;
  all: number;
  plastic: number;
  pack: number;
  can: number;
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

export type RobotData = {
  id: string;
  ip: string;
  name: string;
};

export type AnalysisAmountData = {
  time: string;
  plastic: number;
  paper: number;
  can: number;
  rubber: number;
  glass: number;
  all: number;
};

export type AnalysisChangeData = {
  time: string;
  change: number;
};
