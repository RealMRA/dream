import { Component, onMount } from 'solid-js'

import './style/customers.scss'

import AudioFile from 'static/audio/type.mp3'

export const Customers: Component = props => {
    let section: HTMLElement
    let htmlWord: HTMLElement

    let audio: HTMLAudioElement

    let wordCount = 0

    let lastScrollPosition = scrollY

    const words = ['نظرات مشتری هامون رو ببین!']

    let sentence = ''

    onMount(() => {
        audio = new Audio(AudioFile)

        section = document.querySelector<HTMLElement>('section.customers')
        htmlWord = document.querySelector<HTMLElement>('span#type-effect')

        let counter = 0

        document.onscroll = () => {
            let top = section.getBoundingClientRect().top - innerHeight + 100

            if (top <= 0) {
                let currentScrollPosition = scrollY

                if (currentScrollPosition > lastScrollPosition) {
                    counter += 0.2

                    if (wordCount <= words[0].length + 1) {
                        let PauseAudio

                        clearTimeout(PauseAudio)

                        if (!(audio.duration > 0 && !audio.paused)) {
                            audio.play()
                        }

                        let letter = +counter.toFixed(0)

                        if (letter - 1 === wordCount) return

                        wordCount = letter - 1

                        typeMessage()

                        PauseAudio = setTimeout(() => {
                            audio.pause()
                        }, 500)
                    }
                }

                lastScrollPosition = currentScrollPosition
            }
        }
    })

    function typeMessage() {
        if (!words[0][wordCount]) {
            return
        }

        const currentStr = words[0]

        currentStr.split('')

        let currentLetter = wordCount

        sentence += currentStr[currentLetter]
        htmlWord.innerHTML = sentence
    }

    return (
        <section class='customers'>
            <header>
                <h3 class='section_title head'>
                    <span id='type-effect'></span>
                    <div class='cursor'></div>
                </h3>
            </header>
            <CustomerCards />
        </section>
    )
}

const CustomerCards: Component = () => {
    return (
        <div class='customer-cards'>
            <div class='card-row one'>
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </div>
            <div class='card-row two'>
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </div>
        </div>
    )
}

const CustomerCard: Component = () => {
    return (
        <div class='customer-card'>
            <img
                class='user-profile'
                loading='lazy'
                decoding='async'
                src='https://picsum.photos/200/200'
            />
            <h4 class='user-name title'>عباس نعمتی</h4>
            <p class='user-review description'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
            </p>
        </div>
    )
}
