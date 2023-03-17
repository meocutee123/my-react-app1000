export function toCamelCase(s: string) {
  return s.split('_')
    .map((x: string, index: number) => {
      if (index === 0) return x;
      return x.charAt(0).toUpperCase() + x.slice(1);
    })
    .join('');
}