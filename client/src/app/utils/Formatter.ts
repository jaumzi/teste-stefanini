
export const decimalAdjust = (type: 'ceil' | 'round' | 'floor', value: number, exp?: number): number => {
  // Se exp é indefinido ou zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }

  value = +value;
  exp = +exp;

  // Se o valor não é um número ou o exp não é inteiro...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  // Transformando para string
  let stringValue = value.toString().split('e');
  value = Math[type](+(stringValue[0] + 'e' + (stringValue[1] ? (+stringValue[1] - exp) : -exp)));
  // Transformando de volta
  stringValue = value.toString().split('e');

  return Number(stringValue[0] + 'e' + (stringValue[1] ? (+stringValue[1] + exp) : exp));
};

export const toPrince = (value: number) => {
  return decimalAdjust('round', value, -2).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};
