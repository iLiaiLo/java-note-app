import { Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Notes from "./pages/notes/Notes";
import NoteSetter from "./pages/noteSetter/NoteSetter";
import useFetchTasks from "./controllers/fetchTasks";
function App() {
  const { notes, setNotes, loading, setLoading } = useFetchTasks();

  return (
    <>
      <NoteSetter
        loading={loading}
        setLoading={setLoading}
        setNotes={setNotes}
      />
      <Notes notes={notes} setNotes={setNotes} loading={loading} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
