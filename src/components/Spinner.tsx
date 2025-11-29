export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className={`${sizeClasses[size]} border-4 border-red-200 border-t-red-600 rounded-full animate-spin`} />
    </div>
  );
}
