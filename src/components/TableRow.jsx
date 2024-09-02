import { useDispatch } from "react-redux";
import { deleteUsers, getUsers } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function TableRow({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td className="px-4 py-2">{user.id}</td>
        <td className="px-4 py-2">{user.name}</td>
        <td className="px-4 py-2">{user.email}</td>
        <td className="px-4 py-2">
          <button
            type="button"
            className="bg-blue-600 text-white p-2 rounded-lg"
            onClick={() => navigate(`/edit/${user.id}`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-600 text-white p-2 rounded-lg"
            onClick={() =>
              dispatch(deleteUsers(user.id)).then(() => dispatch(getUsers()))
            }
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
