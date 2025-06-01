import { textIsEmoty, noteSaved } from "../notifications/messages";

export const saveNoteController = ({
  setNotes,
  note,
  editedText,
  textColor,
  bgCol,
  setEdit,
}) => {
  const handleSave = async () => {
    try {
      if (editedText === "") {
        textIsEmoty();
        return;
      }

      const updatedObj = {
        noteText: editedText,
        textColor: textColor,
        bgCol: bgCol,
      };
      await fetch(`{env.server}/${note.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      });
      setNotes((notes) => {
        return notes.map((nt) => {
          if (nt.id === note.id) {
            return { ...updatedObj, id: note.id };
          }
          return nt;
        });
      });
      setEdit(false);
      noteSaved();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSave,
  };
};
