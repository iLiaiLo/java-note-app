package com.example.NoteApp.controllers;

import com.example.NoteApp.models.NoteDTO;
import com.example.NoteApp.requests.NoteRequest;
import com.example.NoteApp.services.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "{env.origin}")
@RestController
@RequestMapping("/notes")
public class NoteController {
    private final NoteService noteService;

    public NoteController(NoteService noteService){
        this.noteService=noteService;
    }

    @GetMapping
    List<NoteDTO> getNotes(){
        return noteService.getNotes();
    }

    @PostMapping
    ResponseEntity<Void> createNote(@RequestBody NoteRequest noteRequest){
        noteService.createNote(noteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("{id}")
    NoteDTO updateNote(@PathVariable Long id,@RequestBody NoteRequest noteRequest){
        return noteService.updateNote(id,noteRequest);
    }

    @DeleteMapping("{id}")
    ResponseEntity<Void> deleteNote(@PathVariable Long id){
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }

}
