import Header from './components/Header';
import Post from './components/Post';

import styles from './App.module.css';

import './global.css';
import Sidebar from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ecassano.png',
      name: 'Eduardo Cassano',
      role: 'Front End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      // { type: 'paragraph', content: '#novoprojeto' },
      // { type: 'paragraph', content: '#nlw' },
      // { type: 'paragraph', content: '#rocketseat' },
    ],
    publishedAt: new Date('2024-10-10 13:35:27'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ramos-vini.png',
      name: 'Vinícius Ramos',
      role: 'Full Stack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      //   { type: 'paragraph', content: '#novoprojeto' },
      //   { type: 'paragraph', content: '#nlw' },
      //   { type: 'paragraph', content: '#rocketseat' },
    ],
    publishedAt: new Date('2024-10-10 13:38:47'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
