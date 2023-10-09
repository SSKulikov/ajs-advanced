import outPropObj from '../app';

test('test outPropObj', () => {
  const toTest = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const listToSort = ['name', 'level'];
  expect(outPropObj(obj, listToSort)).toEqual(toTest);
});

test('test property list is null', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const listToSort = [];
  expect(() => outPropObj(obj, listToSort)).toThrowError();
});
