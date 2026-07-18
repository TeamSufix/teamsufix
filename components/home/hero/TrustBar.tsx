export default function TrustBar() {
  const clients = [
    "NGOs",
    "Financial Institutions",
    "Schools",
    "Hospitals",
    "Construction Firms",
    "SMEs",
  ];

  return (
    <div className="mt-20 border-t border-green-100 pt-8">
      <div className="flex flex-wrap gap-8 text-sm font-semibold text-gray-500">
        {clients.map((client) => (
          <span key={client}>✓ {client}</span>
        ))}
      </div>
    </div>
  );
}
