import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { LetterCellComponent } from './components/letter-cell/letter-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    KeyboardComponent,
    KeyComponent,
    LetterCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
