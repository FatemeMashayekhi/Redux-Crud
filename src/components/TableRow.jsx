/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { deleteUsers, getUsers } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { useDeleteDataMutation } from "../features/users/usersApi";

/* eslint-disable react/prop-types */
export default function TableRow({ user }) {
  const navigate = useNavigate();
  const [deleteUser, { isError }] = useDeleteDataMutation();

  const deleteHandler = (e) => {
    e.preventDefault();
    deleteUser(user.id);
  };

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
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
