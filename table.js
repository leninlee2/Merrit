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
        result = {}
        for(vs = 1;vs <= 8;vs++){
            for(hs = 0;hs < xvectory.length;hs++){
                item = new Table()
                item.y = vs
                item.x = this.xvectory[hs]
                result.push(item)
            }
        }
        return result
    }
}

module.exports = TableData