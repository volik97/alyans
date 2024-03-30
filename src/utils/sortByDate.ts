import news from "../content/news.ts";

export function sortByDateNews(){
    return news
        .sort((a, b) => {
            return a.date.getTime() - b.date.getTime();
        })
        .reverse();
}

export function sortByDateCard(data: { visible:boolean, id: string; img?: string | undefined; title: string; description: string; category: string[]; date: string; type?: string | undefined; square?: string | undefined; LxWxH?: string | undefined; catalog?: string[] | undefined; }[]){
    return data
        .sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
            a.date = new Date(a.date)
            b.date = new Date(b.date)

            return a.date.getTime() - b.date.getTime();
        })
        .reverse();
}