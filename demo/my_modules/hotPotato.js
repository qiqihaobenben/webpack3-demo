import Queue from './queue'

function hotPotato(nameList, time) {
    let queue = new Queue();
    nameList.forEach((item, index) => {
        queue.enqueue(item)
    })
    let eliminated = '';
    while(queue.size() > 1) {
        for(let i = 0; i < time; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue();
        console.log(`${eliminated}在击鼓传花的游戏中被淘汰。`)
    }
    return queue.dequeue();
}

export default hotPotato;