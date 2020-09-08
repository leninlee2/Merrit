const TableData = require('./table.js')

class Horse {

    //Get available positions to this part of game
    GetPositions(current,filledmypositions){
        //considering empty chess
        //I'll fill first all available positions:
        //chesstable = new Table("a",1,"none").GetPositions()
        let result = {}
        let treat_result = {}
        result = this.Combinations(current)
        //console.log(result)
        treat_result = this.TreatResult(result);
        treat_result = this.RemoveFilled(treat_result,filledmypositions)

        return treat_result
    }

    RemoveFilled(entry,comparer){
        for(let i = 0;i < comparer.length;i++){
            let value = comparer[i];
            for(let j = 0;j < entry.length;j++){
                if(entry[j] == value){
                    console.log(value)
                    entry.splice(j,1)
                }
            }
        }
        return entry;
    }

    TreatResult(entry){
        let result = []
        for(let i = 0;i < entry.length;i++){
            //console.log(entry[i].x + '-' + entry[i].y)
            let partial = entry[i].x + '' + entry[i].y
            result.push(partial)
        }
        return result
    }

    Combinations(current){
        let result = []
        let x = current.substring(0,1)
        let y = current.substring(1,2)

        let horizontal = new TableData().GetHorizontal()
        
        let index = this.GetIndex(x,horizontal)
        let line = index + 1
        
        let item = new TableData()
        //3x1-left
        if(line - 2 > 0){
            //  console.log('ponto-y:' + y)
            if(y*1 + 1 < 8){
            //    console.log('ponto a')
                item = new TableData()
                item.x = horizontal[line-3];
                item.y = y*1+1;
                result.push(item)
            }
        
            if(y*1 - 1 > 0 ){
              //  console.log('ponto b')
                item = new TableData()
                item.x = horizontal[line-3];
                item.y = y-1;
                result.push(item)
            }
            
        }

        //1x3 left
        if(line - 1 > 0){
            //console.log('ponto-y2:' + y)
            if(y*1 + 2 < 8){
              //  console.log('ponto a')
                item = new TableData()
                item.x = horizontal[line-2];
                item.y = y*1+2;
                //console.log(item.x+"-"+item.y)
                result.push(item)
            }
        
            if(y*1 - 2 > 0 ){
                //console.log('ponto b2')
                item = new TableData()
                item.x = horizontal[line-2];
                item.y = y-2;
                //console.log(item.x+"-"+item.y)
                result.push(item)
            }
            
        }


        //3x1 right
        if(line + 1 < 8){
        
            if(y*1 + 1 < 8){
                item = new TableData()
                item.x = horizontal[line+1]
                item.y = y*1 + 1
                result.push(item)
            }

            if(y*1 - 1 > 0 ){
                item = new TableData()
                item.x = horizontal[line+1]
                item.y = y*1 - 1
                result.push(item)
            }

        }

        //1x3 right
        if(line < 8){
        
            if(y*1 + 2 < 8){
                item = new TableData()
                item.x = horizontal[line]
                item.y = y*1 + 2
                result.push(item)
            }

            if(y*1 - 2 > 0 ){
                item = new TableData()
                item.x = horizontal[line]
                item.y = y*1 - 2
                result.push(item)
            }

        }

        return result
    }

    GetIndex(value,domain){
        let result = 0
        for(let i = 0;i < domain.length;i++){
            if(domain[i] == value){
                result = i;
            }
        }
        return result;
    }

}

module.exports = Horse