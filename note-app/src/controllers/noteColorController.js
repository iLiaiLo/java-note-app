import { useRef } from "react";

export const useNoteColorController = ({ note, setBgCol, setNotes }) => {
  const timerRef = useRef(null);

  const handleDebounceNoteColorChange = (e) => {
    const { value } = e.target;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      try {
        setBgCol(value);
        const updatedObj = {
          noteText: note.noteText,
          textColor: note.textColor,
          bgCol: value,
        };
        const res = await fetch(`{env.server}/${note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedObj),
        });
        if (!res.ok) {
          throw new Error("Error in updating note text color");
        }

        setNotes((notes) =>
          notes.map((nt) =>
            nt.id === note.id ? { id: note.id, ...updatedObj } : nt
          )
        );
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  return { handleDebounceNoteColorChange };
};
