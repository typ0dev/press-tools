let emojis = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

export async function gen() {
    async function article() {
        let response = await fetch('https://fish-text.ru/get')
        let json = await response.json()
        let article = []
        let random = Math.floor(Math.random()*json.text.split('.').length)
        article.push(json.text.split('.')[random])
        article.push(" ")
        let randomemoji = Math.floor(Math.random()*emojis.length)
        article.push(emojis[randomemoji])
        let text = article.join('')
        return text
    }

    let article1 = await article()
    let article2 = await article()
    let article3 = await article()

    let post = []
    post.push(article1)
    post.push('|')
    post.push(article2)
    post.push('|')
    post.push(article3)

    let text = post.join('')
    return text
}