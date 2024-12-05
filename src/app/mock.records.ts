import { Record } from "./record.interface";

export const RECORDS: Record[] = [
    {
        id: 1,
        type: 'entrata',
        account: 'cassa',
        amount: 10.00
      },
      {
        id: 2,
        type: 'uscita',
        account: 'conto corrente',
        amount: -5.00
      },
      {
        id: 3,
        type: 'entrata',
        account: 'cassa',
        amount: 7.50
      }
];