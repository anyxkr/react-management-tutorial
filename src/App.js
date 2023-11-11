import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/200/150?1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/150?2',
    name: '이순신',
    birthday: '930211',
    gender: '남자',
    job: '디자이너',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/150?3',
    name: '트와이스',
    birthday: '970303',
    gender: '걸그룹',
    job: '가수',
  }
];

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id} 
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          );
        })
      }
    </div>
  );
}

export default App;
