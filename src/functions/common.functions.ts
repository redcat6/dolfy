export function roundNumber(num: number, decimalPlaces = 0): number {
  const p = Math.pow(10, decimalPlaces);
  const n = num * p * (1 + Number.EPSILON);
  return Math.round(n) / p;
}

export function enumToArrayNames<Type>(data: Type): string[] {
  return Object.keys(data).filter(
    (topping: string) => !new RegExp(/[0-9]/g).test(topping),
  );
}
