import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import styles from './comment.module.css';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ecassano.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Victor Moura</strong>
              <time title="11 de maio às 08:14h" dateTime="2024-05-11 08:14:55">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
