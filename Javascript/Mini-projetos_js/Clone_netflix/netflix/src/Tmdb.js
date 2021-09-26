const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b'
const API_BASE ='https://api.themoviedb.org/3'


/*
-originais da netflix
-recomendados
-em altas
-acao
-comedia
-terror
-romance
-documetario
*/
const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json


}
export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                itens:[]
            },
            {
                slug: 'toprated',
                title: 'Ação',
                itens:[]
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                itens:[]
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens:[]
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens:[]
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                itens:[]
            }
        ]
    }
}
