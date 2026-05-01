export default function SkeletonCard() {
  return (
    <div className="p-3 rounded-lg animate-pulse">
      <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-sm mb-2" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-3/4 mb-2" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
    </div>
  );
}
