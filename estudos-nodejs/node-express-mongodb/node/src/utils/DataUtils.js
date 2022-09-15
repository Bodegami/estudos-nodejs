class DataUtils {

    static dataHoraAtualComTimezone() {
        let today = Date.now();
        let now = new Date(today);
        return now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    }

}

export default DataUtils;