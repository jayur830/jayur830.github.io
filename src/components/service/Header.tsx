export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <div className="w-full border-1 p-4">{title}</div>;
}
