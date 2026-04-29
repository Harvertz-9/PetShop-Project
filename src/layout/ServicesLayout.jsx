import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function ServicesLayout() {
    return (
        <>
            <Navbar />
            <header class="relative pt-32 pb-20 px-8 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
                <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="relative z-10">
                        <span class="inline-block px-4 py-1.5 rounded-full bg-tertiary-container/30 text-tertiary font-label text-sm font-semibold tracking-wider mb-6">LUXURY ATELIER</span>
                        <h1 class="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tighter">
                            Expert Care for <span class="text-primary italic">Extraordinary</span> Pets
                        </h1>
                        <p class="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg font-body">
                            Redefining the pet care experience with editorial attention to detail. From artisanal grooming to holistic wellness, we treat every pet like a masterpiece.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <button class="px-10 py-5 rounded-xl cta-gradient text-on-primary font-headline font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                Book an Appointment
                            </button>
                            <button class="px-10 py-5 rounded-xl border border-outline-variant text-primary font-headline font-bold hover:bg-surface-container-low transition-colors">
                                View Price List
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl"></div>
                        <div class="relative rounded-lg overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img alt="Happy Pet Hero" class="w-full h-[600px] object-cover rounded-lg" data-alt="A joyful Golden Retriever with shiny groomed fur sitting in a sun-drenched, high-end minimalist interior with soft orange accents. The lighting is warm and cinematic, highlighting the dog's happy expression. The setting features premium architectural details and a boutique aesthetic, creating an atmosphere of sophisticated care and warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gPKaQEFU4jcZo5EMI5IrtAKqTZUoBKtx_4LMcGti9AoCbPHzOiTYBTi6a8YGq75HItSFILKYTbCFcEezIi1WPLLIwOmDqsqVhMqSfeuUy3J0UzriZv2s6yCPCzR_fdWNeq-IK4HzriSVQtRMhn7NVhHvp2pL8kCdJjbINKr67VuvG8dX-dNYhQhDU4oS9guDiMAbZs_EakjuLK7dIEyd6Syh_XsRVIR7288AzcsmeguCzUZP7zYiP6fbamK2DC_e6uYooVbqaqJU" />
                        </div>
                        <div class="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl flex items-center gap-4 max-w-xs">
                            <div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-on-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            </div>
                            <div>
                                <p class="font-headline font-bold text-on-surface">5.0 Rating</p>
                                <p class="text-sm text-on-surface-variant">Over 1,200 happy pet parents</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section class="py-24 px-8 bg-surface-container-low">
                <div class="max-w-7xl mx-auto">
                    <div class="mb-20">
                        <h2 class="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface mb-4">Our Signature Services</h2>
                        <div class="w-24 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div class="group bg-surface-container-lowest rounded-lg p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:-translate-y-2 transition-all duration-300">
                            <div class="h-64 rounded-lg overflow-hidden mb-8 relative">
                                <img alt="Grooming Service" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of a small fluffy dog receiving a professional spa treatment in a modern pet boutique. The environment is pristine and luxurious, featuring high-end grooming tools and soft, warm ambient lighting. The atmosphere is calm and serene, emphasizing the high-quality, editorial care provided at the atelier." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhcK2Yuz0eA6EZ4LH505kOMLsIK_Efyq7D2zN4SATpRlF3UkQc1J_ixw13WAGt6Q8AK4qEQcLQItDiuY9HX572j9zEDADWUlCYAuqm62BGtSweTYUhEJ2SB5TYOOO9hjdm88FYpzvXT_3rdJhW7ixmECYfbLm46-AdLh6oohwE_6V0Cnc2C10Gen2LBxD0uM_9eCJqTxInmePwUwC7k-PV5AVEyfCDmeF-cu3c6VGku3R8F3NR3Vo8tCz0y7QTL8co9Q-p6PoMlmli" />
                                <div class="absolute top-4 left-4 bg-tertiary-container px-3 py-1 rounded-full">
                                    <span class="text-[10px] font-headline font-bold text-on-tertiary-container uppercase tracking-widest">SPA TREATMENT</span>
                                </div>
                            </div>
                            <h3 class="text-2xl font-headline font-extrabold mb-4 text-on-surface">Artisanal Grooming</h3>
                            <p class="text-on-surface-variant mb-8 line-clamp-3">Full-service coat styling, organic aromatherapy baths, and ultrasonic teeth cleaning in a stress-free environment.</p>
                            <div class="flex items-center justify-between mt-auto">
                                <div>
                                    <span class="text-sm text-on-surface-variant">Starting from</span>
                                    <p class="text-2xl font-headline font-extrabold text-primary">$85</p>
                                </div>
                                <button class="p-4 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary transition-colors group">
                                    <span class="material-symbols-outlined font-bold">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <div class="group bg-surface-container-lowest rounded-lg p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:-translate-y-2 transition-all duration-300">
                            <div class="h-64 rounded-lg overflow-hidden mb-8 relative">
                                <img alt="Behavioral Training" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A professional dog trainer working with a focused Border Collie in a bright, modern indoor studio with wooden floors and soft-colored walls. The trainer is using positive reinforcement methods. The lighting is clear and natural, creating a professional yet inviting educational atmosphere consistent with a premium pet lifestyle brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-6ZdhxXhx2l-WbZ9mHf13P0pBnYrKXlaNRiEWEixF-EbHeLRMm5bsRlfq2iKGUY0UCjX5a1Vu1IIN0AMgWKz8bC9_2s-n-f_1md5-UQFT9hoQ4hKSrWSBrIYqb1gUH4qcyh7aS240-uIkxUX6UC4aVl7vklFeDSWL8tHI10MqqanUgUxKgcudTzGtQZ6XCCoSFvGG6juOWYal-nFvcoywQzYa-PiyWv5an8vLTjFx3x0VElEYBiE51UzkKW_770698VReo6Tq92P9" />
                                <div class="absolute top-4 left-4 bg-tertiary-container px-3 py-1 rounded-full">
                                    <span class="text-[10px] font-headline font-bold text-on-tertiary-container uppercase tracking-widest">EXPERT COACHING</span>
                                </div>
                            </div>
                            <h3 class="text-2xl font-headline font-extrabold mb-4 text-on-surface">Mindful Training</h3>
                            <p class="text-on-surface-variant mb-8 line-clamp-3">Positive reinforcement behavior modification tailored to your pet's unique personality and your lifestyle goals.</p>
                            <div class="flex items-center justify-between mt-auto">
                                <div>
                                    <span class="text-sm text-on-surface-variant">Starting from</span>
                                    <p class="text-2xl font-headline font-extrabold text-primary">$120</p>
                                </div>
                                <button class="p-4 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary transition-colors group">
                                    <span class="material-symbols-outlined font-bold">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <div class="group bg-surface-container-lowest rounded-lg p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:-translate-y-2 transition-all duration-300">
                            <div class="h-64 rounded-lg overflow-hidden mb-8 relative">
                                <img alt="Wellness Check" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A high-tech veterinary consultation room featuring minimalist design, soft lighting, and state-of-the-art diagnostic tools. A calm cat is being gently examined by a vet. The aesthetic is clean and modern, avoiding cold medical clichés in favor of a warm, boutique wellness clinic atmosphere with orange and blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2FU7Zm25UaWNR3xxpOI44KT0qeFndkkguhwc8wY4fPscKfY0nNitjlQidfyEpZdUXeek1bHF1kgJWZ4WoIgwNPW5kAasGIsGZkyH7k2MCGmwht7B0bCKvfPAT4gEecTVZ6kCtI0joT1MJNtmk-UUPyW2dsDvTV3FoXcHXFOaUDWJlggS_ORFifMDKHJ29_TUw4eKB6RJivumI9GpxxpUnAlKSezE3AZGIawQaPk7_cOtD2nQUO-g0xvcFEyR1ESaXmtFWQ9u6Lwmi" />
                                <div class="absolute top-4 left-4 bg-tertiary-container px-3 py-1 rounded-full">
                                    <span class="text-[10px] font-headline font-bold text-on-tertiary-container uppercase tracking-widest">HOLISTIC HEALTH</span>
                                </div>
                            </div>
                            <h3 class="text-2xl font-headline font-extrabold mb-4 text-on-surface">Wellness Checks</h3>
                            <p class="text-on-surface-variant mb-8 line-clamp-3">Comprehensive health assessments including nutritional counseling, vitals monitoring, and preventative care strategies.</p>
                            <div class="flex items-center justify-between mt-auto">
                                <div>
                                    <span class="text-sm text-on-surface-variant">Starting from</span>
                                    <p class="text-2xl font-headline font-extrabold text-primary">$150</p>
                                </div>
                                <button class="p-4 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary transition-colors group">
                                    <span class="material-symbols-outlined font-bold">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-24 px-8 bg-surface">
                <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div class="lg:w-1/2 order-2 lg:order-1">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div class="p-8 bg-surface-container rounded-lg">
                                <div class="w-14 h-14 bg-primary-container/20 rounded-xl flex items-center justify-center mb-6">
                                    <span class="material-symbols-outlined text-primary text-3xl">verified</span>
                                </div>
                                <h4 class="text-xl font-headline font-bold mb-3">Certified Experts</h4>
                                <p class="text-on-surface-variant text-sm leading-relaxed">Our staff holds world-class certifications in grooming and animal behavior.</p>
                            </div>
                            <div class="p-8 bg-surface-container rounded-lg">
                                <div class="w-14 h-14 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6">
                                    <span class="material-symbols-outlined text-secondary text-3xl">spa</span>
                                </div>
                                <h4 class="text-xl font-headline font-bold mb-3">Organic Products</h4>
                                <p class="text-on-surface-variant text-sm leading-relaxed">We use only pH-balanced, chemical-free botanical products for every treatment.</p>
                            </div>
                            <div class="p-8 bg-surface-container rounded-lg">
                                <div class="w-14 h-14 bg-tertiary-container/20 rounded-xl flex items-center justify-center mb-6">
                                    <span class="material-symbols-outlined text-tertiary text-3xl">favorite</span>
                                </div>
                                <h4 class="text-xl font-headline font-bold mb-3">Stress-Free Hub</h4>
                                <p class="text-on-surface-variant text-sm leading-relaxed">Low-volume appointments ensure your pet receives focused, quiet attention.</p>
                            </div>
                            <div class="p-8 bg-surface-container rounded-lg sm:translate-y-8">
                                <div class="w-14 h-14 bg-primary-container/20 rounded-xl flex items-center justify-center mb-6">
                                    <span class="material-symbols-outlined text-primary text-3xl">schedule</span>
                                </div>
                                <h4 class="text-xl font-headline font-bold mb-3">Priority Care</h4>
                                <p class="text-on-surface-variant text-sm leading-relaxed">Dedicated concierge services for members with 24/7 appointment scheduling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 order-1 lg:order-2">
                        <h2 class="text-5xl font-headline font-extrabold text-on-surface mb-8">The Atelier Philosophy</h2>
                        <p class="text-lg text-on-surface-variant mb-8 font-body leading-relaxed">
                            At Pet Atelier, we believe pet care shouldn't be a chore—it should be an elevating experience. We've merged the precision of high-end human salons with veterinary science to create a sanctuary where pets feel respected and loved.
                        </p>
                        <div class="p-1 w-full bg-gradient-to-r from-primary to-secondary rounded-full">
                            <div class="bg-surface px-8 py-4 rounded-full flex items-center justify-between">
                                <span class="font-headline font-bold text-on-surface">Join the Atelier Club</span>
                                <span class="material-symbols-outlined text-primary">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-24 px-8 relative overflow-hidden">
                <div class="absolute inset-0 bg-primary/5 -skew-y-3 transform translate-y-12"></div>
                <div class="max-w-5xl mx-auto relative z-10 text-center">
                    <span class="material-symbols-outlined text-6xl text-primary-container/40 mb-8" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
                    <h3 class="text-3xl lg:text-4xl font-headline font-bold text-on-surface italic leading-snug mb-12">
                        "Pet Atelier isn't just a groomer; they're family. My poodle, Luna, used to dread vet trips, but now she wags her tail the moment we pull into their driveway. The attention to detail is simply unmatched in the city."
                    </h3>
                    <div class="flex flex-col items-center">
                        <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                            <img alt="Happy Customer" class="w-full h-full object-cover" data-alt="Portrait of a sophisticated young woman smiling warmly in a bright, modern interior. The lighting is professional and editorial, with a soft blur on the background that suggests a high-end lifestyle setting. The aesthetic is clean and premium, reflecting the quality of the brand's clientele." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTMdLd1wyc5HFFSvJDbCUqrMvoRJKpJePY_RtJVOWYaJWtxBeOx6BIFwvF3JMLhbq2T7pCTXy-jjXjr3md7lUBd1-Hh1veaDJrSqV8HLeRZ9K4xDf6QAnI8HO707Zz49TQ755htgNb-_ByKm67VZKq0jApqDmLq9n0QIAl5IqnM0AGAtF1zKD60UJh8X9KyRjcuqrz6uK9gtrEK5IwxDOXB3Hz2iK_kcshIG2NcJ1Ns4hqn9rNH6rQtuTT7CXwpsGIr6ImU6nY7f7" />
                        </div>
                        <p class="font-headline font-extrabold text-on-surface">Alexandra Thorne</p>
                        <p class="text-on-surface-variant text-sm">Owner of Luna (Standard Poodle)</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}