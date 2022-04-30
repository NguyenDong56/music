const homeListPopular = $('.js-popular-artists .grid__row')
const homeList = $('.js-music-trending .grid__row')
const cdThumb = $('.cd__thumb-link')
const nameSong = $('.cd__info-name-song')
const nameSinger = $('.cd__info-name-singer')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const nextBtn = $('.btn-next')
const repeatBtn = $('.btn-repeat')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const progressSong = $('.progress-song')
const progressVolume = $('.progress-volume')

const app=  {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    song: [
        {
            nameSong: 'Anh ơi ở lại',
            singer: 'Chi Pu',
            imageSong: './assets/img/anh_oi_o_lai.jpg',
            imageUser: './assets/img/chipu.jpg',
            music: './assets/music/anh_oi_o_lai.mp3',
            fields: 'Artits',
            viewer: '2000000',
        },
        {
            nameSong: 'Cuộc sống em ổn không',
            singer: 'Anh Tú ( the voice )',
            imageSong: './assets/img/cuoc_song_em_on_khong.jpg',
            imageUser: './assets/img/anh_tu.jpg',
            music: './assets/music/cuoc_song_em_on_khong.mp3',
            fields: 'Artits',
            viewer: '2600000',
        },
        {
            nameSong: 'Ddu du ddu du',
            singer: 'Blackpink',
            imageSong: './assets/img/ddu_du_ddu_du.jpg',
            imageUser: './assets/img/blackpink1.jpg',
            music: './assets/music/ddu_du_ddu_du.mp3',
            fields: 'Artits',
            viewer: '180000',
        },
        {
            nameSong: 'How you like that',
            singer: 'Blackpink',
            imageSong: './assets/img/how_you_like_that.jpg',
            imageUser: './assets/img/blackpink1.jpg',
            music: './assets/music/how_you_like_that.mp3',
            fields: 'Artits',
            viewer: '2000000',
        },
        {
            nameSong: 'Khác biệt to lớn',
            singer: 'Trịnh Thăng Bình - Liz Kim Cương',
            imageSong: './assets/img/khac_biet_to_lon.jpg',
            imageUser: './assets/img/trinh_thang_binh.jpg',
            music: './assets/music/khac_biet_to_lon.mp3',
            fields: 'Artits',
            viewer: '4000000',
        },
        {
            nameSong: 'Đôi mi em đang u sầu',
            singer: 'Đông Nhi',
            imageSong: './assets/img/doi_mi_em_dang_u_sau.jpg',
            imageUser: './assets/img/dong_nhi.jpg',
            music: './assets/music/doi_mi_em_dang_u_sau.mp3',
            fields: 'Artits',
            viewer: '5000000',
        },
        {
            nameSong: 'Kill this love',
            singer: 'Blackpink',
            imageSong: './assets/img/kikk_this_love.jpg',
            imageUser: './assets/img/blackpink1.jpg',
            music: './assets/music/kill_this_love.mp3',
            fields: 'Artits',
            viewer: '150000',
        },
        {
            nameSong: 'Lalisa',
            singer: 'Lisa',
            imageSong: './assets/img/lalisa.png',
            imageUser: './assets/img/lalisa.jpg',
            music: './assets/music/lalisa.mp3',
            fields: 'Artits',
            viewer: '2000000',
        },
        {
            nameSong: 'On the ground',
            singer: 'Rosé',
            imageSong: './assets/img/on_the_ground.jpg',
            imageUser: './assets/img/rosé.png',
            music: './assets/music/on_the_ground.mp3',
            fields: 'Artits',
            viewer: '2000000',
        },
        {
            nameSong: 'Playing with fire',
            singer: 'Blackpink',
            imageSong: './assets/img/playing_with_fire.jpg',
            imageUser: './assets/img/blackpink1.jpg',
            music: './assets/music/playing_with_fire.mp3',
            fields: 'Artits',
            viewer: '200000',
        },
        {
            nameSong: 'Solo',
            singer: 'Jennie',
            imageSong: './assets/img/solo.jpg',
            imageUser: './asstes/img/jennie.png',
            music: './assets/music/solo.mp3',
            fields: 'Artits',
            viewer: '1000000',
        },
    ],

    renderTrending: function() {
        const html = this.song.map((song, index) => {
            if(song.viewer >= 2000000) {
                return `
                    <div class="grid__column-2-4">
                        <a class="home-list-item" href="#" data-index="${index}">
                            <div class="home-list-item__img">
                                <img src="${song.imageSong}" alt="#" class="home-list-item__img-link">
                            </div>
                            <h4 class="home-list-item__song">${song.nameSong}</h4>
                            <span class="home-list-item__singer">${song.singer}</span>
                            <div class="home-list-item-play">
                                <ion-icon name="play" class="home-list-item-play-icon"></ion-icon>
                            </div>
                        </a>
                    </div>
                `
            }
        })
        homeList.innerHTML = html.join('')
    },

    renderPopular: function() {
        const html = this.song.map((song, index) => {
            if(song.viewer >= 1500000) {
                return `
                <div class="grid__column-2-4">
                    <a class="home-list-item" href="#" data-index="${index}">
                        <div class="home-list-item__img home-list-item__popular">
                            <img src="${song.imageUser}" alt="#" class="home-list-item__img-link">
                        </div>
                        <h4 class="home-list-item__singer-name">${song.singer}</h4>
                        <span class="home-lít-item__category">${song.fields}</span>
                        <div class="home-list-item-play">
                            <ion-icon name="play" class="home-list-item-play-icon"></ion-icon>
                        </div>
                    </a>
                </div>
                `
            }
        })
        homeListPopular.innerHTML = html.join('')
    },

    handleEvent: function() {
        const _this = this
        //xử lý click play 
        playBtn.addEventListener('click', () => {
            if(_this.isPlaying) {
                audio.pause()
            }
            else {
                audio.play()
            }
        })

        //khi baihát đc play 
        audio.onplay = () => {
            _this.isPlaying = true
            player.classList.add('playing')
        }

        //khi bài hát đc pause
        audio.onpause = () => {
            _this.isPlaying = false
            player.classList.remove('playing')
        }

        audio.addEventListener('timeupdate', (event) => {
            const currentTime = event.target.currentTime
            const durationTime = event.target.duration
            let songDurationTime = $('.cd__duration-time')
            let songChangeTime = $('.cd__change-time')

            audio.addEventListener('loadeddata', () => {
                let audioDuration = audio.duration
                let totalMinutes = Math.floor(audioDuration / 60)
                let totalSeconds = Math.floor(audioDuration % 60)
                if(totalSeconds < 10) {
                    totalSeconds = `0${totalSeconds}`
                }

                songDurationTime.textContent = `${totalMinutes}:${totalSeconds}`
            });
            let currentMinutes = Math.floor(currentTime / 60)
            let currentSeconds = Math.floor(currentTime % 60)
            if(currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`
            }
            songChangeTime.innerText = `${currentMinutes}:${currentSeconds}`
            
        })

        //xử lý tiến độ bài hát
        audio.ontimeupdate = () => {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progressSong.value = progressPercent
            }
        }

        // xử lý khi tua
        progressSong.oninput = () => {
            const seekTime = audio.duration / 100 * progressSong.value
            audio.currentTime = seekTime
        }

        nextBtn.addEventListener('click', () => {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong();
            }
            audio.play()
        })

        prevBtn.addEventListener('click', () => {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong();
            }
            audio.play()
        })

        randomBtn.addEventListener('click', () => {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        })

        repeatBtn.addEventListener('click', () => {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        })

        //xử lý khi bài hét onend
        audio.onended = () => {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        homeList.addEventListener('click', (e) => {
            const songItem = e.target.closest('.home-list-item')
            if(songItem) {
                _this.currentIndex = songItem.dataset.index
                _this.loadCurrentSong()
                audio.play()
            }
        })

        homeListPopular.addEventListener('click', (e) => {
            const songItem = e.target.closest('.home-list-item')
            if(songItem) {
                _this.currentIndex = songItem.dataset.index
                _this.loadCurrentSong()
                audio.play()
            } 
        })
        

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.song[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function()  {
        cdThumb.style.backgroundImage = `url('${this.currentSong.imageSong}')`
        nameSong.textContent = this.currentSong.nameSong
        nameSinger.textContent = this.currentSong.singer
        audio.src = this.currentSong.music
        
    },

    
    formatTimer: function(num) {
        const minutes = Math.floor(num / 60)
        const seconds = Math.floor(num - minutes * 60)
        return `${minutes}:${seconds}`
    },

    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.song.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.song.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.song.length)
        } while( newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    

    start: function() {
        this.renderTrending();
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvent();
        this.renderPopular();
    }
}

app.start()


