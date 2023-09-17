export function isNil(val: any) {
  return val === null || val === undefined;
}

export function isEmpty(val: string | Array<unknown>) {
  return val.length === 0;
}
