const isOneEdit = (wordA: string, wordB: string): boolean => {

    if (Math.abs(wordB.length - wordA.length) > 1) return false

    if (wordA.length > wordB.length) return wordA.toLocaleLowerCase().includes(wordB.toLocaleLowerCase())
    if (wordB.length > wordA.length) return wordB.toLocaleLowerCase().includes(wordA.toLocaleLowerCase())

    const stringA = wordA.toLowerCase().split("")
    const stringB = wordB.toLowerCase().split("")
    let stringDif = 0
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i] !== stringB[i]) stringDif++
        }
    

   
    return stringDif === 1

}

console.log("0","expected true",isOneEdit("anA", "anaa"))
console.log("1","expected true",isOneEdit("panana", "banana"))
console.log("2","expected false",isOneEdit("an", "anaa"))
console.log("3","expected false",isOneEdit("bananaaa", "banana"))
console.log("4","expected false",isOneEdit("bob", "ana"))


const stringCompression=(str:string):string=>{
const string=str.toLowerCase().split("")

let count=1
let result=""


    for(let i =0;i<string.length;i++){
        let lastChar=string[i]
        let next = string[i+1]
        if(lastChar===next) {
            count++
        }else{
            result+=(lastChar+count)
            count=1

        }

        
    }
       return result.length< str.length?result:str

}
console.log("0","expected a2b3",stringCompression("aabbb"))
console.log("1","expected escola",stringCompression("escola"))
console.log("2","expected a2b1c5a3",stringCompression("aabcccccaaa"))