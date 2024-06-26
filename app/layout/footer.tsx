import './style/footer.scss'

import logo from 'assets/image/logo.png'
import { InstaIcon, TelegramIcon, WhatsappIcon } from 'icons/footer'

export default () => {
    return (
        <footer class='footer-container'>
            <div class='footer-wrapper'>
                <div class='footer-dream'>
                    <h4 class='footer-title section_title'>
                        <img
                            loading='lazy'
                            decoding='async'
                            draggable={false}
                            src={logo}
                            alt=''
                        />
                        Dream Pay{' '}
                    </h4>
                    <p class='footer-description title_smaller'>
                        با دیریم پی، بهترین سرویس‌های اکانت اسپاتیفای، اپل
                        موزیک، دیسکورد و ... را تجربه کن! ارائه‌دهنده بهترین
                        اکانت‌های محبوب اینترنت با کیفیت برتر و قیمت مناسب.
                        انتخاب بهتر، سرعت بیشتر! با اعتماد به دیریم پی، مشتریان
                        دسترسی آسان و امن به اکانت‌های مورد نیاز خود را خواهند
                        داشت و از امکانات ویژه‌ی هر یک از سرویس‌ها بهره‌مند
                        خواهند شد.
                    </p>

                    <a
                        class='enamad'
                        referrerpolicy='origin'
                        target='_blank'
                        href='https://trustseal.enamad.ir/?id=1007554&Code=jFD3Onu0yGN5GsbebA8a9l60ptpV4yg4'
                    >
                        <img
                            referrerpolicy='origin'
                            src='https://trustseal.enamad.ir/logo.aspx?id=1007554&Code=jFD3Onu0yGN5GsbebA8a9l60ptpV4yg4'
                            alt=''
                            style='cursor:pointer'
                            // @ts-ignore
                            code='jFD3Onu0yGN5GsbebA8a9l60ptpV4yg4'
                        />
                    </a>
                </div>

                <div class='footer-links'>
                    <div class='dream-socials section_title'>
                        <a
                            class='social icon telegram'
                            href='https://t.me/DreamPayOrg'
                        >
                            <TelegramIcon />
                        </a>

                        <a
                            class='social icon whatsapp'
                            href='https://wa.me/+905347447553'
                        >
                            <WhatsappIcon />
                        </a>

                        <a
                            class='social icon instagram'
                            href='https://instagram.com/dreampay_org/'
                        >
                            <InstaIcon />
                        </a>
                    </div>
                    <div class='site-links'>
                        <div class='link-column'>
                            <h4 class='column-head title'>دسترسی سریع</h4>
                            <a href='/#' class='title_smaller column-link'>
                                خانه
                            </a>
                            <a href='/#about' class='title_smaller column-link'>
                                درباره ما
                            </a>
                            <a
                                href='/products'
                                class='title_smaller column-link'
                            >
                                محصولات
                            </a>
                            <a
                                href='/#customers'
                                class='title_smaller column-link'
                            >
                                نظرات مشتری ها
                            </a>
                            <a
                                href='/#contact'
                                class='title_smaller column-link'
                            >
                                ارتباط با ما
                            </a>
                            <a href='/#faq' class='title_smaller column-link'>
                                سوالات متداول
                            </a>
                        </div>
                        <div class='link-column'>
                            <h4 class='column-head title'>اطلاعات بیشتر</h4>
                            <a href='/blogs' class='title_smaller column-link'>
                                مقالات
                            </a>
                            <a href='/' class='title_smaller column-link'>
                                همکاری
                            </a>
                            <a href='/' class='title_smaller column-link'>
                                حریم خصوصی
                            </a>
                            <a href='/' class='title_smaller column-link'>
                                شرایط استفاده
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='en title_smaller'>
                © 2024 Dream Pay. All rights reserved.
            </div>
        </footer>
    )
}
