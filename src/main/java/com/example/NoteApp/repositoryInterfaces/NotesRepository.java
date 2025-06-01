package com.example.NoteApp.repositoryInterfaces;

import com.example.NoteApp.persistance.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note,Long> { }
