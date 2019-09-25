const validateName = function(name) {
  if(name === ''){
    throw TypeError('Name must not be blank');
  }
  return name;
};
const create = function(name) {
  const item = {id: cuid(), name: name, checked: false};
  return item;
};
export default { validateName, create };
