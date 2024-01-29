const texts = [
    "Ao reviver memórias de minha infância lembro-me de aos 7-8 anos, ir à casa de uma vizinha e passar horas brincando com suas bonecas Polly. Claro que ao sair de casa, carregava comigo meus brinquedos pois como poderia eu, brincar com bonecas? Fazer isso escondido dos meus pais era libertador ao mesmo tempo que arriscado. E se eu fosse pega? E se uma das bonecas quebrasse em minhas mãos? E se aquela boneca fosse minha? E se eu fosse a boneca? E se ela fosse eu?",
    "A retificação do nome e gênero na certidão de nascimento é uma etapa crucial para pessoas trans, pois representa o reconhecimento legal e a validação de suas identidades.",
    "A imposição de preceitos binários na moda reflete uma visão limitada e restritiva, que perpetua estereótipos de gênero. Ao insistir em categorias rígidas, essa abordagem nega a diversidade e complexidade das identidades de gênero. A moda, quando adere a esses padrões, contribui para a marginalização de indivíduos que não se encaixam nesses moldes predefinidos, limitando a expressão pessoal e reforçando normas arcaicas.",
    "Durante a infância, buscava nos outros algo semelhante para validar minha existência, mas, infelizmente, os olhares que me retornavam destacavam sempre o quanto eu era percebida como diferente. Com o tempo, esses olhares passaram a rotular essas diferenças, resultando em contínuos processos de violência psicológica. Agora, compreendendo-me como travesti, percebo os olhares que se dirigem ao meu corpo ao transitar por diferentes espaços. Alguns desses olhares continuam a me violentar mas sei que em algum lugar, alguém me observa, podendo reconhecer e validar sua própria existência através da minha jornada.",
    "Em um mundo baseado em percepções binárias de gênero, ao reivindicar-se enquanto pessoa trans estamos sujeitas a imposições sociais para nos encaixarmos novamente em um padrão idealizado de gênero. A pressão estética que recai sobre corpos trans, faz com que vivamos constantes crises de disforia por nos vermos distantes destes ideais. O sentimento de insatisfação e rejeição do próprio corpo faz com que muitas pessoas recorram a procedimentos indevidos, na busca por se adequar a estes padrões.",
    "Do pajubá, aquendar, significa esconder. Prática comum entre travesti, aquendar a neca - esconder o pau - consiste no ato de comprimir a genitália afim de anular o volume e causar a impressão visual de ser uma buceta.",
    "Imagine que a cirurgia de redesignação de gênero para uma mulher trans seja comparável a um capítulo final em um livro que muitos insistem em considerar como obrigatório para validar toda a narrativa. É como se a sociedade visse essa cirurgia como a última página que deve ser alcançada para validar a jornada de uma mulher trans, ignorando ou minimizando toda a história anterior, repleta de vivências, desafios e sentimentos que compõem sua identidade. No entanto, focar apenas na cirurgia de redesignação como o ápice da transição de gênero é semelhante a julgar um livro apenas por sua conclusão, sem apreciar ou entender a complexidade e a riqueza de cada capítulo anterior. A real necessidade da cirurgia de redesignação de gênero para uma mulher trans deve ser vista como uma escolha pessoal, não como um marco final que define sua identidade, respeitando-se o direito de cada indivíduo de expressar e viver sua identidade de gênero da maneira que se sente mais autêntico e confortável.",
    "O reducionismo genitalista é uma abordagem que simplifica a identidade de gênero para se basear exclusivamente em características genitais. No contexto dos corpos trans,essa perspectiva limitada desconsidera a complexidade das experiências transgênero, focando apenas na anatomia física. É crucial reconhecer que a identidade de gênero vai além dos órgãos genitais, abrangendo aspectos psicológicos, sociais e culturais. Ao adotar uma visão mais abrangente, podemos promover uma compreensão mais inclusiva e respeitosa das diversas identidades de gênero existentes."
]
let coisa = document.getElementById("other-works")

numbers = []
while (numbers.length < 4) {
    var r = (Math.floor(Math.random() * 8) + 1).toString();
    if (numbers.indexOf(r) === -1 && r !== document.currentScript.getAttribute("current")) numbers.push(r);
}
for (i of numbers) {
    // pick 4 different random numbers from 1 to 8
    new_card = document.createElement("div");
    new_card.className = "card";

    img = document.createElement("img");
    img.src = `../../assets/images/obra0${i}.png`;

    text = document.createElement("div");
    text.className = "card-text";
    text.innerText = texts[i-1];

    link = document.createElement("a");
    link.href = `../../obras/${i}`;
    link.className = "see-more mt-3"
    link.innerText = "Ver mais";

    new_card.appendChild(img);
    new_card.appendChild(text);
    new_card.appendChild(link);

    coisa.appendChild(new_card);
}