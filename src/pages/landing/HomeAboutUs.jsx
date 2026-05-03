import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function HomeAboutUs() {
    return (
        <>
            <Navbar />
            <main class="pt-24 overflow-hidden">
                <section class="relative px-8 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div class="flex-1 space-y-8">
                        <span class="inline-block px-4 py-1.5 bg-tertiary-container/30 text-tertiary font-label text-sm uppercase tracking-widest rounded-full">EST. 2024</span>
                        <h1 class="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] tracking-tighter text-on-surface">
                            Crafting <span class="text-primary italic">Happiness</span> Since 2024
                        </h1>
                        <p class="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
                            We believe every pet deserves a touch of luxury. Pet Atelier is where artisanal craftsmanship meets the unbridled joy of our four-legged friends.
                        </p>
                        <div class="flex gap-4 pt-4">
                            <button class="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-headline font-bold text-lg hover:scale-95 transition-transform duration-200">Our Story</button>
                            <button class="px-8 py-4 border-2 border-outline-variant/30 text-primary rounded-xl font-headline font-bold text-lg hover:bg-surface-container-low transition-all">View Catalog</button>
                        </div>
                    </div>
                    <div class="flex-1 relative">
                        <div class="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
                            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZHkFNQ9Fq45qL2aQKoSgOt1NiS1w-DLP6CB0thOUGqyCka-APmb3VZ31r9V7d2CuDGQdPWKdi0ofPiRMxaPSvUYjlHBPwdPEdI1UCm6yMEvGO9XDp6yPd52ZAkWsjB2W6_p0DE4_eyAmzWGCD7QkBG4IFPYMk5uwwnJixreODn7h-b-xV3UTkU8lYYqCtHi75Zz36rWmhYk0LueQQixRK3ubLOda6CL-jQj6b2uc81D2C6XVi1vphNbaA69ZULMcaqgdLVorDsCKB" />
                        </div>
                        <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/40 backdrop-blur-lg rounded-full -z-0"></div>
                        <div class="absolute -top-10 -right-5 w-32 h-32 bg-primary-container/20 rounded-full -z-0"></div>
                    </div>
                </section>
                <section class="mt-20 py-24 bg-surface-container-low relative">
                    <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div class="order-2 md:order-1">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-square rounded-lg overflow-hidden translate-y-8">
                                    <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjKJ8TI3QWVIG5AOGnO9XDjCm55XFHRlWEL6bkyEK-D_Ngxp8yYyGZ1rlX0VH_YknhqmqPrnpjJ6HrOx1SCPz1ownqIV0m02Rk-jvwJzR2RygsYav6gulbiErBTI_nq-ZuMsDNb4J1c9_qiU0k7UqbnTygrPB4PFvQB0uSYHaYxwjczHFBl4ayhvqUZervHHRucm4uqH5sy3Lj9JyNIrc6YlLDLX-v-mzCKRizLjMdQIjdsC282UR7SZ-zHrR_IabMLH12KDmBdRhe" />
                                </div>
                                <div class="aspect-square rounded-lg overflow-hidden">
                                    <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71n8ayNdw4nqQgZOfcJdzJb_flVLUxSanQrI4SyUe_8gXwm5jPndfDVLwnDJaZtQrWVnShLuekwu6XzhihtKF4XGLV45DZKXLHktY1CgosdDJMzgk8xNTe8-PagPrBuTtIXwH15mqI_cMOJbm9XgVZYT3b8nyba6-x3RcRJENjFdkZxRAKxZu_hYQ4fzHn3hMXQ1flT5QxGoEroRDK0viVlXauwcPoZX_Yu-tezIGCackJhdLoxxObApNLqJ6DOLpWh0H8XRom4Y6" />
                                </div>
                            </div>
                        </div>
                        <div class="order-1 md:order-2 space-y-6">
                            <h2 class="text-4xl md:text-5xl font-display font-bold text-on-surface">Curating the <br /><span class="text-secondary">Best for Pets</span></h2>
                            <p class="text-lg text-on-surface-variant leading-relaxed">
                                Our mission is simple yet profound: to elevate the everyday lives of pets and their people. We meticulously select every fabric, ingredient, and design to ensure they meet the highest standards of safety, style, and sustainability.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-4 text-on-surface font-medium">
                                    <span class="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                                        <span class="material-symbols-outlined">verified</span>
                                    </span>
                                    Artisanal Quality Control
                                </li>
                                <li class="flex items-center gap-4 text-on-surface font-medium">
                                    <span class="w-10 h-10 flex items-center justify-center bg-secondary/10 rounded-full text-secondary">
                                        <span class="material-symbols-outlined">eco</span>
                                    </span>
                                    Sustainable Materials Only
                                </li>
                                <li class="flex items-center gap-4 text-on-surface font-medium">
                                    <span class="w-10 h-10 flex items-center justify-center bg-tertiary-container/30 rounded-full text-tertiary">
                                        <span class="material-symbols-outlined">favorite</span>
                                    </span>
                                    Designed with Love
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="py-32 px-8 max-w-7xl mx-auto text-center">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">The Atelier Team</h2>
                    <p class="text-on-surface-variant max-w-2xl mx-auto mb-20 text-lg">Meet the passionate experts who bring Pet Atelier to life every day.</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="group">
                            <div class="w-64 h-64 mx-auto mb-6 relative">
                                <div class="absolute inset-0 bg-primary-container rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                                <img class="relative w-full h-full object-cover rounded-full border-4 border-surface-container-lowest shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8FuiWXIOawqc_CYbOp0_NghWyE9bXdei3PsyrsrvVYuqFSWcj1JH2BsGacUkqZMFh3yt-FArX93KELI-fPZ8EtL45WPe1NDtTggGrSlmGqGkHjZ7xP7mH3NCOVUgVkiplBvWXpx-naGnsmlUr-HcxjLCJVFLEcLOgl_jRNkOzPw-0QZPhX64y_4Idna7ls1o7UL5IGdqvi0GqfYVZaTA8oJRPdajTllSwfqPaT41lqUEjHMLdObP0HSkfixncHcqNMkdzrE99d1JL" />
                            </div>
                            <h3 class="text-2xl font-display font-bold text-on-surface">Elena Rossi</h3>
                            <p class="text-primary font-semibold font-label text-sm uppercase tracking-widest mt-1">Founder &amp; Visionary</p>
                        </div>
                        <div class="group">
                            <div class="w-64 h-64 mx-auto mb-6 relative">
                                <div class="absolute inset-0 bg-secondary-container rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                                <img class="relative w-full h-full object-cover rounded-full border-4 border-surface-container-lowest shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_4VQtxl1HzIaQRPjfc6ZMzqhNcSuGDIgq_bouuOiABQ_0HcDwOIaoWf3KuMILOkrDplirsChk55g1xOJBhJfnDcRmowL405T6-IjcrIkAKjO5Z4o7dtHDOkxZPCId6LRpq6T8VzJZ4RJkLzy_dTFTX7fc0DWv7K7bISTGzjwbSLttp3q1Rx-p3gamznd-5dDHXudU3lxEfB_YNejZt4jLoezqzM8QphG437WtkRzrkLY7jVndeRLQsQssX3DueLlhb8aJ9PPWwvX" />
                            </div>
                            <h3 class="text-2xl font-display font-bold text-on-surface">Dr. Marcus Chen</h3>
                            <p class="text-secondary font-semibold font-label text-sm uppercase tracking-widest mt-1">Vet Expert</p>
                        </div>
                        <div class="group">
                            <div class="w-64 h-64 mx-auto mb-6 relative">
                                <div class="absolute inset-0 bg-tertiary-container rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                                <img class="relative w-full h-full object-cover rounded-full border-4 border-surface-container-lowest shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtpsD2AivMWb8fEBSTio3-_tbldH4GIKrEGWICeUwOiY3CS8912xcPnyc5-uBDDE-t5r0GhvZ8DMzpdilwqV_c5sCFkpjhuEVN5KxFKmYgkSyd7S221A01822BZlCORrohoBV6fGfVnEDoAVbQzpXtZAvSQoeaUAGO3ifkG7a1Zz0vn2DUyH6HYaZdd23HUqMxKJj-Oze7WY44WU5CyFv70ya16zaBNZ28Sm12K284zSt4nKltfMODxYo_pxstYlcWqIWP7_fW25-V" />
                            </div>
                            <h3 class="text-2xl font-display font-bold text-on-surface">Sofia Brooks</h3>
                            <p class="text-tertiary font-semibold font-label text-sm uppercase tracking-widest mt-1">Head Groomer</p>
                        </div>
                    </div>
                </section>
                <section class="py-24 px-8 max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
                        <div class="md:col-span-2 bg-primary-fixed text-on-primary-fixed rounded-xl p-12 flex flex-col justify-end space-y-4">
                            <span class="material-symbols-outlined text-5xl">workspace_premium</span>
                            <h3 class="text-4xl font-display font-extrabold tracking-tight">Uncompromising Quality</h3>
                            <p class="text-lg opacity-90 max-w-lg">Every stitch and ingredient is vetted by our experts to ensure your pet gets the very best nature and science have to offer.</p>
                        </div>
                        <div class="bg-secondary text-on-secondary rounded-xl p-10 flex flex-col justify-center text-center space-y-4">
                            <span class="material-symbols-outlined text-5xl mx-auto">groups</span>
                            <h3 class="text-2xl font-display font-bold">Community First</h3>
                            <p class="text-sm opacity-80">We host monthly workshops and park meets because pet ownership is a journey best shared.</p>
                        </div>
                        <div class="bg-surface-container-highest text-on-surface rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4">
                            <span class="material-symbols-outlined text-5xl text-primary">potted_plant</span>
                            <h3 class="text-2xl font-display font-bold">Sustainable Joy</h3>
                            <p class="text-sm text-on-surface-variant">Happiness shouldn't cost the planet. Our packaging is 100% biodegradable.</p>
                        </div>
                        <div class="md:col-span-2 relative rounded-xl overflow-hidden group">
                            <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNW8hOEo7bPqlpHpO6L5qOxPNH6dcs1hfBcJOEy0LJ2gCVNMbRrfL4ukFz0aB29rV6yvlgd5tasDU5k4hFJEvNziiTUyW8_YWEYXcaSeJ5Q7n52rwuj-vUkQlZMs6ched8KJgS6Qy5O6_BU1BOsJyMuWuh3pwoSo2y9y_zFHZm1a-N-TZWZaru3zeL1f5GDz9XSt1B_MdQp-uFUO0wA46T-75PTmX4b8JNVyt5KXcHui7tXE2O64qYY8awurGSuPRgAbPe67K23C63" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                                <h3 class="text-white text-3xl font-display font-bold">The Paws &amp; Play Philosophy</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}