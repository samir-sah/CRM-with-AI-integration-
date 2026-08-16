// Express 5 catches async errors natively — this is just a passthrough
export const asyncHandler = (fn) => fn;