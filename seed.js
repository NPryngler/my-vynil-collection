// Require model file here
const { User, Album, UserAlbums } = require('./models')

// Create model instances here
const main = async () => {
  // const
  const album1 = await Album.create({
    title: "Little Girl Blue",
    artist: "Nina Simone",
    releaseYear: 1958,
    genre: "Soul-Jazz",
    coverPictureSrc: "nina-simone-little-girl-blue.jpg",
    rating: 5,
    description: `The first album by Nina Simone was recorded for the Bethlehem label in late 1957 and released in 1958. It contains the song "My Baby Just Cares For Me", which became a hit in the mid 80's generated by an animated music video heavily played on MTV. Nina Simone was paid a one-time $3,000 for the royalties for the recording. The album has been re-released by numerous labels with variations in title and design, some of which incorrectly imply a best of collection or a compilation.`
  });

  const album2 = await Album.create({
    title: "Ella Fitzgerald Sings The Cole Porter   Songbook",
    artist: "Ella Fitzgerald",
    releaseYear: 1956,
    genre: "Jazz, Stage & Screen",
    coverPictureSrc: "ella-fitzgerald-sings-cole-porter.jpg",
    rating: 4,
    description: "This is one of the best, musically, spiritually, most rewarding records money can buy. Everything is right, at the right time and in the right place."
  });

  const album3 = await Album.create({
    title: "Jazzin' With Armstrong",
    artist: "Louis Armstrong",
    releaseYear: 1953,
    genre: "Jazz",
    coverPictureSrc: "jazzin-with-armstrong.jpg",
    rating: 4,
    description: "One of Louis Armstrong's best album. A must-have!"
  });

  const album4 = await Album.create({
    title: "Unforgettable",
    artist: "Nat King Cole",
    releaseYear: 1952,
    genre: "Jazz",
    coverPictureSrc: "unforgettable-nat-king-cole.jpg",
    rating: 4,
    description: `Emerging as a great pop vocal stylist in 1954, Nat King Cole enjoyed a string of hit singles and albums thereon, but Unforgettable is perhaps the singer at his early peak. With romance as the watchword, Cole slides through some of his most familiar ballads, include the title selection, "Portrait of Jennie," "Mona Lisa," and "I Love You(For Sentimental Reasons)." There are quite a few lesser known, but attractive songs, plus a small handful of standards ("What'll I Do?" is a keeper) that round out this interesting collection. The very artistic, near surreal three-dimensional white, charcoal black, and royal blue-hued front cover may be the best part of this reissue, as it reflects a time period defined by its simplicity and yet its increasingly technological, superimposed modernity. -Michael G. Nastos (All Music Guide).`
  });

  const album5 = await Album.create({
    title: "At The Blue Note",
    artist: "Sarah Vaughan",
    releaseYear: 1956,
    genre: "Jazz",
    coverPictureSrc: "blue-note-sarah-vaughan.jpg",
    rating: 5,
    description: "One of the most respected of all jazz singers, known among her close-knit circle of musician friends as 'Sassy' and among her worldwide fan base as 'The Divine One'."
  });

  const album6 = await Album.create({
    title: "Like A Prayer",
    artist: "Madonna",
    releaseYear: 1989,
    genre: "Electronic",
    coverPictureSrc: "like-a-prayer.jpg",
    rating: 5,
    description: `Like a Prayer is the fourth studio album by American recording artist Madonna, released on March 21, 1989 by Sire Records. Madonna worked with Stephen Bray, Patrick Leonard, and Prince on the album while co-writing and co-producing all the songs. Her most introspective release at the time, Like a Prayer has been described as a confessional record. Madonna described the album as a collection of songs "about my mother, my father, and bonds with my family." The album was dedicated to Madonna's mother, who died when she was young.`
  });

  const album7 = await Album.create({
    title: "A Night At The Opera",
    artist: "Queen",
    releaseYear: 1975,
    genre: "Rock",
    coverPictureSrc: "queen.jpg",
    rating: 5,
    description: `This grouping gathers together all versions of the "A Night At The Opera" album, originally released in 1975 on vinyl and tape, as well as subsequent repressings and bootleg versions.`
  });

  const album8 = await Album.create({
    title: "The Freewheelin Bob Dylan",
    artist: "Bob Dylan",
    releaseYear: 1975,
    genre: "Folk",
    coverPictureSrc: "bob-dylan.jpg",
    rating: 5,
    description: `The Freewheelin' Bob Dylan is the second studio album by American singer-songwriter Bob Dylan, released on May 27, 1963 by Columbia Records. Whereas his self-titled debut album Bob Dylan had contained only two original songs, Freewheelin' represented the beginning of Dylan's writing contemporary words to traditional melodies. Eleven of the thirteen songs on the album are Dylan's original compositions. The album opens with "Blowin' in the Wind", which became an anthem of the 1960s, and an international hit for folk trio Peter, Paul & Mary soon after the release of Freewheelin'. The album featured several other songs which came to be regarded as among Dylan's best compositions and classics of the 1960s folk scene: "Girl from the North Country", "Masters of War", "A Hard Rain's a-Gonna Fall" and "Don't Think Twice, It's All Right".`
  });

  const album9 = await Album.create({
    title: `I Got Dem Ol' Kozmic Blues Again Mama!`,
    artist: "Janis Joplin",
    releaseYear: 1969,
    genre: "Rock",
    coverPictureSrc: "janis-joplin.jpg",
    rating: 5,
    description: "Got Dem Ol' Kozmic Blues Again Mama! is a 1969 studio album by American singer-songwriter Janis Joplin. It was the first solo studio album Joplin recorded after leaving her former band, Big Brother and the Holding Company,[2] and the only one released in her lifetime (Pearl was released three months after Joplin's death)."
  });

  const album10 = await Album.create({
    title: "Sketches of Spain",
    artist: "Miles Davis",
    releaseYear: 1960,
    genre: "Jazz",
    coverPictureSrc: "miles-davis.jpg",
    rating: 5,
    description: `Sketches of Spain is an album by Miles Davis, recorded between November 1959 and March 1960 at the Columbia 30th Street Studio in New York City. An extended version of the second movement of Joaquín Rodrigo's Concierto de Aranjuez (1939) is included, as well as a piece called "Will o' the Wisp", from Manuel de Falla's ballet El amor brujo (1914–1915). Sketches of Spain is regarded as an exemplary recording of Third Stream, a musical fusion of jazz, European classical, and styles from world music".`
  });

  const album11 = await Album.create({
    title: "Redemption Song",
    artist: "Bob Marley",
    releaseYear: 1980,
    genre: "Reggae",
    coverPictureSrc: "bob-marley.jpg",
    rating: 5,
    description: `Redemption Song was released as a single in the UK and France in October 1980, and included a full band rendering of the song. This version has since been included as a bonus track on the 2001 reissue of Uprising, as well as on the 2001 compilation One Love: The Very Best of Bob Marley & The Wailers. Although in live performances the full band was used for the song the solo recorded performance remains the take most familiar to listeners. In 2004, Rolling Stone placed the song at #66 among “The 500 Greatest Songs of All Time”. In 2010, the New Statesman listed it as one of the Top 20 Political Songs".`
  });

  const album12 = await Album.create({
    title: "All Blues",
    artist: "Miles Davis",
    releaseYear: 1959,
    genre: "Jazz",
    coverPictureSrc: "miles-davis-kind-of-blue.jpg",
    rating: 5,
    description: `All Blues is a jazz composition by Miles Davis first appearing on the influential 1959 album Kind of Blue. It is a twelve-bar-blues in 6
  8; the chord sequence is that of a basic blues and made up entirely of seventh chords, with a ♭VI in the turnaround instead of just the usual V chord. In the song's original key of G this chord is an E♭7. "All Blues" is a modal blues in G.`
  });

  const album13 = await Album.create({
    title: "Purple Haze",
    artist: "Jimi Hendrix",
    releaseYear: 1970,
    genre: "Classic Rock",
    coverPictureSrc: "jimi-hendrix.jpg",
    rating: 4,
    description: "Purple Haze is a song written by Jimi Hendrix and released as the second record single by the Jimi Hendrix Experience on March 17, 1967. As a record chart hit in several countries and the opening number on the Experience's debut American album, it was many people's first exposure to Hendrix's psychedelic rock sound. The song features his inventive guitar playing, which uses the signature Hendrix chord and a mix of blues and Eastern modalities, shaped by novel sound processing techniques. Because of ambiguities in the lyrics, listeners often interpret the song as referring to a psychedelic experience, although Hendrix described it as a love song."
  });

  const album14 = await Album.create({
    title: "Jumbie",
    artist: "Machel Montano",
    releaseYear: 2007,
    genre: "Soca",
    coverPictureSrc: "machel-montano.jpg",
    rating: 4,
    description: `Book of Angels is an album released by popular Soca artist Machel Montano from Trinidad and Tobago in 2007. The album marked Machel Montano's 25th year in the Music industry and was his first album under a Machel Montano HD re-branding. The album was launched at Trinidad's Club Zen on 27 February 2007 and reportedly sold out within days of its release.[3] The album was relaunched in New York City on 25 March 2007 for the North American market. The song Jumbie on the album won Trinidad's 2007 Road March Competition for Trinidad and Tobago Carnival.`
  });

  const album15 = await Album.create({
    title: "Super Fly",
    artist: "Curtis Mayfield",
    releaseYear: 1972,
    genre: "Funk / Soul",
    coverPictureSrc: "curtis-mayfield.jpg",
    rating: 4,
    description: "Super Fly is the third studio album by American soul musician Curtis Mayfield, released in July 1972 on Curtom Records. It was released as the soundtrack for the Blaxploitation film of the same name. Widely considered a classic of 1970s soul and funk music, Super Fly was a nearly immediate hit. Its sales were bolstered by two million-selling singles, Freddie's Dead (#2 R&B, #4 Pop) and the title track (#5 R&B, #8 Pop). Super Fly is one of the few soundtracks to out-gross the film it accompanied."
  });

  const album16 = await Album.create({
    title: "The Waterfall",
    artist: "My Morning Jacket",
    releaseYear: 2015,
    genre: "Indie Rock",
    coverPictureSrc: "morning-jacket.jpg",
    rating: 5,
    description: `The Waterfall is the seventh studio album by American rock band My Morning Jacket. Produced by Tucker Martine and group frontman Jim James, the album was released on May 4, 2015 by ATO Records and Capitol Records. My Morning Jacket rose to prominence in the 2000s with a string of acclaimed albums and praised live performances. Its sixth album, Circuital (2011), was equally well received. The band toured in support of it for two years before taking a break. They regrouped in late 2013 to begin work on The Waterfall, a process which took eighteen months.`
  });

  const album17 = await Album.create({
    title: "Caracal",
    artist: "Disclosure",
    releaseYear: 2015,
    genre: "Electronic",
    coverPictureSrc: "disclosure.jpg",
    rating: 2,
    description: `Caracal is the second studio album by English electronic music duo Disclosure. It was released on 25 September 2015 by PMR Records and Island Records. Five official singles have been released from the album: "Holding On", "Omen", "Jaded", "Magnets" and "Nocturnal", with three promotional singles also being released: "Bang That", "Willing and Able" and "Hourglass".`
  });

  const album18 = await Album.create({
    title: "Unbreakable Smile",
    artist: "Tori Kelly",
    releaseYear: 2015,
    genre: "Pop Rock",
    coverPictureSrc: "tori-kelly.jpg",
    rating: 4,
    description: `Unbreakable Smile is the debut studio album by American singer Tori Kelly. It was released on June 23, 2015, through Capitol Records and Schoolboy Records. The album was executive produced by Max Martin. The album received generally positive reviews from critics.`
  });

  const album19 = await Album.create({
    title: "My Everything",
    artist: "Ariana Grande",
    releaseYear: 2015,
    genre: "Electronic",
    coverPictureSrc: "ariana.jpg",
    rating: 5,
    description: `My Everything is the second studio album by American singer and actress Ariana Grande, released on August 25, 2014 by Republic Records. Grande wanted My Everything to sound as "an evolution" from her debut album, Yours Truly (2013); it explores more mature themes and genres. In the album's production, Ariana worked with a host of producers – including Max Martin, Shellback, Benny Blanco, Ryan Tedder, Darkchild, Ilya Salmanzadeh, Zedd, and David Guetta. Upon its release, the album debuted atop the Billboard 200, selling 169,000 copies in its first week. It debuted at number one in Australia and Canada as well, and peaked in the top ten of twenty countries worldwide. As of April 2018, the album has sold 735,000 copies in the United States.`
  });

  const album20 = await Album.create({

    title: "1989",
    artist: "Taylor Swift",
    releaseYear: 2014,
    genre: "Electronic",
    coverPictureSrc: "taylor-swift.jpg",
    rating: 5,
    description: `1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014 through Big Machine Records. Swift began composing the album following the release of her previous studio effort, Red (2012). Over the course of the two-year songwriting period, she collaborated with producers Max Martin and Shellback—Martin served as the album's executive producer alongside Swift. The album's title was named after the singer's birth year and its music was inspired by the pop music of the 1980s.`
  });

  const fred = await User.create({
    name: "Fred Astair",
    username: "fred",
    passwordDigest: "$2a$12$OL80z0Mhp4ZzTVjKSVzUGu4nlXWksp07fxwApYQX5ASaL0dPjhT/O",
    pictureSrc: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/fred-flintstone-the-man-called-flintstone-24.3.jpg",
    email:"fred@gmail.com",
    city: "New York"
  });

  await fred.addAlbum(album1);
  await fred.addAlbum(album20);
  
  process.exit();
}

main();