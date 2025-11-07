// app/(routes)/_components/StatCard.tsx
export function StatCard({ title, value }: { title: string, value: string | number }) {
  return (
    <div className="result-card" style={{
      border: '1px solid #ccc', 
      padding: '1.5rem', 
      borderRadius: '8px', 
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{
        fontSize: '1rem', 
        color: '#6b7280', 
        textTransform: 'uppercase', 
        margin: 0
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        margin: 0,
        color: '#111'
      }}>
        {value}
      </p>
    </div>
  );
}