const test = require('tape')
const Horse = require('./horse.js')
const Table = require('./table.js')

test('Obtem posicao de vetor', (t) => {
    let matrix = ['a1','b2','c3']
    let value = 'b2'
    t.assert(new Horse().GetIndex(value,matrix) > 0, "Localiza indice corretamente")
    t.end()
})

test('Obtem todas as combinacoes possiveis para cavalo', (t) => {
    xvectory = ['a','b','c','d','e','f','g','h']
    let basex = 'd'
    let basey = 4
    let value = basex + '' + basey
    let result = new Horse().Combinations(value)
    let okayitem = 0
    t.assert(result.length > 0 && result.length <= 8, "Encontrou posicoes coerentes")
    for(let i = 0;i < result.length;i++){
        let coherent = result[i]
        //console.log(coherent.x)
        if(new Horse().GetIndex(coherent.x,xvectory) + 1 == new Horse().GetIndex(basex,xvectory) 
        || new Horse().GetIndex(coherent.x,xvectory) - 1 == new Horse().GetIndex(basex,xvectory) 
        || new Horse().GetIndex(coherent.x,xvectory) - 2 == new Horse().GetIndex(basex,xvectory)
        || new Horse().GetIndex(coherent.x,xvectory) + 2 == new Horse().GetIndex(basex,xvectory)
        ){
            
            if(coherent.y + 2 == basey
                || coherent.y - 2 == basey
                || coherent.y - 1 == basey
                || coherent.y + 1 == basey
                ){
                okayitem += 1
            }
        }
        
    }

    t.assert(result.length == okayitem, "Os items estao dentro do esperado")
    t.end()
})

test('Unificar dados padrao', (t) => {
    let entry = [{x:'a',y:1}]
    let result = new Horse().TreatResult(entry);
    //console.log(result[0])

    t.assert(result[0] == "a1", "Formatacao correta")
    t.end()
})

test('Obtem Range horizontal', (t) => {
    t.assert(new Table().GetHorizontal().length == 8, "Posicoes horizontais calculadas")
    t.end()
})

test('Tabuleiro Recursivo ', (t) => {
    t.assert(new Table().GetRecursiveTable().length == 64, "Tabuleiro Recursivo calculado")
    t.end()
})