export const pickOption = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const pickFilter = (object, keys) => {
  let filters = [];
  keys.forEach((key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      if (key == "gender") {
        filters.push({ gender: object[key] });
      }
      if (key == "search") {
        filters.push({ name: { $regex: object[key], $options: "i" } });
      }
      if (key == "id_category") {
        filters.push({ id_category: object[key] });
      }
    }
  });

  return Object.keys(filters).length > 0 ? { $and: filters } : {};
};
