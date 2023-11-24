type ProductRate = {
    rate: number
    count: number
}

export type Product = {
    id: number
    title: string
    price: number
    image: string
    // ....
    rating: ProductRate
}


type Student {
    id: number
    image: string
    name: string
    age: number
    class: number
    school: string
}

const student = () => {
// javascript
//




}


// enum number

enum PrindMedia {
    Newspaper = 2,
    Newsletter = 1,
    Magazine,
    Book
}



// enum String

enum PrindMedia2 {
    Newspaper = 'Newspaper',
    Newsletter = 'Newsletter',
    Magazine = 'Magazine',
    Book ='Book'
}

const status = 1 || 2
status === PrindMedia.Newsletter;

const status2 = 'Newsletter'
status2 ===  PrindMedia2.Newsletter;
// ||
// uniom |

let code: (string | number);

// &&
//Intersection &




// any 
// @ts-igore

let something: any = "Hello word";

something = true


// Void

function sayHi(): void {
    console.log('Hi!')
    //return
}

// onChange: () => void

//Generics <>

Array< number >
// use State<number>

//Literal Types

// type Gt = string // 'nam'
type Gt = 'Nam' | 'Nu' //
const gioiTinh: Gt = 'nam'

//never

let a : string & number = 1

//unknow

// utility Types

// Partial (?) chuyên về option

type Student3 = {
    id:number
}

type student4 = Partial<Student3>
// {

//id?: number

//}

// Required chuyên về require

type Student5 = {
    id?:number
    age?:number
    gioiTinh: 'nam' | 'nu'
}

type student6 = Required<Student5>





// pick lấy type

type student7 = Pick<Student5, 'age' | 'gioiTinh'>

// Omit bỏ qua type
type student8 = Omit<student6, 'gioiTinh'>









