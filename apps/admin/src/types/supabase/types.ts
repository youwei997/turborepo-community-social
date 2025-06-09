import { TableInsert, TableRow, TableUpdate } from './helper';

export type Instrument = TableRow<'instruments'>;
export type NewInstrument = TableInsert<'instruments'>;
export type UpdateInstrument = TableUpdate<'instruments'>;
