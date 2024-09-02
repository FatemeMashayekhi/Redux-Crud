import { useDispatch, useSelector } from "react-redux";
import { postUsers } from "../features/users/usersSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const { loading, error } = useSelector((store) => store.users);
  const submitHandler = () => {
    dispatch(
      postUsers({
        name: name,
        email: mail,
        id: +new Date(),
      })
    );
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4 bg-slate-400 p-3 gap-y-4">
        <p>Add New User</p>
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
