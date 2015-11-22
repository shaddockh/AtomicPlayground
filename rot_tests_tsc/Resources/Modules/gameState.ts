
export class GameState {
  private _level:any;
  private _levelRenderer;

  getCurrentLevel():any {
    return this._level;
  }

  setCurrentLevel(level:any) {
    this._level = level;
  }

  getCurrentLevelRenderer() {
    return this._levelRenderer;
  }

  setCurrentLevelRenderer(levelRenderer) {
    this._levelRenderer = levelRenderer;
  }

}

const gameState = new GameState();
export default gameState;
