const CONTACTS = [
  { label: 'Support [IN]', phone: '+91 9876543210' },
  { label: 'Support [UAE]', phone: '+971 526753757' },
];

const message = 'Hello, I have a query about your services.';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">
      {/* Number popup — appears above on hover */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[200px]">
          {CONTACTS.map((c, i) => (
            <a
              key={c.phone}
              href={`https://wa.me/${c.phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-4 py-3 hover:bg-[#f0fdf4] transition-colors${i < CONTACTS.length - 1 ? ' border-b border-gray-100' : ''}`}
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                <div className="text-sm font-semibold text-gray-800">{c.phone}</div>
              </div>
            </a>
          ))}
        </div>
        {/* Caret */}
        <div className="w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 absolute -bottom-1.5 right-6" />
      </div>

      {/* Main button */}
      <div
        aria-label="Chat with us on WhatsApp"
        className="flex items-center h-14 rounded-full bg-[#25D366] shadow-lg group-hover:bg-[#1ebe5d] transition-all duration-300 cursor-pointer"
      >
        <span className="w-0 group-hover:w-36 overflow-hidden transition-all duration-300 whitespace-nowrap">
          <span className="block text-white text-sm font-semibold pl-5 pr-1">
            Send Enquiry
          </span>
        </span>
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
