
  function score (letter) {
    const scoreStr = "a"

    if (letter === undefined ) {
    return 'give me a value'
    } 
      else if(scoreStr === letter){
        return "scored"
      }
    
    else  {
      return "you failed, try again"
    }
  }

  console.log(scoreStr())