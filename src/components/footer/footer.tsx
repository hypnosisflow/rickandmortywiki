import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <div className="h-40 bg-slate-50 mt-10 flex justify-center flex-col items-center">
      <a
        href="https://github.com/hypnosisflow/rickandmortywiki"
        target="_blank"
        className="flex items-center gap-2"
      >
        <span>Source code</span>
        <GitHubLogoIcon />
      </a>
      <p className="text-center text-slate-300 text-xs">hypnosisflow @ 2024</p>
    </div>
  );
};
