import {Category} from '../models/Category';
import {Priority} from '../models/Priority';
import {Task} from '../models/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Family'},
    {id: 2, title: 'Work'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Rest'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finances'},
    {id: 8, title: 'Gadgets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Car'},
    {id: 11, title: 'Repair'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#5ed021'},
    {id: 3, title: 'High', color: '#ffe515'},
    {id: 4, title: 'Important!', color: '#ff4100'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Fill gas',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },
    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11')
    },
    {
      id: 3,
      title: 'Clean room',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },
    {
      id: 4,
      title: 'Take a walk with friends',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 5,
      title: 'Study Angular',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Study RxJS',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },
    {
      id: 7,
      title: 'Choose a hotel',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Cook some dish',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: '10 pull-ups',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      title: 'Run 2 km',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },
    {
      id: 11,
      title: 'Some party',
      completed: false
    },
    {
      id: 12,
      title: 'Сходить на лекцию "Как научиться программировать на React"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },
    {
      id: 14,
      title: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: TestData.categories[0]
    },
    {
      id: 15,
      title: 'Pass SoftServe exam',
      priority: TestData.priorities[2],
      completed: true
    },
    {
      id: 16,
      title: 'Положить 1 000 000 в банк на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 17,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 18,
      title: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')
    },
    {
      id: 19,
      title: 'Compare Apple vs Samsung',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')
    },
    {
      id: 20,
      title: 'Football',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')
    }
  ];
}

