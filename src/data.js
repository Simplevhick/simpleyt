export const API_KEY = 'AIzaSyCL4a8Ch2gpkaV96IV5W91YTpgp2Kor62U'

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}