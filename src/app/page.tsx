import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6">
        
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            Hi! I'm happy to see you here👊
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <Image
            src="/chess.jpg" // Replace with your actual image path
            alt="Marcel Claramunt"
            width={2080}
            height={2079}
            className="rounded-full object-cover w-72 h-72"
          />
          <p className="mt-2 text-sm text-gray-400">(yep that's me)</p>
        </div>
      </div>
    </section>
  );
}
