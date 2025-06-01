package com.example.NoteApp.requests;

public class NoteRequest {
    private long id;

    private String noteText;

    private String textColor;

    private String bgCol;

    public NoteRequest(long id,String noteText,String textColor,String bgCol){
        this.id=id;
        this.noteText=noteText;
        this.textColor=textColor;
        this.bgCol=bgCol;
    }


    public long getId(){
        return id;
    }

    public String getNoteText(){
        return noteText;
    }
    public void setNoteText(String noteText){
        this.noteText=noteText;
    }

    public String getTextColor(){
        return textColor;
    }

    public void setTextColor(String textColor){
        this.textColor=textColor;
    }

    public String getBgCol(){
        return bgCol;
    }

    public void setBgCol(String bgCol){
        this.bgCol=bgCol;
    }
}
