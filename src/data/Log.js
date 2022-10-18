export default class Log {
    constructor() {
        this.logList = []
        this.logData = null
    }

    getLog() {
        var ths = this
        return ths.logs
    }

    getLogList() {
        var ths = this
        return ths.logList
    }

    logInsert(data) {
        var ths = this
        ths.logs += `,Insert(${data})`
        ths.logList.push(`Insert(${data})`)
    }

    logDelete(data) {
        var ths = this
        ths.logs += `,Delete(${data})`
        ths.logList.push(`Delete(${data})`)
    }

    logSearch(data){
        var ths = this
        ths.logs += `,Search(${data})`
        ths.logList.push(`Search(${data})`)
    }

}
