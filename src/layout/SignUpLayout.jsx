import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function SignUpLayout() {
    const { signUp, error } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const [termsError, setTermsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!agreed) {
            setTermsError(true)
            return
        }
        setTermsError(false)
        const success = signUp(name, email, password)
        if (success) navigate("/")
    }

    return (
        <main className="min-h-screen flex items-center justify-center py-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl"></div>
            </div>
            <section className="w-full max-w-md relative z-10">
                <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-2xl border border-white/50">
                    <div className="text-center mb-8">
                        <span className="font-headline text-3xl font-black text-orange-600 tracking-tighter">
                            Pet Atelier
                        </span>
                        <h2 className="font-bold text-xl text-on-surface mt-2">Create Account</h2>
                        <p className="text-on-surface-variant text-sm mt-1">Join our pet-loving community</p>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-error-container/30 text-error rounded-xl text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="name">Full Name</label>
                            <input
                                className="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60"
                                id="name"
                                placeholder="Enter your name..."
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="email">Email Address</label>
                            <input
                                className="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60"
                                id="email"
                                placeholder="Enter your email..."
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    className="w-full px-5 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant/60"
                                    id="password"
                                    placeholder="Enter your password..."
                                    type={showPass ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
                                >
                                    <span className="material-symbols-outlined">
                                        {showPass ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 py-2">
                            <input
                                className="mt-1 rounded text-primary focus:ring-primary border-outline-variant/30"
                                id="terms"
                                type="checkbox"
                                checked={agreed}
                                onChange={e => {
                                    setAgreed(e.target.checked)
                                    setTermsError(false)  // ← hilangkan error saat dicentang
                                }}
                            />
                            <label className="text-sm text-on-surface-variant leading-snug" htmlFor="terms">
                                I agree to the{' '}
                                <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a>
                                {' '}and{' '}
                                <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                            </label>
                        </div>

                        {/* Pesan error inline — muncul di bawah checkbox */}
                        {termsError && (
                            <p className="text-error text-xs font-medium flex items-center gap-1 -mt-1">
                                <span className="material-symbols-outlined text-sm">error</span>
                                Harap setujui Terms of Service untuk melanjutkan.
                            </p>
                        )}
                        <button
                            className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-on-surface-variant text-sm">
                            Already have an account?{' '}
                            <Link to="/signin" className="text-primary font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}