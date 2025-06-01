import { useState, useEffect } from "react";

const useFetchTasks = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch("{env.server}");
        const data = await res.json();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return {
    notes,
    setNotes,
    loading,
    setLoading,
  };
};

export default useFetchTasks;
