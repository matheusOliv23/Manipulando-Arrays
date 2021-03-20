// Manipulando Arrays

let tecnologias = ["css", "html", "js"]

//adicionar um item no fim
tecnologias.push('reactjs')

//adicionar no começo
tecnologias.unshift('nextjs')

//remover do fim
tecnologias.pop()

//remover do começo
tecnologias.shift()

//pegar somente alguns elementos do array
//console.log(tecnologias.slice(1,3))

//remover 1 ou mais itens em qualquer posição do array
//tecnologias.splice(2)

//encontrar a posição de um elemento no array
let index = tecnologias.indexOf('css')
tecnologias.splice(index, 1)



console.log(tecnologias)
