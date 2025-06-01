package com.example.NoteApp.persistance;

import jakarta.persistence.*;

@Entity
@Table(name="note")
public class Note {

    @Id
    private long id;
    @Column(name="note_text")
    private String noteText;

    @Column(name="text_color")
    private String textColor;
    @Column(name="bg_col")
    private String bgCol;

    public void setId(long id){
        this.id=id;
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
