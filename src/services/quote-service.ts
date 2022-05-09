import { Quote } from '@/models/quote'

class QuoteService {


    isOk(response: Response) {
        return response.ok ? response.json() : Promise.reject('Failed to load data from server')
    }    

    private async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async getQuote(id: number): Promise<Quote | undefined> {
        const url = `http://localhost:3000/quotes/${id}`

        await this.sleep(5000)
        
        const quote = await fetch(url)
            .then(this.isOk)
            .then(data => {
                return data as Quote
            })
            .catch(error => {
                console.log(error)
                return undefined
            })
        
        return quote ?? undefined
    }
}

export default new QuoteService()