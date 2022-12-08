export const timeToDate = (time, localDateType = "EN", detail = false) =>  {
    /*localDateType: EN or BR*/
    if(localDateType === "EN"){
        const date = new Date(time);
        let FormatDate = (date.getMonth()+1).toString() + "/"  + date.getDate().toString() + "/" +  date.getFullYear().toString();
        detail? FormatDate = FormatDate + " " + date.getHours() + ":"  + date.getMinutes(): FormatDate = FormatDate;
        return FormatDate;
    }
    if(localDateType === "BR"){
        const date = new Date(time);
        let dataFormatada = date.getDate().toString() + "/" + (date.getMonth()+1).toString() + "/" + date.getFullYear().toString();
        detail? dataFormatada = dataFormatada + " " + date.getHours() + ":"  + date.getMinutes(): dataFormatada = dataFormatada;
        return dataFormatada;
        
    }

}
