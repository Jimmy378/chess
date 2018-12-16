export enum piece {
  'pawn',
  'Rook',
  'Bishop',
  'Knight',
  'Queen',
  'King'
}

export enum colour {
  'White',
  'Black'
}

export type PieceObject = {
  colour: colour;
  name: piece;
  id: string;
  position: [number, number];
  gameBoardPosition: number;
  isTurn: boolean;
};

export const Coords = [
  [840, 160],
  [940, 218],
  [1040, 276],
  [1140, 334],
  [1240, 392],
  [1340, 450],
  [1440, 508],
  [1540, 566],
  [740, 218],
  [840, 276],
  [940, 334],
  [1040, 392],
  [1140, 450],
  [1240, 508],
  [1340, 566],
  [1440, 624],
  [640, 276],
  [740, 334],
  [840, 392],
  [940, 450],
  [1040, 508],
  [1140, 566],
  [1240, 624],
  [1340, 682],
  [540, 334],
  [640, 392],
  [740, 450],
  [840, 508],
  [940, 566],
  [1040, 624],
  [1140, 682],
  [1240, 740],
  [440, 392],
  [540, 450],
  [640, 508],
  [740, 566],
  [840, 624],
  [940, 682],
  [1040, 740],
  [1140, 798],
  [340, 450],
  [440, 508],
  [540, 566],
  [640, 624],
  [740, 682],
  [840, 740],
  [940, 798],
  [1040, 856],
  [240, 508],
  [340, 566],
  [440, 624],
  [540, 682],
  [640, 740],
  [740, 798],
  [840, 856],
  [940, 914],
  [140, 566],
  [240, 624],
  [340, 682],
  [440, 740],
  [540, 798],
  [640, 856],
  [740, 914],
  [840, 972]
];

export const CenterCoords = [
  [900, 280],
  [1000, 338],
  [1100, 396],
  [1200, 454],
  [1300, 512],
  [1400, 570],
  [1500, 628],
  [1600, 686],
  [800, 338],
  [900, 396],
  [1000, 454],
  [1100, 512],
  [1200, 570],
  [1300, 628],
  [1400, 686],
  [1500, 744],
  [700, 396],
  [800, 454],
  [900, 512],
  [1000, 570],
  [1100, 628],
  [1200, 686],
  [1300, 744],
  [1400, 802],
  [600, 454],
  [700, 512],
  [800, 570],
  [900, 628],
  [1000, 686],
  [1100, 744],
  [1200, 802],
  [1300, 860],
  [500, 512],
  [600, 570],
  [700, 628],
  [800, 686],
  [900, 744],
  [1000, 802],
  [1100, 860],
  [1200, 918],
  [400, 570],
  [500, 628],
  [600, 686],
  [700, 744],
  [800, 802],
  [900, 860],
  [1000, 918],
  [1100, 976],
  [300, 628],
  [400, 686],
  [500, 744],
  [600, 802],
  [700, 860],
  [800, 918],
  [900, 976],
  [10000, 1034],
  [200, 686],
  [300, 744],
  [400, 802],
  [500, 860],
  [600, 918],
  [700, 976],
  [800, 1034],
  [900, 1092]
];
