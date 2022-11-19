import { selector } from "recoil";

export const asyncNewsList = selector ({
    key: "selector",
    get: async () => {
        
        const response = await fetch('http://localhost:3004/news');
        if(!response.ok){
            throw new Error(`Error! Status: ${response.status}`)
        }

        const result = await response.json();
        // console.log(jsonEvent);
        return result.map(event => ({
            ...event,
            id: event.id,
            url: event.url,
            title: event.title,
            subtitle: event.subtitle,
            contents: event.contents
        }))
    }
})
