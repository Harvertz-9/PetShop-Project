import React from 'react';

export default function AdminHeader({ onMenuClick, title }) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 md:hidden">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Open Menu"
                >
                    <span className="material-symbols-outlined text-2xl">menu</span>
                </button>
                <h1 className="text-xl font-black text-orange-600 dark:text-orange-400">Pet Atelier</h1>
            </div>
            {title && (
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                    {title}
                </span>
            )}
        </header>
    );
}
