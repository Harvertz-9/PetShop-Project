import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function ContactLayout() {
    return (
        <>
            <Navbar />
            <main class="pt-28">
                <section class="px-8 max-w-7xl mx-auto mb-20">
                    <div class="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[400px] flex items-center">
                        <div class="absolute inset-0 opacity-20 pointer-events-none">
                            <img alt="Pet Atelier Interior" class="w-full h-full object-cover" data-alt="A warm and inviting interior of a high-end pet boutique, featuring soft natural lighting filtering through large windows. The space is filled with elegant wooden shelves holding artisan pet accessories and plush bedding. A golden retriever sits calmly in the foreground of this serene and professional setting, capturing the premium brand essence of Pet Atelier with a soft orange and cream color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfKD-SXo0bm-UNuUE_A4or4c-U86iG700GIJkE_HbeZZhcxSQUmuqucwnJ3U7G4-MCnMd9sIxbFqxjcQoQ7rX6Y6pGjz7wgzpXFOgrDD5YqQRVUYbnqacHbuZnljdz3093yc1lfpiBYlY9HhnTS1LJd6kx1HqJRzGJ1i3iTdr4KryeonWUpGb9aKau_GZI0ClvmteD70fVa7fltxzabYbu8SikOfNm_rdWoIFEWZdo_w5Esvg5yGWgxySFMiS54nR_QVCuEKDJ8UZZ" />
                        </div>
                        <div class="relative z-10 p-12 md:p-20 max-w-2xl">
                            <span class="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant text-xs font-bold tracking-widest mb-6">CONTACT US</span>
                            <h1 class="text-6xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-none mb-6">
                                Let's <span class="text-primary italic">Connect</span>.
                            </h1>
                            <p class="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                                Whether you have a question about our bespoke services or just want to share a photo of your furry friend, we're here to listen.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-10 shadow-[0_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                        <h2 class="text-3xl font-bold text-on-surface mb-8">Send a Message</h2>
                        <form class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-on-surface-variant ml-1">Your Name</label>
                                    <input class="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="John Doe" type="text" />
                                </div>
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                                    <input class="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant ml-1">Subject</label>
                                <input class="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="How can we help?" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-semibold text-on-surface-variant ml-1">Message</label>
                                <textarea class="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface resize-none" placeholder="Tell us everything..." rows="5"></textarea>
                            </div>
                            <button class="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                                <span>Send Inquiry</span>
                                <span class="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                    <div class="lg:col-span-5 flex flex-col gap-8">
                        <div class="bg-surface-container rounded-xl p-8 space-y-8 flex-grow">
                            <h3 class="text-2xl font-bold text-on-surface">Atelier Details</h3>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span class="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <p class="font-bold text-on-surface">Main Studio</p>
                                    <p class="text-on-surface-variant">123 Petal Lane, Bloom District<br />San Francisco, CA 94103</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span class="material-symbols-outlined text-primary">call</span>
                                </div>
                                <div>
                                    <p class="font-bold text-on-surface">Phone</p>
                                    <p class="text-on-surface-variant">+1 (555) 012-3456</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span class="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <div>
                                    <p class="font-bold text-on-surface">Email</p>
                                    <p class="text-on-surface-variant">hello@petatelier.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-primary text-on-primary rounded-xl p-8">
                            <h3 class="text-xl font-bold mb-6">Follow the Pack</h3>
                            <div class="flex gap-4">
                                <a class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group" href="#">
                                    <span class="material-symbols-outlined text-on-primary scale-110">photo_camera</span>
                                </a>
                                <a class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group" href="#">
                                    <span class="material-symbols-outlined text-on-primary scale-110">social_leaderboard</span>
                                </a>
                                <a class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group" href="#">
                                    <span class="material-symbols-outlined text-on-primary scale-110">push_pin</span>
                                </a>
                            </div>
                            <p class="mt-6 text-primary-fixed text-sm">Join 50k+ pet parents for daily inspiration and exclusive drops.</p>
                        </div>
                    </div>
                </section>
                <section class="px-8 max-w-7xl mx-auto mt-20">
                    <div class="relative w-full h-[500px] rounded-xl overflow-hidden shadow-sm">
                        <div class="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
                            <img alt="Map Location" class="w-full h-full object-cover grayscale opacity-50 contrast-125" data-alt="A stylized minimalist map of a modern urban neighborhood, rendered in a clean light-mode aesthetic with soft orange accents indicating the location of the Pet Atelier. The map features elegant, thin-line street grids and rounded markers for key landmarks, illuminated by a soft, warm overhead glow that maintains a professional yet friendly atmosphere." data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq0_8JS8c_FoMBaFynxLyWdxAHvBz_TJCh3t3fHVHQY5-t-T9EhdcKgoV8HCrWWM7Bw-1bvm_HOf_DhC3vWSNsbPqSiaHZpIdfbuc7-ZnorEHhaR8TtdfDc11himkpqLdUcQ99gtDBUN71ABf7TXH1Ueip4OItFd1rqHe6IDSuv55uXt8KdcR4dgKxtl8JwyKIXYhnBgBxbeuSTY7apJOsrSYvFJRTzhtK-mPmtWEwXM5KBmWJk_C_lO6NmHVZQ94_hN_3dy4FqSXy" />
                        </div>
                        <div class="absolute bottom-8 left-8 bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-lg max-w-xs shadow-xl border border-white/20">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                                <h4 class="font-bold text-on-surface">Visit our Showroom</h4>
                            </div>
                            <p class="text-sm text-on-surface-variant mb-4">Open daily 10am — 7pm. Pet-friendly environment with refreshments for two-legged and four-legged guests.</p>
                            <a class="text-secondary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
                                Get Directions <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}