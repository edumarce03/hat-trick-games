export interface Player {
  name: string;
  teams: string[];
  photo: string;
  slug: string;
}

export interface Team {
  name: string;
  logo: string;
  slug: string;
}

export const COLUMN_TEAMS: Team[] = [
  {
    name: 'Real Madrid',
    logo: 'assets/images/teams/real-madrid.png',
    slug: 'real-madrid',
  },
  {
    name: 'Barcelona',
    logo: 'assets/images/teams/barcelona.png',
    slug: 'barcelona',
  },
  {
    name: 'Manchester City',
    logo: 'assets/images/teams/manchester-city.png',
    slug: 'manchester-city',
  },
];

export const ROW_TEAMS: Team[] = [
  {
    name: 'Arsenal',
    logo: 'assets/images/teams/arsenal.png',
    slug: 'arsenal',
  },
  { name: 'PSG', logo: 'assets/images/teams/psg.png', slug: 'psg' },
  {
    name: 'Bayern Munich',
    logo: 'assets/images/teams/bayern-munich.png',
    slug: 'bayern-munich',
  },
];

export const PLAYERS: Player[] = [
  {
    name: 'Mesut Özil',
    teams: ['Real Madrid', 'Arsenal'],
    photo: 'assets/images/players/ozil.png',
    slug: 'ozil',
  },
  {
    name: 'Thierry Henry',
    teams: ['Barcelona', 'Arsenal'],
    photo: 'assets/images/players/henry.png',
    slug: 'henry',
  },
  {
    name: 'Cesc Fàbregas',
    teams: ['Barcelona', 'Arsenal'],
    photo: 'assets/images/players/fabregas.png',
    slug: 'fabregas',
  },
  {
    name: 'Samir Nasri',
    teams: ['Manchester City', 'Arsenal'],
    photo: 'assets/images/players/nasri.png',
    slug: 'nasri',
  },
  {
    name: 'Gael Clichy',
    teams: ['Manchester City', 'Arsenal'],
    photo: 'assets/images/players/clichy.png',
    slug: 'clichy',
  },
  {
    name: 'Neymar Jr',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/neymar.png',
    slug: 'neymar',
  },
  {
    name: 'Thiago Alcántara',
    teams: ['Barcelona', 'Bayern Munich'],
    photo: 'assets/images/players/thiago.png',
    slug: 'thiago',
  },
  {
    name: 'Leroy Sané',
    teams: ['Manchester City', 'Bayern Munich'],
    photo: 'assets/images/players/sane.png',
    slug: 'sane',
  },
  {
    name: 'Ángel Di María',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/di-maria.png',
    slug: 'di-maria',
  },
  {
    name: 'Toni Kroos',
    teams: ['Real Madrid', 'Bayern Munich'],
    photo: 'assets/images/players/kroos.png',
    slug: 'kroos',
  },
  {
    name: 'Gabriel Jesus',
    teams: ['Manchester City', 'Arsenal'],
    photo: 'assets/images/players/gabriel-jesus.png',
    slug: 'gabriel-jesus',
  },
  {
    name: 'Raheem Sterling',
    teams: ['Arsenal', 'Manchester City'],
    photo: 'assets/images/players/sterling.png',
    slug: 'sterling',
  },
  {
    name: 'Oleksandr Zinchenko',
    teams: ['Arsenal', 'Manchester City'],
    photo: 'assets/images/players/zinchenko.png',
    slug: 'zinchenko',
  },
  {
    name: 'Dani Ceballos',
    teams: ['Arsenal', 'Real Madrid'],
    photo: 'assets/images/players/ceballos.png',
    slug: 'ceballos',
  },
  {
    name: 'Martin Ødegaard',
    teams: ['Real Madrid', 'Arsenal'],
    photo: 'assets/images/players/odegaard.png',
    slug: 'odegaard',
  },
  {
    name: 'Pierre-Emerick Aubameyang',
    teams: ['Arsenal', 'Barcelona'],
    photo: 'assets/images/players/aubameyang.png',
    slug: 'aubameyang',
  },
  {
    name: 'Hector Bellerín',
    teams: ['Barcelona', 'Arsenal'],
    photo: 'assets/images/players/bellerin.png',
    slug: 'bellerin',
  },
  {
    name: 'Alexis Sánchez',
    teams: ['Barcelona', 'Arsenal'],
    photo: 'assets/images/players/sanchez.png',
    slug: 'sanchez',
  },
  {
    name: 'Sergio Ramos',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/sergio-ramos.png',
    slug: 'ramos',
  },
  {
    name: 'Alphonse Areola',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/areola.png',
    slug: 'areola',
  },
  {
    name: 'Keylor Navas',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/keylor-navas.png',
    slug: 'navas',
  },
  {
    name: 'Jesé Rodríguez',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/jese.png',
    slug: 'jese',
  },
  {
    name: 'Lass Diarra',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/lass-diarra.png',
    slug: 'diarra',
  },
  {
    name: 'Achraf Hakimi',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/hakimi.png',
    slug: 'hakimi',
  },
  {
    name: 'Ronaldinho Gaucho',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/ronaldinho-gaucho.png',
    slug: 'ronaldinho',
  },
  {
    name: 'Zlatan Ibrahimović',
    teams: ['PSG', 'Barcelona'],
    photo: 'assets/images/players/zlatan-ibrahimovic.png',
    slug: 'zlatan',
  },
  {
    name: 'Lucas Digne',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/lucas-digne.png',
    slug: 'digne',
  },
  {
    name: 'Dani Alves',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/dani-alves.png',
    slug: 'dani-alves',
  },
  {
    name: 'Lionel Messi',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/messi.png',
    slug: 'messi',
  },
  {
    name: 'Rafinha Alcántara',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/rafinha-alcantara.png',
    slug: 'rafinha',
  },
  {
    name: 'Ousmane Dembélé',
    teams: ['Barcelona', 'PSG'],
    photo: 'assets/images/players/dembele.png',
    slug: 'dembele',
  },
  {
    name: 'Kylian Mbappé',
    teams: ['PSG', 'Real Madrid'],
    photo: 'assets/images/players/mbappe.png',
    slug: 'mbappe',
  },
  {
    name: 'Alioune Touré',
    teams: ['PSG', 'Manchester City'],
    photo: 'assets/images/players/alioune-toure.png',
    slug: 'alioune-toure',
  },
  {
    name: 'Adrien Rabiot',
    teams: ['PSG', 'Manchester City'],
    photo: 'assets/images/players/adrien-rabiot.png',
    slug: 'adrien-rabiot',
  },
  {
    name: 'James Rodríguez',
    teams: ['Real Madrid', 'Bayern Munich'],
    photo: 'assets/images/players/james-rodriguez.png',
    slug: 'james-rodriguez',
  },
  {
    name: 'Arjen Robben',
    teams: ['Bayern Munich', 'Real Madrid'],
    photo: 'assets/images/players/arjen-robben.png',
    slug: 'arjen-robben',
  },
  {
    name: 'Xabi Alonso',
    teams: ['Bayern Munich', 'Real Madrid'],
    photo: 'assets/images/players/xabi-alonso.png',
    slug: 'xabi-alonso',
  },
  {
    name: 'Philippe Coutinho',
    teams: ['Barcelona', 'Bayern Munich'],
    photo: 'assets/images/players/coutinho.png',
    slug: 'coutinho',
  },
  {
    name: 'Marco Asensio',
    teams: ['Real Madrid', 'PSG'],
    photo: 'assets/images/players/marco-asensio.png',
    slug: 'marco-asensio',
  },
  {
    name: 'Arturo Vidal',
    teams: ['Barcelona', 'Bayern Munich'],
    photo: 'assets/images/players/arturo-vidal.png',
    slug: 'arturo-vidal',
  },
  {
    name: 'Robert Lewandowski',
    teams: ['Bayern Munich', 'Barcelona'],
    photo: 'assets/images/players/lewandowski.png',
    slug: 'lewandowski',
  },
  {
    name: 'Joao Cancelo',
    teams: ['Barcelona', 'Bayern Munich', 'Manchester City'],
    photo: 'assets/images/players/joao-cancelo.png',
    slug: 'joao-cancelo',
  },
];
