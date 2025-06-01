import React, { useState } from "react";

import EditNote from "./EditNote";
import OriginalNote from "./OriginalNote";

import { editNoteController } from "../../controllers/editNoteControllers";
import { saveNoteController } from "../../controllers/saveNoteController";
import { deleteNoteController } from "../../controllers/deleteNoteController";
import { useNoteColorController } from "../../controllers/noteColorController";
import { resetStylesController } from "../../controllers/resetStylesController";
import { useTextColorController } from "../../controllers/textColorController";

const Note = ({ note, setNotes }) => {
  const [editedText, setEditedText] = useState(note.noteText);
  const [bgCol, setBgCol] = useState(note.bgCol);
  const [textColor, setTextColor] = useState(note.textColor);
  const [edit, setEdit] = useState(false);

  const { handleEdit, handleCancel, handleChange } = editNoteController({
    edit,
    setEdit,
    setEditedText,
  });
  const { handleSave } = saveNoteController({
    setNotes,
    note,
    editedText,
    textColor,
    bgCol,
    setEdit,
  });
  const { handleDelete } = deleteNoteController({ setNotes, note });

  const { handleDebounceNoteColorChange } = useNoteColorController({
    note,
    setBgCol,
    setNotes,
  });

  const { handleReset } = resetStylesController({
    note,
    setNotes,
    setBgCol,
    setTextColor,
  });
  const { handleDebounceTextColorChange } = useTextColorController({
    note,
    setTextColor,
    setNotes,
  });

  return (
    <div
      style={{ backgroundColor: note.bgCol }}
      className="border-1 border-solid border-black margin-[10px] p-[10px]"
    >
      <section>
        {edit ? (
          <EditNote
            handleChange={handleChange}
            handleSave={handleSave}
            handleCancel={handleCancel}
            editedText={editedText}
          />
        ) : (
          <OriginalNote
            note={note}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDebounceNoteColorChange={handleDebounceNoteColorChange}
            bgCol={bgCol}
            handleDebounceTextColorChange={handleDebounceTextColorChange}
            textColor={textColor}
            handleReset={handleReset}
          />
        )}
      </section>
    </div>
  );
};

export default Note;
