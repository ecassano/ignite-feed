import styles from './avatar.module.css';

const Avatar = ({ border = true, src }) => {
  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
};

export default Avatar;
