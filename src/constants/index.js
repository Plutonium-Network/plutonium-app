export * from './ids';

export const SOLLET_URL = 'https://www.sollet.io';
export const AIRDROP_AMOUNT = 1; // 1 is the cap on the testnet

export const TX_FINALITY_CONFIRMED = "confirmed";
export const TX_FINALITY_FINALIZED = "finalized";

export const INSTRUCTION_CREATE_STREAM = 0;
export const INSTRUCTION_WITHDRAW_STREAM = 1;
export const INSTRUCTION_CANCEL_STREAM = 2;

export const EXPLORER_TYPE_TX = "tx";
export const EXPLORER_TYPE_ADDR = "address";

export const DATE_FORMAT = "yyyy-MM-dd";
export const TIME_FORMAT = "HH:mm";

export const STREAM_STATUS_SCHEDULED = "scheduled";
export const STREAM_STATUS_STREAMING = "streaming";
export const STREAM_STATUS_COMPLETE = "complete";
export const STREAM_STATUS_CANCELED = "canceled";

//don't forget to update tailwind.config.js to safelist dynamically generated classes
export const STREAM_STATUS_COLOR = {
    [STREAM_STATUS_SCHEDULED]: 'gray', // now < start
    [STREAM_STATUS_STREAMING]: 'green', // start <= now < end
    [STREAM_STATUS_COMPLETE]: 'blue', //now >= end;
    [STREAM_STATUS_CANCELED]: 'red',
}
