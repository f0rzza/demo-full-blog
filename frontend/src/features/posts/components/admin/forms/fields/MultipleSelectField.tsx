type Props = { sectionTitle: string; fieldName: string; options: Array<unknown> };
// TODO: use 'T' generic type

export function MultipleSelectField({ sectionTitle, fieldName, options }: Props) {
  return (
    <section>
      <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
        {sectionTitle}
      </h3>

      <div className="flex flex-col gap-3">
        <div className="dropdown-content  w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto Ahidden group-hover:block">
          <div className="p-2">
            {options.map((item: unknown) => (
              <label
                key={item.id}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-md p-2"
              >
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name={fieldName}
                  value={item.id}
                />
                <span className="text-sm text-gray-700">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
