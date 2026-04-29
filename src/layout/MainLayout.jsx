export default function MainLayout() {
    return (
        <>
        <main class="pt-16">
                <section class="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div class="lg:col-span-6 z-10 text-center lg:text-left">
                            <div class="inline-flex items-center gap-2 px-4 py-2 bg-tertiary-container text-on-tertiary-container rounded-full mb-6">
                                <span class="material-symbols-outlined text-sm" style= {{ fontVariationSettings: "'FILL' 1;"}}>colors_spark</span>
                                <span class="text-xs font-bold uppercase tracking-wider font-label">Boutique Pet Care</span>
                            </div>
                            <h1 class="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-on-surface leading-tight md:leading-[1.1] tracking-tight mb-6 md:mb-8">
                                Every Pet Deserves a <span class="text-primary italic">Little Sparkle</span>
                            </h1>
                            <p class="text-lg md:text-xl text-on-surface-variant mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Step into a world of bespoke grooming, curated toys, and organic treats. We don't just care for pets; we celebrate them.
                            </p>
                            <div class="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                                <button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    Explore Services
                                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <button class="bg-secondary-container text-on-secondary-container px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3">
                                    View Catalog
                                </button>
                            </div>
                        </div>
                        <div class="lg:col-span-6 relative mt-8 lg:mt-0">
                            <div class="relative z-10 rounded-lg overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                <img alt="Happy Golden Retriever" class="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQm5l1r0Q8Uwnw4kzgEs6RJ0tuZSByzZjXlkltu7c3PAVezyo3ZWGU7u2Ll_r4Erz-m8gi4_Q0dmumcHtkClgXmr4ylkLUznnx02p_Kb70B69Jj_fIrF1tZ2Hu-eRzU4osjemSjH4lr7oF_wqvpCtXdSBg_EEUL-3i7kKjNB7ht4jlNXvey_ZXRPhObti-Rw03Z_2SXFsE7U5jvlXb4o-wEUVN54lBt6buSEQ9IHSixtzCZlItC0gSAI7lpPhnrhqjgipxcIR-X6V4" />
                            </div>
                            <div class="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -left-10 w-64 md:w-80 h-64 md:h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
                            <div class="absolute bottom-6 -right-2 md:bottom-10 md:right-10 z-20 bg-white/60 backdrop-blur-xl p-4 md:p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] border border-white/40 max-w-[240px] md:max-w-xs">
                                <div class="flex items-center gap-3 md:gap-4 mb-3">
                                    <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                                        <span class="material-symbols-outlined text-primary text-xl md:text-2xl" style= {{ fontVariationSettings: "'FILL' 1;"}}>pets</span>
                                    </div>
                                    <div>
                                        <p class="text-xs md:text-sm font-bold font-headline">Next Grooming</p>
                                        <p class="text-[10px] md:text-xs text-on-surface-variant">Today at 2:30 PM</p>
                                    </div>
                                </div>
                                <div class="flex -space-x-2 md:-space-x-3">
                                    <img class="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtg7FwMw-fJ7Pdctyq5jYjzupADuYYGBzDfIxHk6um3Yc3WQbawatfM-z3YFdQJZYbCyLKoxaA2Vku4PVT2SFtJizWRs3LoCDGSRD0S8MEVZ9_I5LiJD6NVQu3PCmu21RLOKOrgN577fdzXy625wXyviilh_bqYAmulqfGHP5QFMlDJTrCo6bRi0z8aUo_aLvwbYQ2sG3_xN8C5tQwaH3eiIg7yjl-0Va7X4KG1fCjL0u_1z4r20obDlH3XisRpv1eJxOx398A060i" />
                                    <img class="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_umyKUYo4GkvTpl055LzK97yfBssARSBiH_vnrPuJv_p7kwJ80GKnIEToaYkWPuPfODM5OiAxVZeJlaTOlNakdX1SPlab0Vm17wa2l6ypIuSMlx_0unYADhUFej15MI3OT_jBtXcWVkXWtw9p1w8F1SKA3Ryq2IOIWcAdgjRRLNUC7_0HpIFGcq4N4YjYDhZ89JRZgzOPizn29qX7w060q5z8QTDTdBSb4_2nfcKVeZWimXXWPV-f2GRfTmBoZkTDCN5gERdtArK" />
                                    <div class="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[8px] md:text-[10px] font-bold">+12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img alt="Premium pets background" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB37G-lTeHG7ZD_KBe9wuYyJJMOig80yU9xXfIY0ZYxKLk9a63Glh9FxOUewuIxUcezsvrlpgZq_F7mkIyB4q4Ug_Tfj-VM3igihMuJxf0cB96-nzq4MzZdPvV9CU0h7jtpWxTGTxC5bZyduPTCjnX7GquZq_XvA7SYMzgH6MVmh5nBflls-7Qqe-LEA2y4SlyzJ9iICbJJ3ZvIvBYhlMzceMFWDcXe3qNmJGinbLA_PdF5RWb3heNr0UNh4KhKSXYkf8Xb1KhMZLw-" />
                        <div class="absolute inset-0 bg-white/80 dark:bg-slate-900/85 backdrop-blur-[2px]"></div>
                    </div>
                    <div class="max-w-screen-2xl mx-auto relative z-10">
                        <div class="text-center mb-16 md:mb-20">
                            <h2 class="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-on-surface">Crafted with Love</h2>
                            <p class="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">Experience our suite of premium services designed to keep your companions healthy, happy, and stylish.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <div class="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-8 md:p-10 flex flex-col justify-end transition-all hover:shadow-2xl hover:-translate-y-2 border border-white/20">
                                <div class="absolute inset-0 z-0">
                                    <img alt="Grooming" class="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2-AtjHcXtrkHovE7EnDhcfDOsUwG8bMl7LZjrelKdW9E214pyl96N_h8TwAecjuDYndf4q7xzkouTPixtZ8sLDx51vQh4dVnvSp7kju6mIiV-mamc0CpD_gFM1SULRrWiqxctnn6sGYH8xZakpCiuUgZjALIlny4HhOcm2O5aVOkDNMTIK4YVonF9DTfvy7OycNN6WWsQtOI6z69AJudkLn01eCgGvVbPiwMSl3JhSajgl18UBKzkC3bcYfLzSuqmTtMXkIOtWXWn" />
                                </div>
                                <div class="relative z-10">
                                    <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                        <span class="material-symbols-outlined text-2xl md:text-3xl">content_cut</span>
                                    </div>
                                    <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4">Artisan Grooming</h3>
                                    <p class="text-on-surface-variant mb-6 text-base leading-relaxed">Signature cuts, aromatherapy baths, and paw-pedicures for the discerning pet.</p>
                                    <a class="text-primary font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4" href="#">
                                        Book Now <span class="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                            <div class="md:col-span-2 group bg-secondary-container/90 dark:bg-secondary-container/80 backdrop-blur-md text-on-secondary-container rounded-lg p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 transition-all hover:shadow-2xl hover:-translate-y-2 border border-secondary/10">
                                <div class="flex-1 order-2 sm:order-1">
                                    <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
                                        <span class="material-symbols-outlined text-2xl md:text-3xl">home_work</span>
                                    </div>
                                    <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4">The Playground</h3>
                                    <p class="opacity-90 mb-6 text-base leading-relaxed">Supervised social play in our temperature-controlled indoor-outdoor meadow.</p>
                                    <button class="bg-white/30 backdrop-blur-md px-6 py-3 rounded-full font-bold text-sm md:text-base w-full sm:w-auto hover:bg-white/40 transition-colors border border-white/30 shadow-sm">Tour Our Facility</button>
                                </div>
                                <div class="flex-1 w-full h-48 sm:h-64 md:h-full rounded-lg overflow-hidden shadow-xl order-1 sm:order-2">
                                    <img alt="Dogs playing" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpvLryTLRwB3pUIYk3gZKl5FMLTSkTu8JGjrljocARdCC5Jm90gRYt-xeAQzTiMzIFHkJiY1L_EiBuK-6gEJxArYjY3br7MTL3zUrkOUEzkJNzqiFL6IcfmubEEAC984B3JM9CzDs8Q_9rgorQ2T2w5W2_8GVAVIYjz4CFVjh6RXNwGTgFiV8WxtZ28226Am8fojqpEujgvrV1mxIZnUDlZcQjxAJBSzcw17p7fi41H3Nz_CU9c4XYeKLfUuOQlWfBpzR3zdi-cTg" />
                                </div>
                            </div>
                            <div class="group bg-tertiary/90 dark:bg-tertiary/80 backdrop-blur-md text-on-tertiary rounded-lg p-8 md:p-10 transition-all hover:shadow-2xl hover:-translate-y-2 border border-tertiary-container/10">
                                <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6 shadow-lg shadow-tertiary-fixed/20">
                                    <span class="material-symbols-outlined text-2xl md:text-3xl">shopping_bag</span>
                                </div>
                                <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4">Curated Shop</h3>
                                <p class="opacity-90 mb-6 text-base leading-relaxed">Hand-picked toys and accessories from ethical artisans worldwide.</p>
                                <a class="font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-sm md:text-base decoration-2 underline-offset-4" href="#">
                                    Browse Catalog <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div class="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-8 md:p-10 transition-all hover:shadow-2xl hover:-translate-y-2 border border-white/20">
                                <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-600">
                                    <span class="material-symbols-outlined text-2xl md:text-3xl text-primary">school</span>
                                </div>
                                <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4">Manner Academy</h3>
                                <p class="text-on-surface-variant mb-6 text-base leading-relaxed">Positive reinforcement training focusing on the bond between you and your pet.</p>
                                <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-16 md:py-24 px-4 md:px-8 bg-surface">
                    <div class="max-w-screen-2xl mx-auto">
                        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
                            <div>
                                <h2 class="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Meet Our Happy Clients</h2>
                                <p class="text-base md:text-lg text-on-surface-variant max-w-xl">Every tail wag and purr is a testament to the love we put into our work.</p>
                            </div>
                            <button class="bg-outline-variant/10 text-outline px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-outline-variant/20 transition-all text-sm md:text-base w-full sm:w-auto">Join the Family</button>
                        </div>
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                            <div class="space-y-3 md:space-y-4">
                                <img class="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjCOFi8-y9hoA5tQJqyX0oRzbZvOHB2-wwYmRDAvm0ZwwAAAtDSnt6m2JReQjUJqrSmYFEDUruRHJAhwkWCND-D1utG0rdXAGHrPY-u8QS2AEM_dXhwgpTAK7HpOfPkhsUyObgZ1pjpu1H295dNlX6J8Tr4w7Y5qPgUl6wUrJvKLsS-NgH75yK0wRMQ4-l0zBgliuCDq24-MWtYTMfo86QwhpgSgmCz9IACUI5L2a5cT2VNWOoHSNxRYYkRFUepkw9vEplXOMe1-T" />
                                <img class="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRnX3uYt5lKQQuA9CMqc6uBsEMKml9ACZ5S62t_ug9QbTuhdqo7PyWwQoGC4UMMG1heoohHi3_jiGDNQbGm2Wspik6ctiV6obii3qyJYnoOobHGIW6aZ-D26fdYEq9L62izil1_cZFW_t1Iwn8At6raNUv6_6JoffjxTr0qskvd-b__XDBEaeYbTM6tVWiSRoU-btU3qWSypHbqZubXGVT4A2Nt-GRgo7lClBHxdtIViDwfXXQjHK4gYOkLqmAz51Ub1HiiqJ78gf" />
                            </div>
                            <div class="lg:pt-8 space-y-3 md:space-y-4">
                                <img class="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrdF2-8q5LHM92LJk-vkWiAA_3JFVcEqsqUr9zl4GtDDcmSGpB2MYIZAGzl2-NKzWXFlSaBhcIBQWyd3rwUREp8NSJXwjZypOqMYEWmu3mHQ_HV3FggMEghuXZwbEKXCgeruqEARwuIQ3zAuqROslt1pk3-aLmEeEakPqzl9R9DQRRnpkb2WqZxh0ISUrjDl9MVX3vh4AnHatTd3fo-5BSf53KsWz-FWQV-JVH9HCS7b8uarihrDno0WHKEQF2G_bt1jSFgBbbW-WI" />
                                <img class="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs5sW7d8eB9geQfZthmXeXoj_MTZG4BlIXhFS_WmdORt64V7oW96nuXe0qthSxu2RUTdEkSC9c7JKuFafwuGRcQ1ql_XeuRp87Tw1etnbV-GAvEqHbclfNx2Nd3T8oaoNHsif_oMJL61RtEjMLvQtNFxljNNtnUorQTa-m5XukdtRUR3lyWe7s2yz_LYpGCsq4p1V3cKi5wSSLcg9GHYgf1evgL1CJUJWgvbA9ZS2PnyZsr7lKf1gejVCtueD_Hm0gq15By4_ryTl9" />
                            </div>
                            <div class="space-y-3 md:space-y-4">
                                <img class="w-full h-56 sm:h-72 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaVb7cV83yWtLScxSTaOMlDrC29xAd4A9pIVX6e6XwjwutYx-XNUjjN8TxlTeamQ9TSEHMHve0mezazZzpeu3RNxhgEo00Se1xz8HHYCx4kp3RRQXPPGl48-3a_S7LDdzwIIM2B2Is6BGut-_q1aqR8YJjlIX2PPpGawQC2yzxVaPnmBUCMXgkmhaCYQhVQMBabYK1DDBigqkzzjjrMXPCfr3oLGijpMvdtvBfE79hrSusECyk1FWGoYMzTV9q0VgwwCOqqPY-8AXo" />
                                <img class="w-full h-56 sm:h-72 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJNvne6osE67YCT9u4qM1LSXQOiZVDPgEZitPg-QPniSUTiKjywRGXdu4wbmaYTP_ZTkUMHGnrToESsc6tLvo0QnN6mnFNlq6RVPehdGzJJkCB_q09q6FsjaKHMxGoj2XcE-Djzh3AqvrGWOXysp9KH4shrCSLc-qvXifeIX6ueZapUIWgGWtqgLtNoC4Vu56SOxYjBB5481imRFpNAM1ly2eDibok-Diek73wEc6FduCOwdh8enKaFL-VxqeC8d9km08EhDG5qMjI" />
                            </div>
                            <div class="lg:pt-12 space-y-3 md:space-y-4">
                                <img class="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXcWT27WWK2zcBu8tBEkOalRjdasiZLxg2pt--m-au-G1wjG18qpcWP2zWC-f0A7-3LK_yM6hNHfqWWYgY6k3QgBfqcfJPZ-4mk5ovItvpfZusqB4DXP4qqybcMWCSWMSOkzqcoF-6UQLp5wvLz_7es5M_6Jenmi_iQ6Ctn0Yl1o_Uq4OTk9u3ux2jnUeXDLloM_9MX8jdNKnvAZl5USxjvFwF0wyULMGM-FbcSZfsBqXfOoFs_TTNK8-c2pB2WUm7nwyeuPy3OUnC" />
                                <img class="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPzR4nzvaqMgtZtwqSSWbOkWqi8_s0E2Rolt5F0E9pVis5OMn0SrapNAj0ihsquq1eNW0vdk_DfPrIJqy9ARWrIKMBEFNT_sBMPp175QpoNtcBruS28h830SZI0gCynSlDsluFRMYUoW0QYqsrpDBHfLC2q8wwek99V3nrGna7DeaqnhondCxOvrIbluMsZZmsCsvqqd3S9hrVA3GMjfc1rwOhLFR5ilMNRzdKHywtxLETKT-aZm-k_TMxVi6XLL8jOrUM7JNSh6bi" />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-16 md:py-24 px-4 md:px-8 bg-surface-container-lowest">
                    <div class="max-w-screen-2xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 class="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center lg:text-left">What Pet Parents Say</h2>
                                <div class="space-y-8">
                                    <div class="relative pl-10 md:pl-12">
                                        <span class="material-symbols-outlined absolute left-0 top-0 text-primary-container text-3xl md:text-4xl">format_quote</span>
                                        <p class="text-lg md:text-xl italic text-on-surface-variant mb-4">"The grooming at Pet Atelier is unmatched. Bella comes home looking like a superstar and she's always so happy when we arrive!"</p>
                                        <div class="flex items-center gap-3">
                                            <img class="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUy2Vz2jEXwXgrOf4xx0SEnkG6g9UKIuTv6mhE7tiLnSw1_Rle6dHHHidQLSyAizjb4GMzy_pWCc-Ohc0o6AL6d_UumeMIlBwcZpBoAflyxLARzFNJ064M8maAI9xmsfKh2BD5ZdnpqSyjrtp1UxZokiabTalyLX0K8RhOfKBJCncNC5Q9h9MkPlJHLR4qPuCaY46j8l5dD0LLFkOQoUr7FYxv45WM8UAX9Uj7pmT681jvJfqY9QyeUF99grP5h5aWkNE-ohlFRmBt" />
                                            <div>
                                                <p class="font-bold font-headline text-sm">Sarah Jenkins</p>
                                                <p class="text-xs text-on-surface-variant">Owner of Bella (Cockapoo)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative pl-10 md:pl-12">
                                        <span class="material-symbols-outlined absolute left-0 top-0 text-secondary-container text-3xl md:text-4xl">format_quote</span>
                                        <p class="text-lg md:text-xl italic text-on-surface-variant mb-4">"I love their curated shop. We found the most durable yet stylish toys that Cooper hasn't been able to destroy. A true boutique experience!"</p>
                                        <div class="flex items-center gap-3">
                                            <img class="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVOWbBeKmrIs7Hl1j2eQbkNctjI2j_46AuwScnMa7YkBm364WUxo2MmqQfC7YnGvHh4CIsfyehUw5HFd8HHCfUpV590HjF4NBvdzCiM2Ql1J0Ye-zvgqhi6219zrP603729-e2_4c7IZjO6P7v6Co7-pLL48aZOFUpRQcF9bcp8JT7iOQ6Zz1YuZioUOesE07Vo5A0wJakBszdCLRa8boP3V3OZP6tYL8eKIdTxH4yfYkQA4WJCAmjBt0D4CUiVWsujz40TVSwe8Iy" />
                                            <div>
                                                <p class="font-bold font-headline text-sm">Michael Thorne</p>
                                                <p class="text-xs text-on-surface-variant">Owner of Cooper (Golden Retriever)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
                                <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl">
                                    <span class="material-symbols-outlined text-4xl md:text-5xl text-primary" style= {{ fontVariationSettings: "'FILL' 1;"}}>stars</span>
                                </div>
                                <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4">4.9/5 Rating</h3>
                                <p class="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8">Based on 500+ verified reviews from our community of pet lovers.</p>
                                <div class="flex justify-center gap-1 mb-6 md:mb-8">
                                    <span class="material-symbols-outlined text-tertiary-container" style= {{ fontVariationSettings: "'FILL' 1;"}}>star</span>
                                    <span class="material-symbols-outlined text-tertiary-container" style= {{ fontVariationSettings: "'FILL' 1;"}}>star</span>
                                    <span class="material-symbols-outlined text-tertiary-container" style= {{ fontVariationSettings: "'FILL' 1;"}}>star</span>
                                    <span class="material-symbols-outlined text-tertiary-container" style= {{ fontVariationSettings: "'FILL' 1;"}}>star</span>
                                    <span class="material-symbols-outlined text-tertiary-container" style= {{ fontVariationSettings: "'FILL' 1;"}}>star</span>
                                </div>
                                <button class="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold w-full sm:w-auto text-sm md:text-base">Read All Reviews</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-16 md:py-24 px-4 md:px-8">
                    <div class="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-lg p-8 md:p-20 text-center text-on-primary relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div class="relative z-10">
                            <h2 class="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Stay Pawsome</h2>
                            <p class="text-lg md:text-xl mb-8 md:mb-10 opacity-90 max-w-xl mx-auto">Get exclusive tips, early access to new collections, and a special treat for your pet's birthday.</p>
                            <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input class="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-secondary text-on-surface text-sm md:text-base" placeholder="Your email address" type="email" />
                                <button class="bg-on-primary-fixed text-primary-fixed px-8 md:px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform text-sm md:text-base">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}