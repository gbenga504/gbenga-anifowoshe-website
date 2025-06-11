import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-6 bg-background z-10">
      <span className="italic text-slate-300 text-sm">by</span>
      <div className="bg-light-background w-10 h-10 rounded-full ml-3">
        <Image
          src="/profile.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          alt="Picture of the author"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};
