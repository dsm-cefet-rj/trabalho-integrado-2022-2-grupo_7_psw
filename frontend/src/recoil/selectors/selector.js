import { selector, useRecoilValue } from "recoil";

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
            contents: event.contents,
            timestamp: event.time,
        }))
    }
})

export const highLightsNews = selector ({
    key: "highLights",
    get: async () => {
        const response = await fetch('http://localhost:3004/news');
        if(!response.ok){
            throw new Error(`Error! Status: ${response.status}`)
        }
        

        const result = await response.json();
        const listMap = result.map(event => ({
            ...event,
            id: event.id,
            url: event.url,
            title: event.title,
            subtitle: event.subtitle,
            contents: event.contents,
            timestamp: event.time,
        }))        

        console.log(listMap)
        listMap.sort((a, b) => {
            return b.time - a.time
        })
        console.log(listMap)     
        let filtered = []
        listMap.forEach(() => {            
            if(listMap.length > 4){
                listMap.pop();
            }
        });
        


        return  listMap;
    }
})
