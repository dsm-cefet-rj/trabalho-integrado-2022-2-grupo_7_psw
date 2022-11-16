import { selector } from "recoil";

export const asyncEvents = selector ({
    get: async () => {
        const httpResponse = fetch('http://localhost:3004/news')
        const jsonEvent = await httpResponse.json();
        return jsonEvent.map(event => ({
            ...event,
            id: event.id,
            url: event.url,
            title: event.title,
            subtitle: event.subtitle,
            contents: event.contents
        }))
    }
})