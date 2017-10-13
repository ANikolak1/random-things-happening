import { Injectable } from '@angular/core';

@Injectable()
export class SnakeService {

  constructor() { }
  private snakeScore: string = 'snakeGame';

  public store(score: number) {
    localStorage.setItem(this.snakeScore, JSON.stringify({ "best_score": score }));
  }

  public retrieve() {
    let storedToken = this.parse();
    if (!storedToken) {
      this.store(0);
      storedToken = this.parse();
    }

    return storedToken.best_score;
  }

  private parse() {
    return JSON.parse(localStorage.getItem(this.snakeScore));
  }

}
