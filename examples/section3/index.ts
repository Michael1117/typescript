/* interface LabelledValue {
    label: string
}

function printLabel(labelledObj : LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}

printLabel(myObj) */

// ==========================

/* interface Square{
    color: string
    area: number
}

interface SquareConfig{
    color? : string
    width? : number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100}

    if(config.color) {
        newSquare.color = config.color
    }

    if(config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({color: 'black'}) */

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a

a = ro as number[]

