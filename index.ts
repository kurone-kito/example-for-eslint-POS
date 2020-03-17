const getObject = () => ({ huge: ['sized'], dynamic: ['object'] });

const obj = Object.assign<{}, Record<string, string[]>>({}, getObject());
console.log(obj);
