import { Link } from 'react-router-dom'

export default function SignUpLayout() {
    return (
        <>
            <main class="min-h-screen flex items-center justify-center py-12 px-6 paw-pattern relative">
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
                    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl"></div>
                </div>
                <section class="w-full max-w-md relative z-10">
                    <div class="glass-card p-6 md:p-10 rounded-xl shadow-2xl border border-white/50"><div class="text-center mb-10">
                        <span class="font-headline text-3xl font-black text-orange-600 dark:text-orange-500 tracking-tighter">
                            Pet Atelier
                        </span>
                    </div>
                        <form class="space-y-3">
                            <div class="grid grid-cols-1 gap-6">
                                <div>
                                    <label class="block font-label text-sm font-semibold text-on-surface-variant mb-2 ml-1" for="name">Full Name</label>
                                    <input class="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60" id="name" placeholder="Enter your name..." type="text" />
                                </div>
                                <div>
                                    <label class="block font-label text-sm font-semibold text-on-surface-variant mb-2 ml-1" for="email">Email Address</label>
                                    <input class="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60" id="email" placeholder="Enter your email..." type="email" />
                                </div>
                                <div>
                                    <label class="block font-label text-sm font-semibold text-on-surface-variant mb-2 ml-1" for="password">Password</label>
                                    <div class="relative">
                                        <input class="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60" id="password" placeholder="Enter your password..." type="password" />
                                        <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant cursor-pointer">visibility</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-3 py-2">
                                <input class="mt-1 rounded text-primary focus:ring-primary border-outline-variant/30" id="terms" type="checkbox" />
                                <label class="text-sm text-on-surface-variant leading-snug" for="terms">
                                    I agree to the <a class="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a class="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                                </label>
                            </div>
                            <button class="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300" type="submit">
                                Create Account
                            </button>
                        </form>
                        <div class="mt-10 text-center">
                            <p class="text-on-surface-variant">Already have an account? <Link to="/SignIn" className="text-secondary font-bold hover:underline">Sign In</Link></p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}