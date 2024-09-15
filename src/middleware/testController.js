export const test = (c, next) => {
  console.log("Hello Middle");
  next();
};
