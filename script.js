const quotes = [
    {
        name:'I have no special talent. I am only passionately curious.',
        quote:'Albert Einstein'
    },
    {
        name:'The future belongs to those who prepare for it today.',
        quote:'Malcolm X'
    },
    {
        name:'author number 3',
        quote:'quote number 3'
    },
    {
        name:'author number 4',
        quote:'quote number 4'
    },
    {
        name:'author number 5',
        quote:'quote number 5'
    },
    {
        name:'author number 6',
        quote:'quote number 6'
    }
]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote()
{
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
