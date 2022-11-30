export const timeToDate = (time, localDateType = "EN") =>  {
    /*localDateType: EN or BR*/
    if(localDateType === "EN"){
        const date = new Date(time);
        const FormatDate = date.getMonth().toString() + "/"  + date.getDate().toString() + "/" +  date.getFullYear().toString();
        return FormatDate;
    }
    if(localDateType === "BR"){
        const date = new Date(time);
        const dataFormatada = date.getDate().toString() + "/" + date.getMonth().toString() + "/" + date.getFullYear().toString();
        return dataFormatada;
        
    }

}
