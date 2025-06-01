import React from "react";
import Note from "./Note";
import Loading from "../loading/Loading";
const Notes = ({ notes, setNotes, loading }) => {
  return (
    <div
      className="min-h-[300px]
      grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4 p-4"
    >
      {loading ? (
        <Loading />
      ) : !Array.isArray(notes) || notes?.length === 0 ? (
        <h2 className=" absolute top-[150px] left-[50%] -translate-1/2 text-4xl font-bold text-gray-800 italic text-shadow-lg/10">
          No notes so far
        </h2>
      ) : (
        notes?.map((note) => {
          return <Note setNotes={setNotes} note={note} key={note.id} />;
        })
      )}
    </div>
  );
};

export default Notes;
