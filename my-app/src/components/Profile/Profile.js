import s from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  url,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={url} alt="user avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.quantity}>{tag}</p>
        <p className={s.quantity}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
