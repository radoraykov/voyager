import {FieldSchema, Schema} from 'compassql/build/src/schema';
export {FieldSchema, Schema} from 'compassql/build/src/schema';

import {Data} from 'vega-lite/build/src/data';

export interface Dataset {
  isLoading: boolean;

  name: string;
  schema: Schema;

  data: Data;
}

// FIXME: replace this with real data
export const DEFAULT_DATASET: Dataset = {
  isLoading: false,

  name: 'Sample',
  schema: new Schema({fields:
  [{
    name: 'q1',
    vlType: 'quantitative',
    type: 'number' as any,
    stats: {
      distinct: 2
    }
  }, {
    name: 'q2',
    vlType: 'quantitative',
    type: 'number' as any,
    stats: {
      distinct: 2
    }
  }, {
    name: 't',
    vlType: 'temporal',
    type: 'date' as any,
    stats: {
      distinct: 2
    }
  }, {
    name: 'n1',
    vlType: 'nominal',
    type: 'string' as any,
    stats: {
      distinct: 2
    }
  }, {
    name: 'n2',
    vlType: 'nominal',
    type: 'string' as any,
    stats: {
      distinct: 2
    }
  }] as FieldSchema[]}),

  data: {
    values: [
      {q1: 1, q2: 2, t: new Date(), n1: 'a', n2: 1},
      {q1: 100, q2: 23, t: new Date(), n1: 'c', n2: 1}
    ]
  }
};
