export function Author() {
  return (
    <div className="flex items-center gap-6 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
          <img
            alt="Author"
            className="w-full h-full object-cover"
            data-alt="close-up portrait of an elderly man with silver hair and wise eyes in soft natural library lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47n0wYbcSRskB8ROdFTEaXbEfe8TyCOoQ0IIcCBsgxvD2TNuaSBQmTMfOizYl5yM-rOD5baUvxd2fzwl_fEn2jU0DF0Zu9A7lErlDL-2hRp6swC4ktAginTmJ74hghBAwCgpYtTB3aK7EdUhr3kdbW3KQV2NvBmbeohre7_3qqF2xA0I4-2PLQIRDsd5w_ishy8QZwMZcnyrWKCSe7yDlgjpkctzN1aJrr717UgxlKAOv8DDrho7zfV4eB2ezL4beARQJjNR7oBnt"
          />
        </div>
        <span className="text-sm font-medium">Elias Thorne</span>
      </div>
      <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
      <span className="text-sm text-on-surface-variant font-body italic">October 24, 2024</span>
    </div>
  );
}
