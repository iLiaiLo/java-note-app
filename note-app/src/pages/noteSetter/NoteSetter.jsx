import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { noteCreated, textIsEmoty } from "../../notifications/messages";

const NoteSetter = ({ loading, setLoading, setNotes }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = async () => {
    try {
      if (text === "") {
        textIsEmoty();
        return;
      }
      setLoading(true);
      const newObj = {
        id: Date.now(),
        noteText: text,
        textColor: "#000000",
        bgCol: "#FFFF00",
      };
      await fetch("{env.server}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
      setNotes((notes) => {
        return [...notes, newObj];
      });
      setText("");
      setLoading(false);
      noteCreated();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-2 flex justify-center gap-2">
      <input
        disabled={loading}
        className="p-3 w-full max-w-[700px] bg-gray-200 outline-none text-2xl"
        type="text"
        value={text}
        placeholder="write note text"
        onChange={handleChange}
      />
      <button
        disabled={loading}
        className="p-2 border-2 border-solid border-gray-600
         w-[50px] flex justify-center items-center text-4xl cursor-pointer bg-gray-600 text-white hover:bg-gray-700"
        onClick={handleClick}
      >
        <IoIosAdd />
      </button>
    </div>
  );
};

export default NoteSetter;
