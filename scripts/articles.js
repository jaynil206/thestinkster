// this page is just for drafting things
class Article {
    constructor(title, date, liked, saved, content, comments) {
        this.title = title;
        this.date = date; 
        this.liked = liked; 
        this.saved = saved; 
        this.content = content; 
        this.comments = comments; 
    }
}
// now we can initialise 9 articles to go into the database
let article1 = new Article(
    'why henderson is the greatest english footballer of all time',
    '22-01-23', 
    false, false, 
    'wow. i just spent two hours watching jordan henderson highlights and i am speechless!',
    ['i totally agree - #14 is my boss and my lord']
); 
let article2 = new Article(
    'sources confirm elon musk is the smartest man on the planet',
    '01-01-23', 
    false, false, 
    "experts working at the lex fridman institute of midwit affairs have reached the conclusion that elon is the second coming of ronald macdonald. a spokesperson for the group said that this was a time to celebrate! we at the stinkster could not (dis)agree more.",
    ['']
); 
let article3 = new Article(
    "does gen z's stupidity explain their struggles in the housing market?",
    '25-12-22', 
    false, false, 
    'youngsters are soft. many are stupid. so is it a surprise that they struggle to get on the housing ladder, particularly in comparison to us boomers? so-called economists have tried to explain this in terms of growing inequality and housing shortages, but that is simply communist tomfoolery. by the time i was 18 i owned three properties, two cars, and one divorce. so if you are a gen z reading this i have one thing to say: pull yourself up by the bootstraps and cancel your netflix subscription sunshine - it is time to wake up!',
    ['']
); 
let article4 = new Article(
    'the earth is flat - it is time to stop pretending otherwise.',
    '07-12-22', 
    false, false, 
    "if u are reading this in australia, and you are not currently falling off of the earth towards the depths of hellfire, then i have proven my point. you stopped believing in santa when you were seven ... why continue believing fairtytales now?",
    ['']
); 
let article5 = new Article(
    'community recycling is actually an FBI domestic surveillance operation',
    '29-11-22', 
    false, false, 
    "don't let liberals tell you that recycling saves the planet. i spent four weeks trailing my local recycling truck to find out where it actually all goes. well, let me tell you. it goes straight to the globalist government. patriots, it's time to stand up for our rights! #stayoutofmytrash",
    ['']
); 
let article6 = new Article(
    'am i wrong for being suspicious of pineapples?',
    '05-11-22', 
    false, false, 
    'nobody can tell me that they have looked at that spiky, booby-trap of a plant and thought wow i bet this tastes good. something should not look so deadly yet taste so good. i am yet to confirm if this is the work of satan himself or simply one of his interns, but either way i will be steering well clear in the forseeable future. i pray that we are guided to answers soon.',
    ['']
); 
let article7 = new Article(
    'why build generational wealth when you can rack up generational debt?',
    '07-02-23',
    false, false, 
    "dear investors: don't get lost in the sauce 😏😏 lot's of noise these days about 'inflation'... i just bought my third house broski 🙈 how did i pay for it, i hear you ask?? i am in £256,234 debt and owe 15 years of servitude to an albanian crime syndicate (payable in 2035). invest in today and you'll never have to worry about tomorrow. be the klarna baddie you were born to be 😍",
    ['']
); 
let article8 = new Article(
    `local ants stage successful protest against homeowner's "deluded" plans for garden renovation`,
    '12-04-23',
    false, false, 
    "the Chipping Norton Parish Council have drawn significant press attention following their controversial decision to reject ex-banker Tobias Housley's plans to plant an endagered species of West Caribbean Palm in the 3 acre garden of his £4.3 million home. after hearing of Housley's plans to bring 'island-gyal vibes' to his north-oxfordshire estate, tribal leaders from various clans of the local ant colony colluded to stage 3 weeks of non-violent disruptive action, ranging from slow-marches through the village square, to the kidnapping of the village priest, which prompted an emergency meeting of the Chipping Norton Parish Council. their decision today marks a watershed in arthropodic history. you can hear more about this story tonight on Piers Morgan Live.",
    ['']
); 
let article9 = new Article(
    `mirror mirror on the wall, who's the lengest baddie of them all?`,
    '20-06-23',
    false, false, 
    "you 🙈",
    ['']
); 

let articleArray = [article1, article2, article3, article4, article5, article6, article7, article8, article9]


