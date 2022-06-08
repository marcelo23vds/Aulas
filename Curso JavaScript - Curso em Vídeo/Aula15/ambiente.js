let num = [5, 8, 2, 9, 3]

num[5] = 6

num.push(1)

num.length

num.sort()

console.log(`nosso vetor é o ${num} e possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
