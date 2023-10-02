function superbowlWin(collection){
const record = collection.find((record)=>record.result==="W")
if(record){
    return record.year
}
    
}


