import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const OriginalNote = ({
  note,
  handleEdit,
  handleDelete,
  handleDebounceNoteColorChange,
  bgCol,
  handleDebounceTextColorChange,
  textColor,
  handleReset,
}) => {
  return (
    <section>
      <h2
        style={{ color: note.textColor }}
        className="p-2 w-[100%] border-1 text-2xl break-all border-solid border-black"
      >
        {note.noteText}
      </h2>
      <div className="p-1 flex justify-between items-center mt-1 text-5xl">
        <button onClick={handleEdit} className="cursor-pointer">
          <FaRegEdit style={{ color: note.textColor }} />
        </button>
        <button onClick={handleDelete} className="cursor-pointer">
          <MdDelete style={{ color: note.textColor }} />
        </button>
      </div>
      <div className="p-1 flex flex-col gap-4 mt-1 border-1 border-solid border-black">
        <div className="gap-2 flex text-2xl items-center">
          <span style={{ color: note.textColor }}>Change note color</span>
          <input
            type="color"
            onChange={handleDebounceNoteColorChange}
            value={bgCol}
            className="w-[30px] h-[30px] border-2 border-solid border-gray-900 cursor-pointer m-0"
          />
        </div>
        <div className="gap-2 flex text-2xl items-center">
          <span style={{ color: note.textColor }}>Change note text color</span>
          <input
            type="color"
            onChange={handleDebounceTextColorChange}
            value={textColor}
            className="w-[30px] h-[30px] border-2 border-solid border-gray-900 cursor-pointer m-0"
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleReset}
          style={{ color: note.textColor }}
          className="py-1 text-2xl cursor-pointer mt-1"
        >
          Reset colors
        </button>
      </div>
    </section>
  );
};

export default OriginalNote;
