import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function (id) {
  return items.find(item => item.id === id);
};

const addItem  = function (name) {
  try {
    item.validateName(name);
    const test = item.create(name);
    this.items.push(test);
  }
  catch(e) {
    console.log(`Cannot add item: ${e.messsage}`);
  }
};

const findAndToggleChecked = function (id) {
  const check = findById(id);
  check.checked = !check.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const nameReplace = findById(id);
    nameReplace.name = newName;
  }
  catch(e) {
    console.log(`Cannot update name: ${e.messsage}`);
  }
};

const findAndDelete = function(id) {
  this.items = this.items.filter(item => item.id !== id);
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
