
export const editNoteController=({setEdit,edit,setEditedText})=>{
    const handleEdit = () => {
        setEdit(!edit);
    }
    const handleCancel = () => {
        setEdit(false);
    }
    const handleChange = (e) => {
        setEditedText(e.target.value);
    }

    return {
        handleEdit,
        handleCancel,
        handleChange
    }
    
}