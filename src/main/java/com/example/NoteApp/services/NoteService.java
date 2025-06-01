package com.example.NoteApp.services;

import com.example.NoteApp.models.NoteDTO;
import com.example.NoteApp.persistance.Note;
import com.example.NoteApp.repositoryInterfaces.NotesRepository;
import com.example.NoteApp.requests.NoteRequest;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteService {
    private final NotesRepository notesRepository;

    public NoteService(NotesRepository notesRepository){
        this.notesRepository=notesRepository;
    }

    public List<NoteDTO> getNotes(){

        return notesRepository.findAll().stream().sorted(Comparator.comparingLong(Note::getId))
                .map(this::mapNote).collect(Collectors.toList());
    }
    public void createNote(NoteRequest noteRequest){
        Note note=new Note();
        note.setId(noteRequest.getId());
        note.setNoteText(noteRequest.getNoteText());
        note.setTextColor(noteRequest.getTextColor());
        note.setBgCol(noteRequest.getBgCol());

        notesRepository.save(note);
    }

    public NoteDTO updateNote(Long id,NoteRequest noteRequest){
        Note note = notesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Note not found with id: " + id));

        note.setNoteText(noteRequest.getNoteText());
        note.setTextColor(noteRequest.getTextColor());
        note.setBgCol(noteRequest.getBgCol());

        notesRepository.save(note);

        return mapNote(note);
    }

    public void deleteNote(Long id){
        notesRepository.deleteById(id);
    }

    private NoteDTO mapNote(Note note){
        return new NoteDTO(
                note.getId(),
                note.getNoteText(),
                note.getTextColor(),
                note.getBgCol()
        );
    }

}
