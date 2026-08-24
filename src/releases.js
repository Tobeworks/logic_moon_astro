const releases = [
    {
        id: 1,
        cover: 'polygon.webp',
        year: '2011',
        release_id: '',
        title: 'Polygon Garden'
    },
    {
        id: 2,
        cover: '2011.webp',
        year: '2012',
        release_id: '',
        title: '2011'
    },
    {
        id: 3,
        cover: 'altrhein.webp',
        year: '2013',
        release_id: '',
        title: 'Altrhein'
    },
    {
        id: 4,
        cover: 'quitecity.webp',
        year: '2014',
        release_id: '',
        title: 'Quiet City'
    },
    {
        id: 5,
        cover: 'silentpath.webp',
        year: '2015',
        release_id: '',
        title: 'Silent Path'
    },
    {
        id: 6,
        cover: 'debut.webp',
        year: '2016',
        release_id: '',
        title: 'Logic Moon & Fiction Surprise - Debut'
    },
    {
        id: 7,
        cover: 'oblivion.webp',
        year: '2016',
        release_id: '',
        title: 'Logic Moon - Oblivion'
    },
    {
        id: 8,
        cover: 'groundzero.webp',
        year: '2016',
        release_id: '',
        title: 'Logic Moon - Ground Zero'
    },
    {
        id: 9,
        cover: 'cascadian.webp',
        year: '2017',
        release_id: '',
        title: 'Logic Moon - Cascadian Mind'
    },
    {
        id: 10,
        cover: 'pheni1.webp',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 01'
    },
    {
        id: 11,
        cover: 'pheni2.webp',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 02'
    },
    {
        id: 12,
        cover: 'pheni3.webp',
        year: '2018',
        release_id: '',
        title: 'Logic Moon - Phenibut 03'
    },
    {
        id: 14,
        cover: 'iseeplanets.webp',
        year: '2019',
        release_id: '',
        title: 'Logic Moon - I See Planets'
    },
    {
        id: 13,
        cover: 'phoenix.webp',
        year: '2019',
        release_id: '507144744',
        title: 'Logic Moon - I See Planets'
    },
    {
        id: 15,
        cover: 'tales.webp',
        year: '2019',
        release_id: '1154938275',
        title: 'Logic Moon - Tales'
    },
    {
        id: 16,
        cover: '2017.webp',
        year: '2020',
        release_id: '1133451006',
        title: 'Logic Moon - 2017'
    },
    {
        id: 17,
        cover: 'coherence.webp',
        year: '2020',
        release_id: '1851075121',
        title: 'Logic Moon - Coherence'
    },
    {
        id: 18,
        cover: 'starmapping.webp',
        year: '2021',
        release_id: '1634816459',
        title: 'Logic Moon - Starmapping'
    },
    {
        id: 19,
        cover: 'fading_cover_500.webp',
        year: '2021',
        release_id: '4142953595',
        title: 'Logic Moon & Atmøsphäre - Fading'
    },
    {
        id: 20,
        cover: 'Aeterna_Cover01_efx_500.webp',
        year: '2021',
        release_id: '144584733',
        title: 'Logic Moon - Aeterna'
    },
    {
        id: 21,
        cover: 'death.webp',
        year: '2022',
        release_id: '2589416976',
        title: 'Sven Laux & Logic Moon- The Unavoidable Death of Loneliness'
    },
    {
        id: 22,
        cover: 'Terrforming_cover_400.webp',
        year: '2022',
        release_id: '2179910319',
        title: 'Logic Moon & Atmøsphäre - Terraforming'
    },
    {
        id: 23,
        cover: 'golden_dawn.webp',
        year: '2022',
        release_id: '3725758464',
        title: 'Logic Moon - The Golden Dawn'
    },
    {
        id: 24,
        cover: 'inseln.webp',
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
        cover: 'ikarus.webp',
        year: '2023',
        release_id: '1087783645',
        title: 'Logic Moon - Ikrarus'
    },
    {
        id: 29,
        cover: 'moonchild.webp',
        year: '2023',
        release_id: '3179587971',
        title: 'Logic Moon - Moonchild'
    },
    {
        id: 30,
        cover: 'tqc.webp',
        year: '2023',
        release_id: '468805382',
        title: ' Sven Laux & Logic Moon - The Quiet Companion'
    },
    {
        id: 31,
        cover: 'lux.webp',
        year: '2023',
        release_id: '2740630108',
        title: ' Logic Moon - Lux'
    },
    {
        id: 32,
        cover: 'ewiger_wald.webp',
        year: '2024',
        release_id: '3324823902',
        title: 'Logic Moon & Henrik Meierkord - Ewiger Wald',
        bandcamp:'https://dronarivm.bandcamp.com/album/ewiger-wald',
        spotify: 'https://open.spotify.com/album/4XQiWKZsOYB8wpcdmGOJkE',
        apple: 'https://music.apple.com/us/album/ewiger-wald-ep/1722094880',
        amazon: 'https://music.amazon.com/albums/B0CQMGL82M',
        soundcloud: 'https://soundcloud.com/dronarivm/sets/logic-moon-henrik-meierkord-ewiger-wald',
        beatport: 'https://www.beatport.com/release/ewiger-wald/4382717'
    },

    {
        id: 34,
        cover: 'ewiger_wald2.webp',
        year: '2024',
        release_id: '1881628841',
        title: 'Logic Moon & Henrik Meierkord - Ewiger Wald Addendum',
        text: 'We are excited to present "Ewiger Wald Addendum," a continuation of our journey with the mini-album "Ewiger Wald," released in January on Dronarivm.This new release, a collaboration between Logic Moon, and the Swedish cellist and composer Henrik Meierkord, explores modern neoclassical ambient music through three distinct versions of the track "Bosch." In "Ewiger Wald Addendum," we blend Henrik`s emotive cello playing with Logic Moon`s signature drones and synths, inviting you into a deeper exploration of our sonic landscape. This release expands our artistic expression and further connects us with our listeners.',
        bandcamp:'https://logicmoon.bandcamp.com/album/logic-moon-henrik-meierkord-ewiger-wald-addendum',
        spotify: 'https://open.spotify.com/track/2irhDknl9JoOEmxyFV1HH5',
        apple: 'https://music.apple.com/us/album/ewiger-wald-addendum-single/1735488423',
        amazon: 'https://music.amazon.com/albums/B0CQMGL82M',
        soundcloud: 'https://soundcloud.com/dronarivm/sets/logic-moon-henrik-meierkord-ewiger-wald'
    }, {
        id: 35,
        cover: 'floating_garden.webp',
        year: '2024',
        release_id: '1648869892',
        title: 'Logic Moon - The Floating Garden',
        text: 'In "The Floating Garden," I`ve ventured into a realm where generative synths and the spirit of ambient music converge to create a magical, calming oasis.This single is a reflection of my journey, infused with a tiny touch of neoclassical elegance amidst the vast expanse of classic ambient landscapes.I aimed to cultivate an environment that invites listeners to float away into a serene, ethereal garden of their own making.I hope it brings you the same solace and wonder it brought me during its creation.',
        bandcamp:'https://logicmoon.bandcamp.com/album/the-floating-garden',
        spotify: 'https://open.spotify.com/album/1K8P4KKcJp5BU4m7aeoL6n',
        apple: 'https://music.apple.com/us/album/the-floating-garden-single/1739595443',
        amazon: 'https://music.amazon.com/albums/B0CZTY788P',
        soundcloud: 'https://soundcloud.com/logic-moon/sets/the-floating-garden'
    },
    {
        id: 36,
        cover: 'last_days.webp',
        year: '2024',
        release_id: '856601488',
        title: 'Logic Moon - Last Days',
        text: '"Last Days" is my latest EP, moving away from classic drone ambient and closer to neoclassical and melancholic soundscapes. It creates a cinematic journey, showcasing my ability to blend ambient and neoclassical elements into an immersive and emotionally resonant movie score experience.',
        bandcamp:'https://logicmoon.bandcamp.com/album/last-days',
        spotify: 'https://open.spotify.com/intl-de/album/7HNZpT01rztep9iULy0C2o?si=1aDxLnnzRXanpcIPNaPRCw',
        apple: 'https://music.apple.com/us/album/last-days-single/1764269263',
        amazon: 'https://music.amazon.com/albums/B0DDY32WH8',
        soundcloud: 'https://soundcloud.com/logic-moon/last-days'
    },
    {
        id: 37,
        cover: 'lifelines.webp',
        year: '2024',
        release_id: '1549285738',
        title: 'Logic Moon - Lifelines',
        text: 'In "Lifelines," I explore the warmth of analog sound through minimal, ambient compositions. I have crafted each track to glow with a gentle radiance, embracing the subtle textures of tape and the flow of modern Drone and Ambient music.This EP is my journey into soothing soundscapes, where each piece pulses with a soft, comforting energy.I hope you enjoy this sonic experience.',
        bandcamp: 'https://logicmoon.bandcamp.com/album/lifelines',
        spotify: 'https://open.spotify.com/intl-de/album/61wpnTaWdMGISScA2Spzdq?si=8io0IGYjStS-LF97Uemhfw',
        amazon: 'https://music.amazon.de/albums/B0DHW3479P?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_nh88DnaBgziJmy192pMh5qWoO',
        apple: 'https://music.apple.com/de/album/lifelines-ep/1770292736',
        soundcloud: 'https://soundcloud.com/logic-moon/sets/lifelines-1'
    },
    {
        id: 38,
        cover: 'tothesea.webp',
        year: '2024',
        release_id: '1600080049',
        title: 'Logic Moon - To The Sea',
        text: 'To The Sea',
        bandcamp: 'https://logicmoon.bandcamp.com/album/to-the-sea',
        spotify: 'https://open.spotify.com/album/5wC7wmsXc1eqz01N7ugWKb',
        apple: 'https://music.apple.com/us/album/to-the-sea-single/1772433085',
        amazon: 'https://music.amazon.com/albums/B0DJJWB7QN',
        soundcloud: 'https://soundcloud.com/logic-moon/to-the-sea'
    },
    {
        id: 39,
        cover: 'this_is_not_the_end.webp',
        year: '2024',
        release_id: '1198976225',
        title: 'Logic Moon - This Is Not The End',
        text: 'This Is Not The End is a ballad of hope.',
        bandcamp:'https://logicmoon.bandcamp.com/album/this-is-not-the-end',
        spotify: 'https://open.spotify.com/album/0RSpQHlBhDmkbNbp7JsBE2',
        apple: 'https://music.apple.com/us/album/this-is-not-the-end-single/1774357124',
        amazon: 'https://music.amazon.com/albums/B0DK3YVRLW',
        soundcloud: 'https://soundcloud.com/logic-moon/this-is-not-the-end'
    },
    {
        id: 40,
        cover: 'music for film.webp',
        year: '2024',
        release_id: '2996898458',
        title: 'Logic Moon - Music For Film Vol.1',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/music-for-film-vol-1',
        spotify: 'https://open.spotify.com/album/6NY5fLgoTaGBouYPXHnaTj',
        apple: 'https://music.apple.com/us/album/music-for-film-vol-1/1783088680',
        amazon: 'https://music.amazon.com/albums/B0DPHR2J3N',
        soundcloud: 'https://soundcloud.com/radiolamusicestudio/sets/music-for-film-vol-1-1',
        deezer: 'https://www.deezer.com/de/album/678796311'
    },
    {
        id: 41,
        cover: 'glow.webp',
        year: '2025',
        release_id: '3316897320',
        title: 'Logic Moon - GLOW',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/glow',
        spotify: 'https://open.spotify.com/album/2dvFnlcnC7yOJNeOEsvgV4',
        apple: 'https://music.apple.com/us/album/glow-ep/1803080150',
        amazon: 'https://music.amazon.com/albums/B0DZXSWLML',
        soundcloud: 'https://soundcloud.com/logic-moon/glow',
        deezer: 'https://www.deezer.com/de/album/724974921'
    },
    {
        id: 42,
        cover: 'atlas.webp',
        year: '2025',
        release_id: '638784917',
        title: 'Logic Moon - Atlas',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/atlas',
        spotify: 'https://open.spotify.com/album/4Vz7VMzLCYPmfg8v3gguav',
        apple: 'https://music.apple.com/us/album/atlas-single/1815128687',
        amazon: 'https://music.amazon.com/albums/B0F92QS7Z2',
        soundcloud: 'https://soundcloud.com/logic-moon/sets/atlas',
        deezer: 'https://www.deezer.com/de/album/758645881'
    },
    {
        id: 43,
        cover: 'metamorphosis_cover.webp',
        year: '2025',
        release_id: '3345105927',
        title: 'Logic Moon - Metamorphosis',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/metamorphosis',
        spotify: 'https://open.spotify.com/album/4ARC06MQafSSiejvfHPTJw',
        apple: 'https://music.apple.com/us/album/metamorphosis/1674233408',
        amazon: 'https://music.amazon.com/albums/B0FSSHYYQ1',
        soundcloud: 'https://soundcloud.com/logic-moon/metamorphosis-part-1'
    },
    {
        id: 44,
        cover: 'memories of tomorow_sm.webp',
        year: '2025',
        release_id: '3392045544',
        title: 'Logic Moon - Memories Of Tomorrow',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/memories-of-tomorrow',
        spotify: 'https://open.spotify.com/album/7JuDYWfUR7jB2FtvUj793U',
        apple: 'https://music.apple.com/us/album/memories-of-tomorrow-ep/1852307450',
        amazon: 'https://music.amazon.com/albums/B0G1VMD699',
        soundcloud: 'https://soundcloud.com/logic-moon/memories-of-tomorrow',
        deezer: 'https://www.deezer.com/de/album/854570502',
        beatport: 'https://www.beatport.com/release/memories-of-tomorrow/5101255'
    },
    {
        id: 45,
        cover: 'ashes_cover.webp',
        year: '2025',
        release_id: '2147690593',
        title: 'Logic Moon - Ashes',
        text: '',
        bandcamp: 'https://chitrarecords.bandcamp.com/album/ashes',
        spotify: 'https://open.spotify.com/album/3MFTBAAYAhRDtNt8peP2pL',
        apple: 'https://music.apple.com/us/album/ashes/1819781222',
        amazon: 'https://music.amazon.com/albums/B0FCNRZZ86',
        soundcloud: 'https://soundcloud.com/moonlogicband/ashes',
        deezer: 'https://www.deezer.com/de/album/773541451',
        beatport: 'https://www.beatport.com/release/ashes/5126020'
    },
    {
        id: 46,
        cover: 'Reminiscence_sm.webp',
        year: '2025',
        release_id: '2754878701',
        title: 'Logic Moon - Reminiscence',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/reminiscence',
        spotify: 'https://open.spotify.com/album/0w7U9kPwyVdJmZogOwakzy',
        apple: 'https://music.apple.com/us/album/reminiscence-single/6771725858',
        amazon: 'https://music.amazon.com/albums/B0H2J14PQG',
        soundcloud: 'https://soundcloud.com/logic-moon/sets/reminiscence'
    },
    {
        id: 47,
        cover: 'aethery_fields_debut.webp',
        year: '2025',
        release_id: '1921716763',
        title: 'Aethery Fields - Debut',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/-',
        spotify: 'https://open.spotify.com/album/0IiHrjhYraVi8i7LTVRrpA',
        apple: 'https://music.apple.com/us/album/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3-single/1841797203',
        amazon: 'https://music.amazon.com/albums/B0FSCSN95Z'
    },
    {
        id: 48,
        cover: 'cover_helheim_sm.webp',
        year: '2025',
        release_id: '2930370107',
        title: 'Logic Moon - Heim',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/heim',
        spotify: 'https://open.spotify.com/album/6v7jTE6nbqHTQ6Hte1UvkY',
        apple: 'https://music.apple.com/us/album/heim-single/1879494358',
        amazon: 'https://music.amazon.com/albums/B0GPR9BX7N',
        soundcloud: 'https://soundcloud.com/logic-moon/sets/heim'
    },
    {
        id: 49,
        cover: 'hello.webp',
        year: '2025',
        release_id: '2635118830',
        title: 'Aethery Fields - hello.',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/hello',
        spotify: 'https://open.spotify.com/album/6WtFQ5S4DW3gFrb1SUHgeZ',
        apple: 'https://music.apple.com/us/album/hello/1879244541',
        amazon: 'https://music.amazon.com/albums/B0GPNJMLJP'
    },
    {
        id: 50,
        cover: 'imncb.webp',
        year: '2026',
        release_id: '3902752845',
        title: 'Logic Moon - It May Never Coming Back',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/it-may-never-coming-back',
        soundcloud: 'https://soundcloud.com/logic-moon/imncb'
    },
    {
        id: 51,
        cover: 'clockworks.webp',
        year: '2026',
        release_id: '1624891467',
        title: 'Logic Moon - Clockworks',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/clockworks',
        soundcloud: 'https://soundcloud.com/logic-moon/clockwork'
    },
    {
        id: 52,
        cover: 'cover_logic_moon_stellar_refuge.webp',
        year: '2026',
        release_id: '1710582439',
        title: 'Logic Moon - Stellar Refuge',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/stellar-refuge',
        soundcloud: 'https://soundcloud.com/logic-moon/stellar-refuge'
    },
    {
        id: 53,
        cover: 'sublacuna.webp',
        year: '2026',
        release_id: '3710705581',
        title: 'Aethery Fields - Sub Lacuna',
        text: '',
        bandcamp: 'https://logicmoon.bandcamp.com/album/sub-lacuna',
        spotify: 'https://open.spotify.com/album/2bxN0dpZaHsUWobKqZy7Zk',
        apple: 'https://music.apple.com/us/album/sub-lacuna/6782685097',
        amazon: 'https://music.amazon.com/albums/B0H2Q78WZH'
    },
    {
        id: 54,
        cover: 'musica-universalis.jpg',
        year: '2026',
        release_id: '900360428',
        title: 'Logic Moon & Piscean Daydreams - Musica Universalis',
        text: 'A deep drone and space ambient collaboration with Piscean Daydreams, conceived as the soundtrack to an imagined science-fiction film in the vein of Blade Runner.',
        bandcamp: 'https://ambientcat.bandcamp.com/album/musica-universalis',
        spotify: 'https://open.spotify.com/album/5JPOd8qXf1Ld7pCqiXF0Xk',
        apple: 'https://music.apple.com/us/album/musica-universalis/6781320697',
        amazon: 'https://music.amazon.com/albums/B0H5RS6CSY',
        soundcloud: 'https://soundcloud.com/chitra-records/sets/logic-moon-piscean-daydreams-musica-universalis',
        beatport: 'https://www.beatport.com/release/musica-universalis/7087004'
    },
    {
        id: 55,
        cover: 'Logic Moon Diogene_miracles.jpg',
        year: '2026',
        release_id: '',
        title: 'Logic Moon & Diogene - Miracles',
        text: '',
        spotify: 'https://too.fm/2mozry1'
    },
    {
        id: 56,
        cover: 'cover_logic_moon_spelrum.jpg',
        year: '2026',
        release_id: '1889885305',
        title: 'Logic Moon & Henrik Meierkord - Spelrum',
        text: 'Two restrained, atmospheric tracks exploring the space between control and drift, with cello overtones bowing through the mix.',
        bandcamp: 'https://logicmoon.bandcamp.com/album/spelrum'
    },

];
export default releases;