export function DashboardSidebar() {
  return (
    <aside className="w-64 hidden lg:flex flex-col gap-10">
      <div>
        <h3 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6">
          Management
        </h3>
        <nav className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container text-on-primary-container transition-transform active:scale-[0.98]"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="article">
              article
            </span>
            <span className="font-label text-sm">All Posts</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="edit_note">
              edit_note
            </span>
            <span className="font-label text-sm">New Post</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="analytics">
              analytics
            </span>
            <span className="font-label text-sm">Analytics</span>
          </a>
        </nav>
      </div>
      <div>
        <h3 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6">
          Personal
        </h3>
        <nav className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
            <span className="font-label text-sm">Settings</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span className="font-label text-sm">Sign Out</span>
          </a>
        </nav>
      </div>
      <div className="mt-auto p-6 rounded-xl bg-surface-container-low">
        <p className="text-xs font-body leading-relaxed text-on-surface-variant">
          Your journal has grown by 12% this month. Keep up the momentum.
        </p>
      </div>
    </aside>
  );
}
