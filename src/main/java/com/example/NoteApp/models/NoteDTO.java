package com.example.NoteApp.models;


public class NoteDTO {
    private long id;

    private String noteText;

    private String textColor;

    private String bgCol;

    public NoteDTO(long id,String noteText,String textColor,String bgCol){
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

    public String getTextColor(){ return textColor; }

    public String getBgCol(){
        return bgCol;
    }


}
