import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="wrapper grid grid-cols-3 gap-4">
        <div>
          <Image
            src={"/logo.png"}
            width={150}
            height={150}
            alt="Logo"
          />
        </div>
        <div>Home</div>
        <div>additional</div>
      </div>
    </>
  );
}
