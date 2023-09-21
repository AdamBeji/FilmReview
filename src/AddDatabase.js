import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './Table.css';

const firebaseConfig = {
    apiKey: "AIzaSyAIkUADPFKXDvI_O03zYzBh4xMggOojygI",
    authDomain: "movie-reviewer-bd3b4.firebaseapp.com",
    databaseURL: "https://movie-reviewer-bd3b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movie-reviewer-bd3b4",
    storageBucket: "movie-reviewer-bd3b4.appspot.com",
    messagingSenderId: "785095003004",
    appId: "1:785095003004:web:a7e6a375644f2d590772f9",
    measurementId: "G-VG6MM891KN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function AddDatabase() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [adamRating, setAdamRating] = useState('');
  const [kiaRating, setKiaRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title ||  !date || !adamRating || !kiaRating) {
        alert('Please fill in all fields before submitting.');
        return;
      }

   
    addMovieToDatabase(title, date, adamRating, kiaRating);

    setTitle('');
    setDate('');
    setAdamRating('');
    setKiaRating('');

    window.location.reload();
  };

  const addMovieToDatabase = (title, date, adamRating, kiaRating) => {
    const moviesRef = ref(database, 'movies'); 
    const newMovieRef = push(moviesRef);

    const movieData = {
      title: title,
      date: date,
      AdamRat: adamRating,
      KiaRat: kiaRating
    };

    set(newMovieRef, movieData)
      .then(() => {
        console.log('Movie added successfully.');
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div className='AddTable'>
      <form className='movie-form' onSubmit={handleSubmit}>
        <input className='form-input' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className='form-input' type="text" placeholder="Date dd/mm/yyyy" value={date} onChange={(e) => setDate(e.target.value)} />
        <input className='form-input' type="text" placeholder="Adam Rating" value={adamRating} onChange={(e) => setAdamRating(e.target.value)} />
        <input className='form-input' type="text" placeholder="Kia Rating" value={kiaRating} onChange={(e) => setKiaRating(e.target.value)} />
        <button className='submit-button' type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddDatabase;
