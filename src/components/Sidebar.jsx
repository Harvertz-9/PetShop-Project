import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <>
            <aside className="hidden md:flex flex-col h-screen max-w-72 w-full sticky top-0 left-0 bg-slate-100 dark:bg-slate-900 shadow-2xl z-50">
                <div className="flex flex-col h-full py-8 px-4 bg-slate-50 dark:bg-slate-950 space-y-12">
                    <div className="px-4">
                        <h1 className="text-2xl font-extrabold text-orange-600 dark:text-orange-400">Pet Atelier</h1>
                        <p className="text-sm font-medium text-slate-500">Admin</p>
                    </div>
                    <nav className="flex-1 space-y-2">
                        <Link to='/AdminDashboard' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            <span className="font-medium">Dashboard</span>
                        </Link>
                        <Link to='/ManageToys' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="toys" style={{fontVariationSettings: "'FILL' 1"}}>toys</span>
                            <span className="font-medium">Manage Toys</span>
                        </Link>
                        <Link to='/ManageFood' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
                            <span className="font-medium">Manage Food</span>
                        </Link>
                        <Link to='/ManageCollars' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="pets">pets</span>
                            <span className="font-medium">Manage Collars</span>
                        </Link>
                        <Link to='/ProfileDashboard' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                            <span className="font-medium">Profile</span>
                        </Link>
                    </nav>
                    <div className="px-4 py-6 bg-white dark:bg-slate-900 rounded-xl flex items-center space-x-3">
                        <img alt="Pet Atelier Admin Avatar" className="w-10 h-10 rounded-full object-cover" data-alt="Professional headshot of a friendly curator in a stylish studio, soft natural lighting, warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigzkorAuZnYB7b6gX4ZgiIcKDbza0lQd8_iKXqzAd07o7X8OtWTD29IZeXxHc7RESzoqtyNjCswL6qt3rLj3suNp1-I8J5P2zIDOiysDVc8n9AlEj67yb35we_LhQff3by4Gk5lepNJBpPV7n7QPOBbAUViCvvyPD0L-EZYGc6mO9espIM2xWfgOTAea4LbJciG1t2X8yD0QQl6n742-k58plFI8Cy6xY3ld7SX198Nlx4ojGXoT8bTYqkOREAtTSAP7pTjYDthxO" />
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold truncate">Citak Bokep</p>
                            <p className="text-xs text-slate-500">Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}