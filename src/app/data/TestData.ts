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
    {id: 1, title: 'Low', color: '#c4c4c4'},
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
      title: 'Clean room',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },
    {
      id: 3,
      title: 'Take a walk with friends',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 4,
      title: 'Study Angular',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 5,
      title: 'Study RxJS',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },
    {
      id: 6,
      title: 'Choose a hotel',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 7,
      title: 'Cook some dish',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 8,
      title: '10 pull-ups',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 9,
      title: 'Run 2 km',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },
    {
      id: 10,
      title: 'Some party',
      completed: false
    },
    {
      id: 11,
      title: 'Visit Angular webinar',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 12,
      title: 'Bay some food',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },
    {
      id: 13,
      title: 'Pass SoftServe exam',
      priority: TestData.priorities[2],
      completed: true
    },
    {
      id: 14,
      title: 'Make 1 000 000 deposit',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 15,
      title: 'Compare Apple vs Samsung',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')
    },
    {
      id: 16,
      title: 'Football',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')
    }
  ];
}

