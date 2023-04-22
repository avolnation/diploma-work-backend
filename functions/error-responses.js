exports.setErrorResponse = (errorCode) => {
    const STATUS = {
        code: errorCode,
        status: "error",
    };

    switch (errorCode) {
        case :
        return {
            ...STATUS,
            message: "У данного студента сейчас нет пар"
        }
        break;
        case :
        return {
            ...STATUS,
            message: "Вы уже прошли регистрацию посещения для данной пары"
        }
        break;
        case :
        return {
            ...STATUS,
            message: "Вы опоздали, но, если вы уже прошли регистрацию на данную пару, нет повода волноваться!"
        }
        break;
        case :
        return {
            ...STATUS,
            message: "Не та аудитория."
        }
        case :
        return {
            ...STATUS,
            message: "Студента с таким ID не найдено в базе!"
        }
        case :
        return {
            ...STATUS,
            message: "Такая информация уже есть на сервере!"
        }
    }
}