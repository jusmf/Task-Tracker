export const getCurrentDate = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date();

  const day = days[date.getDate()];
  const month = months[date.getMonth()];
  const number = date.getDate();
  const year = date.getFullYear();

  return `${day}, ${month} ${number}, ${year}`;
};

export const generateUniqueId = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '*'];

  const getRandomIndex = () => Math.floor(Math.random() * 9);

  const randomNumber = getRandomIndex();
  const randomLetter = letters[getRandomIndex()];
  const randomSymbol = symbols[getRandomIndex()];

  return `${randomNumber}${randomLetter}${randomSymbol}`;
};

export const addTask = (task, list, setterFn) => {
  const newList = [
    ...list,
    {
      id: generateUniqueId(),
      isEditing: false,
      isActive: true,
      task,
    },
  ];
  setterFn(newList);
};

export const saveEditedTask = (string, id, list, setterFn) => {
  const updatedList = list.map(task => {
    if (task.id === id) {
      return { ...task, task: string, isEditing: false };
    }
    return task;
  });

  setterFn(updatedList);
};

export const deleteTask = (id, list, setterFn) => {
  const filteredList = list.filter(task => task.id !== id);
  setterFn(filteredList);
};

export const setEditingState = (id, list, setterFn) => {
  const editedList = list.map(task => {
    if (task.id === id) {
      return { ...task, isEditing: !task.isEditing };
    }
    return task;
  });
  setterFn(editedList);
};

export const toggleConfig = {
  ALL_TASKS: {
    showAllTasks: true,
    showActiveTasks: false,
    showCompletedTasks: false,
  },
  ACTIVE_TASKS: {
    showAllTasks: false,
    showActiveTasks: true,
    showCompletedTasks: false,
  },
  COMPLETED_TASKS: {
    showAllTasks: false,
    showActiveTasks: false,
    showCompletedTasks: true,
  },
};

export const getAllTasks = setterFn => setterFn(toggleConfig.ALL_TASKS);
export const getActiveTasks = setterFn => setterFn(toggleConfig.ACTIVE_TASKS);
export const getCompletedTasks = setterFn =>
  setterFn(toggleConfig.COMPLETED_TASKS);

export const setAsComplete = (id, list, setterFn) => {
  const newList = list.map(task => {
    if (task.id === id) {
      return { ...task, isActive: false };
    }
    return task;
  });

  setterFn(newList);
};

export const setAsActive = (id, list, setterFn) => {
  const newList = list.map(task => {
    if (task.id === id) {
      return { ...task, isActive: true };
    }
    return task;
  });
  setterFn(newList);
};
