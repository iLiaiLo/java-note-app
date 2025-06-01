import { GiCancel } from "react-icons/gi";
import { IoMdSave } from "react-icons/io";

const EditNote = ({ handleChange, handleSave, handleCancel, editedText }) => {
  return (
    <div className="flex justify-between gap-1">
      <input
        type="text"
        onChange={handleChange}
        value={editedText}
        className="border-1 border-solid border-gray-700 w-[70%] p-1 text-2xl outline-none"
      />
      <div className="p-2 flex justify-center gap-5 border-1 border-solid border-gray-600">
        <button onClick={handleSave}>
          <IoMdSave className="text-2xl cursor-pointer" />
        </button>
        <button onClick={handleCancel}>
          <GiCancel className="text-2xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default EditNote;
