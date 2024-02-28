export const Error = ({ err }: { err?: string }) => {
  return (
    <div className="w-full flex mx-auto textx-center justify-center items-center">
      <p>{err ?? " Something is broken, please try later!"}</p>
    </div>
  );
};
