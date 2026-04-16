export function SignUpForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          className="w-full px-0 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 transition-all font-body"
          id="name"
          placeholder="Julian Thorne"
          type="text"
        />
      </div>
      <div>
        <label
          className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="w-full px-0 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 transition-all font-body"
          id="email"
          placeholder="curator@journal.com"
          type="email"
        />
      </div>
      <div>
        <label
          className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-0 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 transition-all font-body"
          id="password"
          placeholder="••••••••"
          type="password"
        />
      </div>
      <div className="pt-4">
        <button
          className="w-full py-4 bg-primary text-on-primary font-label font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-colors duration-300"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
