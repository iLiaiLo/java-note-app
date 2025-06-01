import { useRef } from "react";

export const useTextColorController = ({ setTextColor, setNotes, note }) => {
  const timeRef = useRef(null);

  const handleDebounceTextColorChange = (e) => {
    const { value } = e.target;

    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(async () => {
      try {
        setTextColor(value);
        const updatedObj = {
          noteText: note.noteText,
          textColor: value,
          bgCol: note.bgCol,
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
        setNotes((notes) => {
          return notes.map((nt) => {
            if (nt.id === note.id) {
              return { id: note.id, ...updatedObj };
            }
            return nt;
          });
        });
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };
  return { handleDebounceTextColorChange };
};
