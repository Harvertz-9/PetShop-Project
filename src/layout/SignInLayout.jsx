import { Link } from 'react-router-dom'  // ← tambahkan ini

export default function SignInLayout() {
    return (
        <>
            <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="w-full max-w-md z-10 mx-auto">
                <div className="bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden transition-all duration-500">
                    <div className="p-6 sm:p-10">
                        <div className="mb-6 sm:mb-8 text-center">
                            <div className="flex justify-center mb-6">
                                <span className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tight select-none">Pet Atelier</span>
                            </div>
                            <h2 className="font-bold text-xl sm:text-2xl text-on-surface mb-2">Welcome Back!</h2>
                            <p className="text-on-surface-variant text-sm">Please enter your details to sign in.</p>
                        </div>
                        <form className="space-y-5 sm:space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">mail</span>
                                    <input
                                        className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 text-on-surface text-base"
                                        id="email"
                                        placeholder="hello@petatelier.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="password">
                                        Password
                                    </label>
                                    <a className="text-xs font-semibold text-primary hover:underline transition-all" href="#">Forget password?</a>
                                </div>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">lock</span>
                                    <input
                                        className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 text-on-surface text-base"
                                        id="password"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <button
                                className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="relative my-8 sm:my-10 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-outline-variant/30"></div>
                            </div>
                            <span className="relative px-4 bg-surface-container-lowest text-[10px] sm:text-xs font-bold uppercase tracking-widest text-outline/60">
                                Or continue with
                            </span>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-sm text-on-surface-variant font-medium">
                                Don't have an account?{' '}
                                <Link to="/SignUp" className="text-primary font-bold hover:underline" >Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}