export const resetStylesController = ({
  note,
  setNotes,
  setBgCol,
  setTextColor,
}) => {
  const handleReset = async () => {
    try {
      const resetedObj = {
        noteText: note.noteText,
        textColor: "#000000",
        bgCol: "#FFFF00",
      };

      await fetch(`{env.server}/${note.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetedObj),
      });

      setNotes((notes) => {
        return notes.map((nt) => {
          if (nt.id === note.id) {
            return { ...resetedObj, id: note.id };
          }
          return nt;
        });
      });
      setBgCol("#FFFF00");
      setTextColor("#000000");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleReset };
};
