import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers } from "../features/users/usersSlice";

export default function EditPage() {
  const { userId } = useParams();
  const { usersList } = useSelector((store) => store.users);
  console.log(userId);
  const selectedUser = usersList?.find(
    (user) => user.id === parseInt(userId, 10)
  );
  console.log(selectedUser);

  const [name, setName] = useState(selectedUser.name);
  const [mail, setMail] = useState(selectedUser.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editUsers({ userId, name, mail }));
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4 bg-slate-400 p-3 gap-y-4">
        <p>Update User</p>
        <form className="flex flex-col gap-y-3" onSubmit={submitHandler}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="enter name"
            className="p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="text"
            placeholder="enter email"
            className="p-2"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <button type="submit" className="bg-blue-500 p-2">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
