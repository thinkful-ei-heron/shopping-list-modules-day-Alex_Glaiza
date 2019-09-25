import item from './item.js';
const items = [];
const hideCheckedItems = false;
const findById = function(id) {
  const findItem = items.find((storeid) => storeid.id === id); 
  console.log(findItem);
  return findItem;
};
const addItem  = function(name) {
  try {
    item.validateName(name);
    const test = item.create(name);
    this.items.push(test);
  }
  catch(e) {
    console.log(`Cannot add item: ${e.messsage}`);
  }
};
const findAndToggleChecked = function(id) {
  const check = this.findById(id);
  return !check.checked;
};
const findAndUpdateName = function(id, newName) {
  try {
    validateName(newName);
    const nameReplace = findById(id);
    nameReplace.name = newName;
  }
  catch(e) {
    console.log(`Cannot update name: ${e.messsage}`);
  }
};
const findAndDelete = function(id) {
  const removeItem = findById(id);
  const removeIndex = removeItem.findIndex();
  removeItem.splice(removeIndex, 1);
};
export default {
  items,
  hideCheckedItems,
  findAndDelete,
  findAndUpdateName,
  findAndToggleChecked,
  addItem,
  findById
};
