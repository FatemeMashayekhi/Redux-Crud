import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";
import { useGetDataQuery } from "../features/users/usersApi";

export default function HomePage() {
  const navigate = useNavigate();
  const { data: usersList, isLoading, isError, error } = useGetDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
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
