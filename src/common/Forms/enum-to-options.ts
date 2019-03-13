export const enumToOptions = (enumObject: any) =>
  Object.entries(enumObject).reduce(
    (result, [key, value]) => ({ ...result, [key]: value }),
    { null: "" }
  );
