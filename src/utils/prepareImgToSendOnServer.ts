const prepareImgToSendOnServer = (fileListArr: FileList[], formData: FormData) => {
    fileListArr.map((files) => {
        for (let i = 0; i < files.length; i++){
            console.log(files[i])
            formData.append(files[i].name, files[i])
        }
    })
    return formData
}

export default prepareImgToSendOnServer