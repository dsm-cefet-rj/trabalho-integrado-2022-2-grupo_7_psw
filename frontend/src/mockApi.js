export default async function fetchNews(url){
    const resposta = await fetch(url);
    return resposta
}
