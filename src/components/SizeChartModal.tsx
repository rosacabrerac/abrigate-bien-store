import Modal from "./Modal";

const SIZE_CHART = [
  {
    name: "S",
    chest: "88 - 94",
    waist: "76 - 82",
    hip: "88 - 94",
  },
  {
    name: "M",
    chest: "95 - 101",
    waist: "83 - 89",
    hip: "95 - 101",
  },
  {
    name: "L",
    chest: "102 - 108",
    waist: "90 - 96",
    hip: "102 - 108",
  },
  {
    name: "XL",
    chest: "109 - 115",
    waist: "97 - 103",
    hip: "109 - 115",
  },
];

export default function SizeChartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Guía de Talles">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold uppercase tracking-wider text-brand">
            Guía de Talles
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            aria-label="Cerrar guía de talles"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              aria-labelledby="title"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x cursor-pointer"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Cerrar Guía de Talles</title>
              <path fill="none" stroke="none" d="M0 0h24v24H0z" />
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <table className="w-full border-collapse mt-6 text-left text-sm">
          <thead>
            <tr>
              <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                Talle
              </th>
              <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                Pecho (cm)
              </th>
              <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                Cintura (cm)
              </th>
              <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                Cadera (cm)
              </th>
            </tr>
          </thead>

          <tbody>
            {SIZE_CHART.map((row) => (
              <tr key={row.name} className="hover:bg-white/5 transition-colors">
                <td className="py-3 border-b border-white/5 text-slate-400">
                  {row.name}
                </td>
                <td className="py-3 border-b border-white/5 text-slate-400">
                  {row.chest}
                </td>
                <td className="py-3 border-b border-white/5 text-slate-400">
                  {row.waist}
                </td>
                <td className="py-3 border-b border-white/5 text-slate-400">
                  {row.hip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Cómo tomar mis medidas para saber mi talle
          </h3>
          <ul className="text-sm text-slate-400 leading-relaxed">
            <li>
              <span className="font-semibold text-slate-300">Pecho:</span> Medí
              la parte más ancha del pecho, manteniendo la cinta métrica
              horizontal y floja.
            </li>
            <li>
              <span className="font-semibold text-slate-300">Cintura:</span>{" "}
              Medí alrededor de la parte más angosta de la cintura (justo encima
              del ombligo.
            </li>
            <li>
              <span className="font-semibold text-slate-300">Cadera:</span> Con
              los pies juntos, medí la parte más ancha de la cadera.
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
