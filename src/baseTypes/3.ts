let some:unknown;
some = 'Text';
let str: string;
// так як згідно умови ми впевнені в значенні змінної some
// то можемо не перевіряти тип перед присвоенням а використати приведення типу
str = some as string;

export {};