import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MatthewAraujo.png',
      name: 'Matthew Araujo',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    pubLishedAt: new Date('2021-10-19 14:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/renan-fig.png',
      name: 'Renan Figueredo',
      role: 'Back-End Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    pubLishedAt: new Date('2021-10-20 14:30:00'),
  }
];

export function App() {

  return (
    <div>
      <Header /> 
  
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {
            posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              pubLishedAt={post.pubLishedAt}  
            />
            )
            })
          }
        </main>
      </div>
    </div>
  )
}


