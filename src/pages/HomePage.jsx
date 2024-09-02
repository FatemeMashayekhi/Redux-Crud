import { useDispatch, useSelector } from "react-redux";
import TableRow from "../components/TableRow";
import { useEffect } from "react";
import { getUsers } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersList, loading, error } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="flex flex-col justify-start text-left items-start gap-y-4 p-2 ">
        <p className="text-2xl font-semibold">React Crud App with Redux</p>
        <button
          type="button"
          className="bg-green-700 text-white p-2 rounded-lg"
          onClick={() => navigate("/create")}
        >
          Create +
        </button>
        <table className="table-auto border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <TableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
