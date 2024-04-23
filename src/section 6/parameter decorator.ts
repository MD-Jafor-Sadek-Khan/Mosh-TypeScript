type WatchedParameters = {
  methodName: string
  parameterIndex: number
}

const watchedParameters: WatchedParameters[] = []

function Watch(type: any, methodName: string, parameterIndex: number) {
    type
  watchedParameters.push({ methodName, parameterIndex })
}

class Vihecle {
  move(@Watch speed: number,@Watch current:string){
    speed
    current
  }

  break(@Watch hardBreak:boolean){
    hardBreak
  }
}

console.log(watchedParameters);
