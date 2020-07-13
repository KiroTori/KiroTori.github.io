const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    fixed: true,
    audio: [
        {
            name: '殻ノ少女',
            artist: 'MANYO',
            url: 'https://o1.kkin.xyz/@download/140-5f0bc785c9af7-7056000-294-192-m4a-4716977/mp3/3hNovu3fh40/Disc%2B2%2B-%2B07%2BGirl%2Bof%2Bthe%2BShell.mp3',
            cover: 'http://p1.music.126.net/scAe3f-GkQvo2h91Gpb0Bg==/1729531800492601.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});