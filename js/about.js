const team = [{"name": "Maks", "role": "lead", "favorite_lang": "Javascript"},
{"name": "Bryce", "role": "UI design", "favorite_lang": "css"},
{"name": "Brandon", "role": "Back-end", "favorite_lang": "React"},]

let lang = [];
team.forEach(team => lang.push( `${team.favorite_lang}`));
console.log(lang);
