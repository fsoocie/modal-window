$.confirm = function (content) {
    return new Promise((resolve, reject) => {
    const modal = $.modal({
        width:'500px',
        closable: false,
        title: 'Удаление товара',
        content,
        onClose(){
            modal.destroy()
        },
        footerButtons: [
            {text: 'Отменить', type: 'secondary', handler() {
                    reject()
                    modal.close()
                }},
            {text: 'Удалить', type: 'danger', handler() {
                    resolve()
                    modal.close()
            }},
        ]
    })
        setTimeout(modal.open, 15)
    })
}