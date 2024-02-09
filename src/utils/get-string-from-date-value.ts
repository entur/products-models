export const getStringFromDateValue = (arg: number | string | Date) => {
  if (typeof arg === 'string') return arg;
  else if (typeof arg === 'number') return new Date(arg).toISOString();

  return arg.toISOString();
};
