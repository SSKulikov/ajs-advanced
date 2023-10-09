export default function outPropObj(obj, listSort) {
  if (listSort.length) {
    const res = [];
    const listObj = [];
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        listObj.push({ key: prop, value: obj[prop] });
      }
    }

    for (const elSort of listSort) {
      res.push(...listObj.splice(listObj.findIndex((e) => e.key === elSort), 1));
    }

    return [...res, ...listObj.sort((a, b) => (a.key > b.key ? 1 : -1))];
  }

  throw new Error('Вы должны передать массив свойств!');
}
