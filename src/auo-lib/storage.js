const STORAGE_NAME = "auo-todolist"

const getLists = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveLists = (todolists) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todolists))
}

const getList = (id) => {
  const todolists = getLists()
  return todolists.find((todo) => todo.id == id)
}

export { getLists, saveLists, getList }
