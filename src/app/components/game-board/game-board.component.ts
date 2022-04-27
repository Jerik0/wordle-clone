import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  selectedWord = 'apple';
  wordLength = 4;
  attempts = 5;

  constructor(private backendService: BackendService) {}

  ngOnInit = () => {
    this.backendService.getNewWord(this.wordLength+1).subscribe((data: any) => {
      console.log(data);
      this.selectedWord = data[0];
    })
  }

  getNewWord = (): void => {
    this.backendService.getNewWord(this.wordLength+1).subscribe((data: any) => {
      console.log(data);
      this.selectedWord = data[0];
    })
  }

  resetBoard = (): void => {

  }

}
