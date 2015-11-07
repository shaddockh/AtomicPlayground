declare module 'rot-js' {
  module ROT {

    module Path {
      class AStar {
          constructor(x:number, y:number, callback:(checkX:number,checkY:number) => void,options:any);
      }
    }
  }

  export = ROT;
}
