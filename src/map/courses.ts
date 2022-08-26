import { marks, IMarkData } from './marks'
import { categories, ICategoriesData } from './categories'

export enum EMarkPassTo {
  port = 'port',
  start = 'start',
  finish = 'finish',
  starboard = 'starboard',
  northerly = 'northerly',
  easterly = 'easterly',
  southerly = 'southerly',
  westerly = 'westerly'
}

export interface ICourse {
  id: string
  category?: ICategoriesData
  name: string
  description: string[]
  instructions: {
    mark: IMarkData
    passTo: EMarkPassTo
  }[]
}

// https://hbyc.org.au/race-documents
// Courses: https://img1.wsimg.com/blobby/go/441ac53e-28ec-426d-ae66-90bed6b6b56d/downloads/SI%202021-22%20-%203%20June%202022%20-%20App%20F.pdf?ver=1660718264224

const courses: ICourse[] = [
  {
    id: 'hbyc-course-1',
    category: categories.hybc_division_2,
    name: 'Course No. 1 (Southerly) Approximately 7.1 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - Mark V to port - Ch.74 to port - R4 to port - Mark V to port - Ch.74 to port - R4 to port - Mark V to port - R4 to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-2',
    category: categories.hybc_division_2,
    name: 'Course No. 2 (Northerly) Approximately 7.1 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - R4 to starboard, Ch.74 to starboard - Mark V to starboard - R4 to starboard - Ch.74 to starboard - Mark V to starboard - R4 to starboard - Mark V to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-3',
    category: categories.hybc_division_2,
    name: 'Course No. 3 (Easterly) Approximately 7.2 nautical miles',
    description: [
      'Start/Finish: approximately 100m south of Ch.74',
      'Start - RMYS D to port - Ch.74 to port - Ch.17a to port - RMYS D to port - Ch.74 to port - Ch.17a to port - RMYS D to port - Ch.17a to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-4',
    category: categories.hybc_division_2,
    name: 'Course No. 4 (Westerly) Approximately 7.2 nautical miles',
    description: [
      'Start/Finish: approximately 100m south of Ch.74',
      'Start - Ch.17a to starboard - Ch.74 to starboard - RMYS D to starboard - Ch.17a to starboard -',
      'Ch.74 to starboard - RMYS D to starboard - Ch.17a to starboard - RMYS D to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-5',
    category: categories.hybc_short_courses,
    name: 'Course No. 5 (Southerly short) Approximately 4.8 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - Mark V to port - Ch.74 to port - R4 to port - Mark V to port - Ch.74 to port - R4 to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-6',
    category: categories.hybc_short_courses,
    name: 'Course No. 6 (Northerly short) Approximately 4.8 nautical miles',
    description: [
      'Start/Finish: Approximately 100m S.W. of Ch.74',
      'Start - R4 to starboard - Ch.74 to starboard - Mark V to starboard - R4 to starboard - Ch.74 to starboard - Mark V to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-7',
    category: categories.hybc_short_courses,
    name: 'Course No. 7 (Easterly short) Approximately 4.8 nautical miles',
    description: [
      'Start/Finish: approximately 100m south of Ch.74',
      'Start - RMYS D to port - Ch.74 to port - Ch.17a to port - RMYS D to port - Ch.74 to port - Ch.17a to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-8',
    category: categories.hybc_short_courses,
    name: 'Course No. 8 (Westerly short) Approximately 4.8 nautical miles',
    description: [
      'Start/Finish: approximately 100m south of Ch.74',
      'Start - Ch.17a to starboard - Ch.74 to starboard - RMYS D to starboard - Ch.17a to starboard - Ch.74 to starboard - RMYS D to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_d,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-9',
    category: categories.hybc_short_courses,
    name: 'Course No. 9 (Southerly with Start Line gate) Approximately 4.8 nautical miles',
    description: [
      'Start/Finish: Vicinity of Ch.74',
      'Start - Mark V to port - Ch.74 to port - R4 to port - through Start Line - Mark V to port - Ch.74 to port - R4 to port - finish. '
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_v,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-10',
    category: categories.hybc_short_courses,
    name: 'Course No. 10 - Not in use',
    description: [],
    instructions: []
  },
  {
    id: 'hbyc-course-11',
    category: categories.hybc_short_courses,
    name: 'Course No. 11 - Not in use',
    description: [],
    instructions: []
  },
  {
    id: 'hbyc-course-12',
    category: categories.hybc_short_courses,
    name: 'Course No. 12 - Not in use',
    description: [],
    instructions: []
  },
  {
    id: 'hbyc-course-13',
    category: categories.hybc_division_1,
    name: 'Course No. 13 (Southerly) Approximately 11.6 nautical miles',
    description: [
      'Start: Vicinity of CH.74',
      'Finish: between R3 and the Race Committee Vessel',
      'Start in a southerly direction, east of bounding marks Ch.71, 11, 9 and 7 - R2 to port - RMYS G to  port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r2,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-14',
    name: 'Course No. 14 (Southerly) Approximately 9.4 nautical miles',
    description: [
      'Start: Vicinity of CH.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a southerly direction - east of bounding marks Ch.71, 11, and 9 - R3 to port - RMYS G to port - east of bounding marks Ch.71, 11, and 9 - R3 to port - east of bounding mark Ch.71- finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-15',
    name: 'Course No. 15 (South Easterly) Approximately 9.8 nautical miles',
    description: [
      'Start: Vicinity of CH.74',
      'Finish: between RMYS A and the Race Committee Vessel',
      'Start in a south Easterly direction - east of bounding mark Ch.71 - RMYS B to port - RMYS A to port - RMYS G to Port - RMYS B to port - RMYS A to port - RMYS G to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-16',
    name: 'Course No. 16 (South Westerly) Approximately 9.5 nautical miles',
    description: [
      'Start: Vicinity of Ch.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a south westerly direction - Gellibrand Shoal Mark to starboard - P2 to port - RMYS A to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_gellibrand_shoal,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p2,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-17',
    name: 'Course No. 17 (South Westerly short) Approximately 8.1 nautical miles',
    description: [
      'Start: Vicinity of CH.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a south westerly direction - Gellibrand Shoal Mark to starboard - P3 to port - RMYS G to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_gellibrand_shoal,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-18',
    name: 'Course No. 18 (Westerly) Approximately10.1 nautical miles',
    description: [
      'Start: approximately 100m west of Ch.74',
      'Finish: between RMYS B and the Race Committee Vessel',
      'Start in a westerly direction - Ch. 17a to port - RMYS B to starboard - P3 to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-19',
    name: 'Course No. 19 (Easterly) Approximately 9.5 nautical miles',
    description: [
      'Start: approximately 100m east of Ch.74',
      'Finish: between RMYS B and the Race Committee Vessel',
      'Start in an easterly direction - RMYS A to starboard - P3 to starboard - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-20',
    name: 'Course No. 20 (Northerly) short Approximately 9.5 nautical miles',
    description: [
      'Start: Approximately 100m S.W. of Ch.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a Northerly direction - R4 to starboard - RMYS C to starboard - R3 to port - east of passing marks Ch.11, 9 and 71 - RMYS G to port - R3 to port - east of passing mark Ch. 11 - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-21',
    name: 'Course 21 (Northerly) long Approximately 11.5 nautical miles',
    description: [
      'Start: Approximately 100m S.W. of Ch.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a Northerly direction - R4 to starboard - RMYS C to starboard - R2 to port - east of passing marks Ch. 7, 9, 11 and 71 - RMYS G to port - R3 to port - east of passing mark Ch. 11 - finish. '
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r2,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-22',
    name: 'Course No. 22 (Westerly Long) Approximately12.1 nautical miles',
    description: [
      'Start: approximately 100m east of Ch.74',
      'Finish: between RMYS C and the Race Committee Vessel',
      'Start in a westerly direction - Ch. 17a to port - RMYS B to starboard - P3 to port - RMYS A to port -finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-23',
    name: 'Course No. 23 (Westerly) Approximately 10.6 nautical miles',
    description: [
      'Start: approximately 100m west of Ch.74',
      'Finish: between the vertical line on the RMYS tower and RMYS A.',
      'Boats shall not sail between mark H and the tower, even after finishing and shall not pass through the line after finishing.',
      'Start in a westerly direction - Ch. 17a to port - RMYS B to starboard - P3 to port - RMYS E to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_e,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-24',
    name: 'Course No. 24 (Northerly) short Approximately 9.5 nautical miles',
    description: [
      'Start: Approximately 100m S.W. of Ch.74',
      'Finish: between the vertical line on the RMYS tower and RMYS A.',
      'Boats shall not sail between mark H and the tower, even after finishing and shall not pass through the line after finishing.',
      'Start in a Northerly direction - R4 to starboard - RMYS C to starboard - R3 to port - east of passing',
      'marks Ch.11, 9 and 71 - RMYS G to port - R3 to port - RMYS E to port - finish'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_e,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-25',
    name: 'Course 25 (Northerly) long Approximately 12.1 nautical miles ',
    description: [
      'Start: Approximately 100m S.W. of Ch.74',
      'Finish: between the vertical line on the RMYS tower and RMYS A.',
      'Boats shall not sail between mark H and the tower, even after finishing and shall not pass through the line after finishing.',
      'Start in a Northerly direction - R4 to starboard - RMYS C to starboard - R2 to port - east of passing',
      'marks Ch. 7, 9, 11 and 71 - RMYS G to port - R3 to port - RMYS E to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_r4,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_rmys_c,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_r2,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_g,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_r3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_e,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.finish
      }
    ]
  },
  {
    id: 'hbyc-course-26',
    name: 'Course No. 26 (Westerly Long) Approximately 13.5 nautical miles',
    description: [
      'Start: approximately 100m east of Ch.74',
      'Finish: between the vertical line on the RMYS tower and RMYS A.',
      'Boats shall not sail between mark H and the tower, even after finishing and shall not pass through the line after finishing.',
      'Start in a westerly direction - Ch. 17a to port - RMYS B to starboard - P3 to port - P2 to port - RMYS E to port - finish.'
    ],
    instructions: [
      {
        mark: marks.hbyc_ch74,
        passTo: EMarkPassTo.start
      },
      {
        mark: marks.hbyc_17a,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_b,
        passTo: EMarkPassTo.starboard
      },
      {
        mark: marks.hbyc_p3,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_p2,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_e,
        passTo: EMarkPassTo.port
      },
      {
        mark: marks.hbyc_rmys_a,
        passTo: EMarkPassTo.finish
      }
    ]
  }
]

// Intent is this will load courses from S3 eventually
export function GetCourses(): ICourse[] {
  return courses
}

export function GetCourse(courseId: string): ICourse | null {
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i]
    if (course.id === courseId) {
      return course
    }
  }
  return null
}

// Converts from degrees to radians.
function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180
}

// Converts from radians to degrees.
function toDegrees(radians: number) {
  return (radians * 180) / Math.PI
}

export function GetBearing(lon1: number, lat1: number, lon2: number, lat2: number) {
  lat1 = toRadians(lat1)
  lon1 = toRadians(lon1)
  lat2 = toRadians(lat2)
  lon2 = toRadians(lon2)

  const y = Math.sin(lon2 - lon1) * Math.cos(lat2)
  const x =
    Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)
  let brng = Math.atan2(y, x)
  brng = toDegrees(brng)
  return Math.floor((brng + 360) % 360)
}
