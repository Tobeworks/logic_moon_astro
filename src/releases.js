const releases = [
    {
        id: 1,
        cover: 'polygon.jpg',
        year: '2011',
        release_id: '',
        title: 'Polygon Garden'
    },
    {
        id: 2,
        cover: '2011.jpg',
        year: '2012',
        release_id: '',
        title: '2011'
    },
    {
        id: 3,
        cover: 'altrhein.jpg',
        year: '2013',
        release_id: '',
        title: 'Altrhein'
    },
    {
        id: 4,
        cover: 'quitecity.jpg',
        year: '2014',
        release_id: '',
        title: 'Quiet City'
    },
    {
        id: 5,
        cover: 'silentpath.jpg',
        year: '2015',
        release_id: '',
        title: 'Silent Path'
    },
    {
        id: 6,
        cover: 'debut.jpg',
        year: '2016',
        release_id: '',
        title: 'Logic Moon & Fiction Surprise - Debut'
    },
    {
        id: 7,
        cover: 'oblivion.jpg',
        year: '2016',
        release_id: '',
        title: 'Logic Moon & Fiction Surprise - Oblivion'
    },
    {
        id: 8,
        cover: 'groundzero.jpg',
        year: '2016',
        release_id: '',
        title: 'Logic Moon - Ground Zero'
    },
    {
        id: 9,
        cover: 'cascadian.jpg',
        year: '2017',
        release_id: '',
        title: 'Logic Moon - Cascadian Mind'
    },
    {
        id: 10,
        cover: 'pheni1.jpg',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 01'
    },
    {
        id: 11,
        cover: 'pheni2.jpg',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 02'
    },
    {
        id: 12,
        cover: 'pheni3.jpg',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 03'
    },
    {
        id: 14,
        cover: 'iseeplanets.jpg',
        year: '2019',
        release_id: '',
        title: 'Logic Moon - I See Planets'
    },
    {
        id: 13,
        cover: 'phoenix.jpg',
        year: '2019',
        release_id: '507144744',
        title: 'Logic Moon - I See Planets'
    },
    {
        id: 15,
        cover: 'tales.jpg',
        year: '2019',
        release_id: '1154938275',
        title: 'Logic Moon - Tales'
    },
    {
        id: 16,
        cover: '2017.jpg',
        year: '2020',
        release_id: '1133451006',
        title: 'Logic Moon - 2017'
    },
    {
        id: 17,
        cover: 'coherence.jpg',
        year: '2020',
        release_id: '1851075121',
        title: 'Logic Moon - Coherence'
    },
    {
        id: 18,
        cover: 'starmapping.jpg',
        year: '2021',
        release_id: '1634816459',
        title: 'Logic Moon - Starmapping'
    },
    {
        id: 19,
        cover: 'fading_cover_500.jpg',
        year: '2021',
        release_id: '4142953595',
        title: 'Logic Moon & Atmøsphäre - Fading'
    },
    {
        id: 20,
        cover: 'Aeterna_Cover01_efx_500.jpg',
        year: '2021',
        release_id: '144584733',
        title: 'Logic Moon - Aeterna'
    },
    {
        id: 21,
        cover: 'death.jpg',
        year: '2022',
        release_id: '2589416976',
        title: 'Sven Laux & Logic Moon- The Unavoidable Death of Loneliness'
    },
    {
        id: 22,
        cover: 'Terrforming_cover_400.jpg',
        year: '2022',
        release_id: '2179910319',
        title: 'Logic Moon & Atmøsphäre - Terraforming'
    },
    {
        id: 23,
        cover: 'golden_dawn.jpg',
        year: '2022',
        release_id: '3725758464',
        title: 'Logic Moon - The Golden Dawn'
    },
    {
        id: 24,
        cover: 'inseln.jpg',
        year: '2022',
        release_id: '443653520',
        title: 'Logic Moon & Henrik Meierkord - Inseln'
    },
    {
        id: 25,
        cover: 'lumen.webp',
        year: '2023',
        release_id: '3004939609',
        title: 'Logic Moon - Lumen'
    },
    {
        id: 26,
        cover: 'moonscars.webp',
        year: '2023',
        release_id: '3818893430',
        title: 'Logic Moon & Scarless Arms - Moon Scars'
    },
    {
        id: 27,
        cover: 'sun.webp',
        year: '2023',
        release_id: '2159767475',
        title: 'Logic Moon - Sun'
    } ,
    {
        id: 28,
        cover: 'ikarus.jpg',
        year: '2023',
        release_id: '1087783645',
        title: 'Logic Moon - Ikrarus'
    },
    {
        id: 29,
        cover: 'moonchild.jpg',
        year: '2023',
        release_id: '3179587971',
        title: 'Logic Moon - Moonchild'
    },
    {
        id: 30,
        cover: 'tqc.jpg',
        year: '2023',
        release_id: '468805382',
        title: ' Sven Laux & Logic Moon - The Quiet Companion'
    },
    {
        id: 31,
        cover: 'lux.jpg',
        year: '2023',
        release_id: '2740630108',
        title: ' Logic Moon - Lux'
    },
    {
        id: 32,
        cover: 'ewiger_wald.jpg',
        year: '2024',
        release_id: '3324823902',
        title: 'Logic Moon & Henrik Meierkord - Ewiger Wald',
        bandcamp:'https://dronarivm.bandcamp.com/album/ewiger-wald'
    },

    {
        id: 34,
        cover: 'ewiger_wald2.jpg',
        year: '2024',
        release_id: '1881628841',
        title: 'Logic Moon & Henrik Meierkord - Ewiger Wald Addendum',
        text: 'We are excited to present "Ewiger Wald Addendum," a continuation of our journey with the mini-album "Ewiger Wald," released in January on Dronarivm.This new release, a collaboration between Logic Moon, and the Swedish cellist and composer Henrik Meierkord, explores modern neoclassical ambient music through three distinct versions of the track "Bosch." In "Ewiger Wald Addendum," we blend Henrik`s emotive cello playing with Logic Moon`s signature drones and synths, inviting you into a deeper exploration of our sonic landscape. This release expands our artistic expression and further connects us with our listeners.',
        bandcamp:'https://logicmoon.bandcamp.com/album/logic-moon-henrik-meierkord-ewiger-wald-addendum'
    }, {
        id: 35,
        cover: 'floating_garden.jpg',
        year: '2024',
        release_id: '1648869892',
        title: 'Logic Moon - The Floating Garden',
        text: 'In "The Floating Garden," I`ve ventured into a realm where generative synths and the spirit of ambient music converge to create a magical, calming oasis.This single is a reflection of my journey, infused with a tiny touch of neoclassical elegance amidst the vast expanse of classic ambient landscapes.I aimed to cultivate an environment that invites listeners to float away into a serene, ethereal garden of their own making.I hope it brings you the same solace and wonder it brought me during its creation.',
        bandcamp:'https://logicmoon.bandcamp.com/album/the-floating-garden'
    },
    {
        id: 36,
        cover: 'last_days.jpg',
        year: '2024',
        release_id: '856601488',
        title: 'Logic Moon - Last Days',
        text: '"Last Days" is my latest EP, moving away from classic drone ambient and closer to neoclassical and melancholic soundscapes. It creates a cinematic journey, showcasing my ability to blend ambient and neoclassical elements into an immersive and emotionally resonant movie score experience.',
        bandcamp:'https://logicmoon.bandcamp.com/album/last-days',
        spotify: 'https://open.spotify.com/intl-de/album/7HNZpT01rztep9iULy0C2o?si=1aDxLnnzRXanpcIPNaPRCw',
    },
    {
        id: 37,
        cover: 'lifelines.jpg',
        year: '2024',
        release_id: '1549285738',
        title: 'Logic Moon - Lifelines',
        text: 'In "Lifelines," I explore the warmth of analog sound through minimal, ambient compositions. I have crafted each track to glow with a gentle radiance, embracing the subtle textures of tape and the flow of modern Drone and Ambient music.This EP is my journey into soothing soundscapes, where each piece pulses with a soft, comforting energy.I hope you enjoy this sonic experience.',
        bandcamp: 'https://logicmoon.bandcamp.com/album/lifelines',
        spotify: 'https://open.spotify.com/intl-de/album/61wpnTaWdMGISScA2Spzdq?si=8io0IGYjStS-LF97Uemhfw',
        amazon: 'https://music.amazon.de/albums/B0DHW3479P?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_nh88DnaBgziJmy192pMh5qWoO',
        apple: 'https://music.apple.com/de/album/lifelines-ep/1770292736'
    },
    {
        id: 38,
        cover: 'tothesea.jpg',
        year: '2024',
        release_id: '1600080049',
        title: 'Logic Moon - To The Sea',
        text: 'To The Sea',
        bandcamp: 'https://logicmoon.bandcamp.com/album/to-the-sea'
    },
    {
        id: 39,
        cover: 'this_is_not_the_end.jpg',
        year: '2024',
        release_id: '1198976225',
        title: 'Logic Moon - This Is Not The End',
        text: 'This Is Not The End is a ballad of hope.',
        bandcamp:'https://logicmoon.bandcamp.com/album/this-is-not-the-end'
    },
    {
        id: 40,
        cover: 'music for film.jpg',
        year: '2024',
        release_id: '2996898458',
        title: 'Logic Moon - Music For Film Vol.1',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/music-for-film-vol-1'
    },
    {
        id: 41,
        cover: 'glow.webp',
        year: '2025',
        release_id: '3316897320',
        title: 'Logic Moon - GLOW',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/glow'
    },
    {
        id: 42,
        cover: 'atlas.webp',
        year: '2025',
        release_id: '638784917',
        title: 'Logic Moon - Atlas',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/atlas'
    },
    {
        id: 43,
        cover: 'metamorphosis_cover.webp',
        year: '2025',
        release_id: '3345105927',
        title: 'Logic Moon - Metamorphosis',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/metamorphosis'
    },
    {
        id: 44,
        cover: 'memories of tomorow_sm.jpg',
        year: '2025',
        release_id: '3392045544',
        title: 'Logic Moon - Memories Of Tomorrow',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/memories-of-tomorrow'
    },

];
export default releases;