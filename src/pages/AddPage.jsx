import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostDataMutation } from "../features/users/usersApi";

export default function AddPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const [postUser, { isLoading, isError, error }] = usePostDataMutation();
  const submitHandler = () => {
    postUser({
      name: name,
      email: mail,
      id: +new Date(),
    });

    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
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
