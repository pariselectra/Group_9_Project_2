module.exports ={
    continue: (id) => {
        return id+1
    },
    checkAnswer: (data, answer, id) => {
        if(data === answer) {
            return `/api/game/cont/${id}`
        }else{
            return `/api/game/death/${id}`
        }
    }
}

