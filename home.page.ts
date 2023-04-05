import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {
 @ViewChild('guessInput', { static: false }) guessInput: any;  
  words = [
    { word: 'eagle', clue: 'Name the United States national bird', guessedLetters: [], guessedCorrect: 0, guessedIncorrect: 0, total: 4, guessed: false },
    { word: 'cheetah', clue: 'Name the fastest animal in the world', guessedLetters: [], guessedCorrect: 0, guessedIncorrect: 0, total: 5, guessed: false },
    { word: 'antarctica', clue: 'Name the coldest place on Earth', guessedLetters: [], guessedCorrect: 0, guessedIncorrect: 0, total: 6, guessed: false },
    { word: 'jupiter', clue: 'Name the largest planet in the solar system', guessedLetters: [], guessedCorrect: 0, guessedIncorrect: 0, total: 7, guessed: false },
    { word: 'amazon', clue: 'Name the company that was originally called Cadabra', guessedLetters: [], guessedCorrect: 0, guessedIncorrect: 0, total: 5,  guessed: false },
  ];


  currentWordIndex: number = 0;
  currentWord: any;
  letterGuess: string = '';
  gameOver: boolean = false;
  gameResult: string = '';
  guessesSoFar: string = '';

  constructor() {
    this.currentWord = this.words[this.currentWordIndex];
  }

  nextWord() {
    this.currentWordIndex++;

    if (this.currentWordIndex >= this.words.length) {
      // Player has completed all available words
      this.gameOver = true;
      this.gameResult = 'Congratulations! You completed the game.';
    } else {
      this.currentWord = this.words[this.currentWordIndex];
      this.gameOver = false;
      this.gameResult = '';
    }
  }

  submitGuess() 
  {

    this.letterGuess = this.guessInput.value.toLowerCase();
    if (this.currentWord.guessedLetters.indexOf(this.letterGuess) === -1) 
    {
      this.guessesSoFar = this.guessesSoFar.concat(this.letterGuess.toString());
      this.currentWord.guessedLetters.push(this.letterGuess);
      if (this.currentWord.word.indexOf(this.letterGuess) === -1) 
      {
        // Incorrect guess
        this.currentWord.guessedIncorrect = this.currentWord.guessedIncorrect + 1;
        if (this.currentWord.guessedIncorrect === 5) 
        {
          // Player has used up all guesses, move on to next word
          this.gameOver = true;
          this.gameResult = 'You lose! Sorry you have had five wrong guesses';
          this.guessesSoFar = '';
        }
      } else {
        // Correct guess
        this.currentWord.guessedCorrect = this.currentWord.guessedCorrect + 1;        
        if (this.currentWord.guessedCorrect === this.currentWord.total) 
        {
          // Player has guessed all letters, move on to next word
          this.gameOver = true;
          this.gameResult = 'You win!';
          this.guessesSoFar = '';
        }
      }
    }

  }


}
