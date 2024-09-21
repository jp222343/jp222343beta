"use client";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-blue-900 to-blue-990 text-white">
      <h1 className="text-6xl font-bold text-center neon-text">404</h1>
      <p className="mt-4 text-2xl text-center neon-text">Página não encontrada</p>
      <style jsx>{`
        .neon-text {
          text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.7),
            0 0 10px rgba(0, 0, 255, 0.5),
            0 0 20px rgba(0, 0, 255, 0.5),
            0 0 30px rgba(0, 0, 255, 0.3),
            0 0 40px rgba(0, 0, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
