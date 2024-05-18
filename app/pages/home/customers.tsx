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

        document.onscroll = () => {
            let top = section.getBoundingClientRect().top - innerHeight + 100

            if (top <= 0) {
                let currentScrollPosition = scrollY

                if (currentScrollPosition > lastScrollPosition) {
                    if (wordCount <= words[0].length + 1) {
                        let PauseAudio

                        clearTimeout(PauseAudio)

                        if (!(audio.duration > 0 && !audio.paused)) {
                            audio.play()
                        }

                        let letter = Math.floor(-top / 20) - 1

                        if (letter === wordCount) return

                        wordCount = letter

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
        </section>
    )
}
