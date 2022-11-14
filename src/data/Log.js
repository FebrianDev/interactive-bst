export default class Log {
    constructor() {
        this.logList = []
        this.logs = ""
    }

    getLogList() {
        var ths = this
        return ths.logList
    }

    getLog(){
        var ths = this
        return ths.logs
    }

    logInsert(data) {
        var ths = this
        ths.logs += `insert:${data},`
        ths.logList.push(`insert(${data})`)
    }

    logDelete(data) {
        var ths = this
        ths.logs += `delete:${data},`
        ths.logList.push(`delete(${data})`)
    }

    logSearch(data) {
        var ths = this
        ths.logs += `search:${data},`
        ths.logList.push(`search(${data})`)
    }

    logPreOrder() {
        var ths = this
        ths.logs += `preorder,`
        ths.logList.push(`preorder()`)
    }

    logPostOrder() {
        var ths = this
        ths.logs += `postorder,`
        ths.logList.push(`postorder()`)
    }

    logInOrder() {
        var ths = this
        ths.logs += `inorder,`
        ths.logList.push(`inorder()`)
    }
}
