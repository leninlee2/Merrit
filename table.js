class TableData {
    xvectory = ['a','b','c','d','e','f','g','h']
    x = "a"
    y = 0

    //constructor(x,y){
    //    this.x = x
    //    this.y = y
    //    //this.side=side
    //}

    GetHorizontal(){
        return this.xvectory
    }

    GetRecursiveTable(){
        let result = []
        for(let vs = 1;vs <= 8;vs++){
            for(let hs = 0;hs < xvectory.length;hs++){
                let item = new TableData()
                item.y = vs
                item.x = this.xvectory[hs]
                result.push(item)
            }
        }
        return result
    }
}

module.exports = TableData