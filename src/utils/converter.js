import convert from 'convert-units';

export function convertUnits(value, from, to) {
  return convert(value).from(from).to(to);
}
