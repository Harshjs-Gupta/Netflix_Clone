function HeaderSkeleton() {
  return (
    <header className="absolute flex items-center justify-between h-16 w-full mt-0 py-2 px-4 z-10">
      <div className="skeleton-box h-14 w-[250px]"></div>
      <div className="skeleton-box h-8 w-8"></div>
    </header>
  );
}

export default HeaderSkeleton;
