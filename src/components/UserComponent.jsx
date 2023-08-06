import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/features/userSlice';
import { nanoid } from 'nanoid';

/*
 * User component to List user and Add Users.
 */
const UserComponent = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <div>
        <h1 className="text-4xl">User List</h1>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl">Add User</h1>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email..."
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addUser({ id: nanoid(), name, email }))}
        >
          Add User
        </button>
      </div>
    </>
  );
};

export default UserComponent;
