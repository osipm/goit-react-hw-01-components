export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li class="item" kay={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
