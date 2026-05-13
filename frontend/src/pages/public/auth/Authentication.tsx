import { useState } from 'react';
import { SignInForm, SignUpForm } from '../../../features/auth';
import { ToggleButton } from '@/features/auth/components/ToggleButton';

export function Authentication() {
  const [displayLogin, setDisplayLogin] = useState(true);

  return (
    <div className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden pt-24">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
      <section className="max-w-md w-full z-10">
        <div className="bg-surface-container-lowest p-8 md:p-12 shadow-[0_20px_40px_rgba(25,28,29,0.03)] border border-outline-variant/10">
          <div className="flex gap-8 mb-10 border-b border-outline-variant/20">
            <ToggleButton
              label="Sign In"
              current={displayLogin}
              onClick={() => setDisplayLogin(true)}
            />
            <ToggleButton
              label="Register"
              current={!displayLogin}
              onClick={() => setDisplayLogin(false)}
            />
          </div>

          {displayLogin && <SignInForm />}
          {!displayLogin && <SignUpForm />}

          <div className="relative my-10 flex items-center">
            <div className="flex-grow border-t border-outline-variant/10"></div>
            <span className="mx-4 text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/40">
              Or continue with
            </span>
            <div className="flex-grow border-t border-outline-variant/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <span className="material-symbols-outlined text-lg" data-icon="google">
                google
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-widest">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <span className="material-symbols-outlined text-lg" data-icon="apple">
                ios
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-widest">
                Apple
              </span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-body text-on-surface-variant/50 leading-relaxed italic">
          Membership provides exclusive access to our quarterly digital essays and curated archives.
        </p>
      </section>
    </div>
  );
}
