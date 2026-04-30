import Image from "next/image";

export default function TrackInfo() {
  return (
    <div className="flex-1 items-center justify-center flex gap-5">
      <div>
        <Image
          src={"/covers/paradise.jpg"}
          width={60}
          height={70}
          alt="album cover"
        />
      </div>
      <div>
        <p className="hover:underline cursor-pointer">Trinti Productions</p>
        <p className="text-sm hover:underline cursor-pointer">Paradice</p>
      </div>
    </div>
  );
}
