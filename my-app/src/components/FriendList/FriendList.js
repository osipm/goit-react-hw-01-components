import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li className={s.item} kay={friend.id}>
          <span className={friend.isOnline ? s.statust : s.statusf}></span>
          <img
            class={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
