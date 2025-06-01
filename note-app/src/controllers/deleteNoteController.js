import { noteDeleted } from "../notifications/messages";

export const deleteNoteController = ({ note, setNotes }) => {
  const handleDelete = async () => {
    try {
      await fetch(`{env.server}/${note.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNotes((notes) => {
        return notes.filter((nt) => nt.id !== note.id);
      });

      noteDeleted();
    } catch (error) {
      console.log(error);
    }
  };
  return { handleDelete };
};
