import { Profile } from 'components/Profile/Profile';

export default function PilotList({ users }) {
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Profile props={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
