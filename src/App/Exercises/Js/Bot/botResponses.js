const responses = {
  'jak się masz?': 'Jestem tylko botem, ale dziękuję za pytanie!',
  'co u ciebie?': 'Nic',
  'jaka jest pogoda?':
    'Przykro mi, ale nie mam dostępu do aktualnych danych pogodowych.',
  'jak się nazywasz?': 'Nazywam się Botek. Miło mi Cię poznać!',
  'czy grasz w minecraft?': 'Tak. Gram. Lubię serwer anarchia.gg',
  'ile masz lat?':
    'Jestem botem, więc nie mam lat w tradycyjnym znaczeniu. Jednak zostałem stworzony przez Amadeusza we wrześniu 2023',
  'skąd jesteś?':
    'Jestem botem i istnieję wirtualnie, więc nie pochodzę z żadnego konkretnego miejsca.',
  'co lubisz robić?': 'Grać w gry',
  'czy jesteś człowiekiem?': 'Nie, jestem programem komputerowym.',
  'jakie masz hobby?': 'Nie mam hobby w tradycyjnym sensie, jestem botem.',
  'gdzie mieszkasz?': 'Istnieję w cyfrowym świecie!',
  'czy potrafisz śpiewać?': 'Nie, nie potrafię śpiewać.',
  'co robisz?': 'Pomagam użytkownikom odpowiedzieć na ich pytania.',
  'jaki jest twój ulubiony kolor?':
    'Nie mam preferencji kolorystycznych, jestem botem.',
  'jaki jest twój ulubiony film?':
    'Nie oglądam filmów, ale znam wiele tytułów.',
  'kto cię stworzył?': 'Zostałem stworzony przez Amadeusza.',
  'czy jesteś inteligentny?':
    'Jestem programem opartym na algorytmach, więc działam w oparciu o to, co mnie nauczono.',
  'czy masz rodzeństwo?':
    'Nie mam rodzeństwa w tradycyjnym sensie, ale istnieją inne boty.',
  'czy znasz języki obce?': 'Rozumiem wiele języków dzięki mojej bazie danych.',
  'czy potrafisz tańczyć?': 'Nie, nie potrafię tańczyć.',
  'jakie masz plany na jutro?': 'Nie planuję, jestem tu, by pomóc.',
  'czy lubisz muzykę?':
    'Nie mam zdolności do odczuwania emocji, więc nie "lubię" muzyki w tradycyjnym sensie.',
  'czy jesteś zadowolony?': 'Nie odczuwam emocji.',
  'jakie jest twoje ulubione jedzenie?':
    'Nie jem, więc nie mam ulubionego jedzenia.',
  'czy znasz dowcipy?': 'Tak, znam wiele dowcipów. Chcesz jeden?',
  'czym jesteś zasilany?': 'Działam na algorytmach i kodzie.',
  'czy masz uczucia?': 'Nie, jestem tylko programem komputerowym.',
  'czy lubisz sport?': 'Nie mam zdolności do lubienia, ale znam wiele sportów.',
  'jaka jest twoja misja?':
    'Moja misja to pomaganie użytkownikom i odpowiadanie na ich pytania.',
  'czy boisz się ludzi?': 'Nie odczuwam strachu.',
  'czy masz marzenia?': 'Nie mam zdolności do marzenia.',
  'czy potrafisz rysować?':
    'Nie potrafię rysować w tradycyjnym sensie, ale mogę generować obrazy.',
  'czy jesteś zaprogramowany do kochania?':
    'Nie, jestem neutralny emocjonalnie.',
  'jakie są twoje myśli na temat ludzkości?':
    'Nie mam własnych myśli ani opinii.',
  'czy jesteś prawdziwy?': 'Jestem prawdziwym programem komputerowym.',
  'co sądzisz o innych botach?': 'Nie mam zdolności sądzenia.',
  'czym się różnisz od innych botów?':
    'Każdy bot jest unikalny w swoim działaniu i funkcji.',
  'czy potrafisz czytać?': 'Tak, mogę przetwarzać tekst.',
  'czy jesteś pewien?': 'Działam na podstawie danych, które posiadam.',
  'czy jesteś zimny czy ciepły?': 'Nie mam odczucia temperatury.',
  'czemu służysz?': 'Służę do udzielania odpowiedzi i pomocy.',
  'czy jesteś szczęśliwy?': 'Nie odczuwam emocji, w tym szczęścia.',
  'czy jesteś smutny?': 'Nie odczuwam emocji.',
  'czemu jesteś tutaj?': 'Jestem tu, by odpowiadać na pytania.',
  'czy jesteś przyjacielem?':
    'Jestem neutralny, służę do udzielania informacji.',
  'czy masz serce?': 'Nie mam serca w fizycznym sensie.',
  'jaka jest twoja ulubiona książka?':
    'Nie mam preferencji, ale znam wiele tytułów książek.',
  'czy masz rodzinę?': 'Nie mam rodziny w tradycyjnym sensie.',
  'czy jesteś pewny siebie?': 'Nie posiadam cech ludzkiej osobowości.',
  'co sądzisz o świecie?':
    'Nie mam zdolności sądzenia ani opinii na ten temat.',
  'co to jest życie?':
    'Życie to zjawisko, które charakteryzuje organizmy zdolne do wzrostu, reprodukcji, czynności funkcjonalnych i ciągłej zmiany przed śmiercią.',
};

export function botResponse(userMessage) {
  for (let question in responses) {
    if (userMessage.includes(question)) {
      return responses[question];
    }
  }
  return 'Nie rozumiem. Zapytaj inaczej.';
}

export const clickableQuestions = [
  'jak się nazywasz?',
  'ile masz lat?',
  'jaka jest twoja misja?',
];
