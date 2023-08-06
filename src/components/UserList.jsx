import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/features/userSlice';
import { nanoid } from 'nanoid';

/*
 * User component to List user and Add Users.
 */
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="px-2 space-y-4">
        <h1 className="text-4xl py-4">User List</h1>
        {users.map((user) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={user.id}>
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-2">
        <h1 className="text-4xl py-4">Add User</h1>
        <div className="pb-2">
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
        </div>
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

export default UserList;
