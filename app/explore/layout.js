
export const runtime = "edge"

export default function Layout({ children }) {
  return (
    <div className="w-[90vw] m-auto">
      {children}
    </div>
  );
}

