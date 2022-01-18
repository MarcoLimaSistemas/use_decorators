function delay (ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any) {
      setTimeout(() => {
        console.log(`Esperando ${ms}`)
        originalMethod.apply(this, args)
      }, ms)
    }
  }
}

class Greeter {
    greeting: string;

    constructor (g: string) {
      this.greeting = g
    }

    @delay(3000)
    greet () {
      console.log(`Olá ${this.greeting}`)
    }
}

const pessoa = new Greeter('Marco')
pessoa.greet()

// Output :
/*
   Esperando 3000
   Olá Marco
*/
