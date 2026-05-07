import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function HomeContactUs() {
    return (
        <>
            <Navbar />
            <main className="pt-28">
                <section className="px-8 max-w-7xl mx-auto mb-20">
                    <div className="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[400px] flex items-center">
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                            <img alt="Pet Atelier Interior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfKD-SXo0bm-UNuUE_A4or4c-U86iG700GIJkE_HbeZZhcxSQUmuqucwnJ3U7G4-MCnMd9sIxbFqxjcQoQ7rX6Y6pGjz7wgzpXFOgrDD5YqQRVUYbnqacHbuZnljdz3093yc1lfpiBYlY9HhnTS1LJd6kx1HqJRzGJ1i3iTdr4KryeonWUpGb9aKau_GZI0ClvmteD70fVa7fltxzabYbu8SikOfNm_rdWoIFEWZdo_w5Esvg5yGWgxySFMiS54nR_QVCuEKDJ8UZZ" />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 max-w-2xl">
                            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant text-xs font-bold tracking-widest mb-6">CONTACT US</span>
                            <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-none mb-6">
                                Let's <span className="text-primary italic">Connect</span>.
                            </h1>
                            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                                Whether you have a question about our bespoke services or just want to share a photo of your furry friend, we're here to listen.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-10 shadow-[0_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                        <h2 className="text-3xl font-bold text-on-surface mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">Your Name</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-on-surface-variant ml-1">Subject</label>
                                <input className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="How can we help?" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-on-surface-variant ml-1">Message</label>
                                <textarea className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all text-on-surface resize-none" placeholder="Tell us everything..." rows="5"></textarea>
                            </div>
                            <button className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                                <span>Send Inquiry</span>
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-surface-container rounded-xl p-8 space-y-8 flex-grow">
                            <h3 className="text-2xl font-bold text-on-surface">Atelier Details</h3>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Main Studio</p>
                                    <p className="text-on-surface-variant">123 Petal Lane, Bloom District<br />San Francisco, CA 94103</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Phone</p>
                                    <p className="text-on-surface-variant">+1 (555) 012-3456</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Email</p>
                                    <p className="text-on-surface-variant">hello@petatelier.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary text-on-primary rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-6">Follow the Pack</h3>
                            <div className="flex gap-4">
                                <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all" href="#">
                                    <span className="material-symbols-outlined text-on-primary scale-110">photo_camera</span>
                                </a>
                                <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all" href="#">
                                    <span className="material-symbols-outlined text-on-primary scale-110">social_leaderboard</span>
                                </a>
                                <a className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all" href="#">
                                    <span className="material-symbols-outlined text-on-primary scale-110">push_pin</span>
                                </a>
                            </div>
                            <p className="mt-6 text-primary-fixed text-sm">Join 50k+ pet parents for daily inspiration and exclusive drops.</p>
                        </div>
                    </div>
                </section>
                <section className="px-8 max-w-7xl mx-auto mt-20 pb-16">
                    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-sm">
                        <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.948096635625!2d115.18492767243917!3d-8.60098206841414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2393933b4b86b%3A0xe913399d59df98fd!2sPerumahan%20Graha%20Pertiwi%20Abianbase!5e0!3m2!1sid!2sid!4v1777532304093!5m2!1sid!2sid"
                                className="w-full h-full border-0 contrast-125"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map Location"
                            ></iframe>
                        </div>
                        <div className="absolute bottom-8 left-8 bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-lg max-w-xs shadow-xl border border-white/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                                <h4 className="font-bold text-on-surface">Visit our Showroom</h4>
                            </div>
                            <p className="text-sm text-on-surface-variant mb-4">Open daily 10am — 7pm. Pet-friendly environment with refreshments for two-legged and four-legged guests.</p>
                            <a className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
                                Get Directions <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}