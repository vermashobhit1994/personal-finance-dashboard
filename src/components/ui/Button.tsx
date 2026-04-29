import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition",
        variant === "primary" &&
          "bg-black text-white hover:bg-gray-800",
        variant === "secondary" &&
          "bg-gray-100 text-black hover:bg-gray-200",
        className
      )}
      {...props}
    />
  )
}