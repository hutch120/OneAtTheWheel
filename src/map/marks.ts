// https://hbyc.org.au/race-documents
// Marks: https://img1.wsimg.com/blobby/go/441ac53e-28ec-426d-ae66-90bed6b6b56d/downloads/SI%202021-22%20-%20Attachment%201%2C%20Marks%20-%203%20June%202022.pdf?ver=1660718264224
// https://coordinateconverter.org/
interface IMarks {
  [key: string]: IMarkData
}

export interface IMarkData {
  id: string
  name: string
  description: string
  lon: number
  lat: number
}

export const marks: IMarks = {
  hbyc_carrum_bight_2: {
    id: 'hbyc_carrum_bight_2',
    name: 'Carrum Bight 2',
    description: 'Yellow Buoy',
    lon: 145.0755,
    lat: -38.053333
  },
  hbyc_centre: {
    id: 'hbyc_centre',
    name: 'Centre',
    description: 'Yellow Special Purpose Buoy',
    lon: 144.87,
    lat: -38.058167
  },
  hbyc_ch5: {
    id: 'hbyc_channel_5',
    name: 'Ch.5',
    description: 'Channel 5 - Port of Melbourne Channel Pile',
    lon: 144.928333,
    lat: -37.909
  },
  hbyc_ch7: {
    id: 'hbyc_ch7',
    name: 'Ch.7',
    description: 'Channel 7 - Port of Melbourne Channel Pile',
    lon: 144.928667,
    lat: -37.897167
  },
  hbyc_ch9: {
    id: 'hbyc_ch9',
    name: 'Ch.9',
    description: 'Channel 9 Port of Melbourne Channel Pile',
    lon: 144.929167,
    lat: -37.8865
  },
  hbyc_ch11: {
    id: 'hbyc_ch11',
    name: 'Ch.11',
    description: 'Channel 11 - Port of Melbourne Channel Pile',
    lon: 144.929333,
    lat: -37.878167
  },
  hbyc_17a: {
    id: 'hbyc_17a',
    name: 'Ch.17a',
    description: 'Channel 17a - Port of Melbourne Channel Pile',
    lon: 144.919667,
    lat: -37.859
  },
  hbyc_19a: {
    id: 'hbyc_19a',
    name: 'Ch.19a',
    description: 'Channel 19a - Port of Melbourne Channel Pile',
    lon: 144.918667,
    lat: -37.858167
  },
  hbyc_ch20: {
    id: 'hbyc_ch20',
    name: 'Ch.20',
    description: 'Channel 20 - Port of Melbourne Channel Pile',
    lon: 144.913167,
    lat: -37.858167
  },
  hbyc_ch21: {
    id: 'hbyc_ch21',
    name: 'Ch.21',
    description: 'Channel 21 - Port of Melbourne Channel Pile',
    lon: 144.913,
    lat: -37.8535
  },
  hbyc_ch71: {
    id: 'hbyc_ch71',
    name: 'Ch.71',
    description: 'Channel 71 - Port of Melbourne Channel Pile',
    lon: 144.929333,
    lat: -37.867667
  },
  hbyc_ch72: {
    id: 'hbyc_ch72',
    name: 'Ch.72',
    description: 'Channel 72 - Port of Melbourne Channel Pile',
    lon: 144.927833,
    lat: -37.862
  },
  hbyc_ch73: {
    id: 'hbyc_ch73',
    name: 'Ch.73',
    description: 'Channel 73 - Port of Melbourne Channel Pile',
    lon: 144.9295,
    lat: -37.862
  },
  hbyc_ch74: {
    id: 'hbyc_ch74',
    name: 'Ch.74',
    description: 'Channel 74 - Port of Melbourne Channel Pile',
    lon: 144.928,
    lat: -37.855
  },
  hbyc_ch75: {
    id: 'hbyc_ch75',
    name: 'Ch.75',
    description: 'Channel 75 - Port of Melbourne Channel Pile',
    lon: 144.93,
    lat: -37.854833
  },
  hbyc_ch76: {
    id: 'hbyc_ch76',
    name: 'Ch.76',
    description: 'Channel 76 - Port of Melbourne Channel Pile',
    lon: 144.927,
    lat: -37.8515
  },
  hbyc_ch78: {
    id: 'hbyc_ch78',
    name: 'Ch.78',
    description: 'Channel 78 - Port of Melbourne Channel Pile',
    lon: 144.924833,
    lat: -37.848333
  },
  hbyc_gellibrand_shoal: {
    id: 'hbyc_gellibrand_shoal',
    name: 'Gellibrand',
    description: 'Gellibrand Shoal Mark - An East Cardinal Mark',
    lon: 144.915,
    lat: -37.876
  },
  hbyc__mycb: {
    id: 'hbyc_mycb',
    name: 'MYC B',
    description: 'MYC B Mark - Yellow buoy',
    lon: 145.0265,
    lat: -38.175667
  },
  hbyc_outer_anchorage: {
    id: 'hbyc_outer_anchorage',
    name: 'Outer Anchorage',
    description: 'A pile with a light frame',
    lon: 144.858167,
    lat: -37.9485
  },
  hbyc_p2: {
    id: 'hbyc_p2',
    name: 'P2',
    description: 'A yellow buoy marked P2',
    lon: 144.8865,
    lat: -37.924333
  },
  hbyc_p3: {
    id: 'hbyc_p3',
    name: 'P3',
    description: 'A pile with light frame',
    lon: 144.880833,
    lat: -37.889667
  },
  hbyc_pile_beacon_25: {
    id: 'hbyc_pile_beacon_25',
    name: 'Pile Beacon 25',
    description: 'A pile with a light frame',
    lon: 144.926167,
    lat: -38.292667
  },
  hbyc_prince_george: {
    id: 'hbyc_prince_george',
    name: 'Prince George',
    description: 'A pile with a light frame',
    lon: 144.736667,
    lat: -38.106667
  },
  hbyc_pt_cook_east_cardinal: {
    id: 'hbyc_pt_cook_east_cardinal',
    name: 'Pt Cook East Cardinal Mark',
    description: 'An East Cardinal Mark',
    lon: 144.815333,
    lat: -37.926333
  },
  hbyc_pt_cook_south_pile: {
    id: 'hbyc_pt_cook_south_pile',
    name: 'Pt Cook South Pile',
    description: 'Yellow Pile, top mark shape - X shape',
    lon: 144.8115,
    lat: -37.929
  },
  hbyc_r1: {
    id: 'hbyc_r1',
    name: 'R1',
    description: 'Yellow light Buoy marked R',
    lon: 144.973,
    lat: -38.273333
  },
  hbyc_r2: {
    id: 'hbyc_r2',
    name: 'R2',
    description: 'Yellow light Buoy marked R2',
    lon: 144.939,
    lat: -37.909
  },
  hbyc_r3: {
    id: 'hbyc_r3',
    name: 'R3',
    description: 'Yellow light Buoy marked R3',
    lon: 144.937167,
    lat: -37.885
  },
  hbyc_r4: {
    id: 'hbyc_r4',
    name: 'R4',
    description: 'Yellow Buoy located',
    lon: 144.922667,
    lat: -37.845
  },
  hbyc_rbyc_5: {
    id: 'hbyc_rbyc_5',
    name: 'RBYC 5',
    description: 'Yellow Spar located',
    lon: 144.974333,
    lat: -37.896667
  },
  hbyc_rmys_a: {
    id: 'hbyc_rmys_a',
    name: 'RMYS A',
    description: 'RMYS A',
    lon: 144.957833,
    lat: -37.865
  },
  hbyc_rmys_b: {
    id: 'hbyc_rmys_b',
    name: 'RMYS B',
    description: 'An orange truncated pyramid',
    lon: 144.953333,
    lat: -37.886333
  },
  hbyc_rmys_c: {
    id: 'hbyc_rmys_c',
    name: 'RMYS C',
    description: 'An orange truncated pyramid',
    lon: 144.940167,
    lat: -37.869833
  },
  hbyc_rmys_d: {
    id: 'hbyc_rmys_d',
    name: 'RMYS D',
    description: 'An orange truncated pyramid',
    lon: 144.957833,
    lat: -37.858
  },
  hbyc_rmys_e: {
    id: 'hbyc_rmys_e',
    name: 'RMYS E',
    description: 'An orange truncated pyramid',
    lon: 144.963167,
    lat: -37.869167
  },
  hbyc_rmys_f: {
    id: 'hbyc_rmys_f',
    name: 'RMYS F',
    description: 'An orange truncated pyramid',
    lon: 144.938333,
    lat: -37.893167
  },
  hbyc_rmys_g: {
    id: 'hbyc_rmys_g',
    name: 'RMYS G',
    description: 'An orange truncated pyramid',
    lon: 144.9375,
    lat: -37.85
  },
  hbyc_rycv_orange_buoy: {
    id: 'hbyc_rycv_orange_buoy',
    name: 'RYCV Orange Buoy',
    description: 'Orange Beehive Mark',
    lon: 144.908667,
    lat: -37.858667
  },
  hbyc_spoil_ground: {
    id: 'hbyc_spoil_ground',
    name: 'Spoil Ground',
    description: 'A yellow buoy',
    lon: 144.884167,
    lat: -37.984167
  },
  hbyc_t16: {
    id: 'hbyc_t16',
    name: 'T16',
    description: 'Yellow Transit Lane Mark',
    lon: 144.919667,
    lat: -37.926333
  },
  hbyc_t20: {
    id: 'hbyc_t20',
    name: 'T20',
    description: 'Yellow Transit Lane Mark',
    lon: 144.9205,
    lat: -37.908667
  },
  hbyc_t26: {
    id: 'hbyc_t26',
    name: 'T26',
    description: 'Yellow Transit Lane Mark',
    lon: 144.9215,
    lat: -37.877667
  },
  hbyc_v: {
    id: 'hbyc_v',
    name: 'V Mark',
    description: 'Volvo Finish mark',
    lon: 144.925,
    lat: -37.863333
  }
}

export function GetMark(markId: string): IMarkData {
  return marks[markId]
}
