import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface PlanetLabelProps extends ComponentProps<"div"> {
  label: string;
  value: string | string[];
  className?: string;
}
export default function PlanetLabel({
  label,
  value,
  className,
  ...props
}: PlanetLabelProps) {
  const shortenNumber = (num: number): string => {
    let result = num;
    if (num >= 1000000000) {
      result = Math.round(num / 1000000000);
      return `${result}B`;
    } else if (num >= 1000000) {
      result = Math.round(num / 1000000);
      return `${result}M`;
    } else if (num >= 1000) {
      result = Math.round(num / 1000);
      return `${result}K`;
    }
    return `${result}`;
  };
  return (
    <div className={cn(className)} {...props}>
      <div className="flex flex-wrap  text-yellow-200">
        <h3 className="text-sm font-[400] leading-none tracking-tight mr-1">
          {label}:
        </h3>
        {label === "Residents" ? (
          Array.isArray(value) && value.length > 0 && value[0] !== "" ? (
            value.map((resident, index) => {
              return (
                <p
                  className="text-sm font-[200] mr-2 -translate-y-[2px] text-left"
                  key={index}
                >
                  {resident}
                </p>
              );
            })
          ) : (
            <p className="text-sm font-[200] -translate-y-[2px] text-left">
              none
            </p>
          )
        ) : (
          <p className="text-sm font-[200] -translate-y-[2px] text-left">
            {label === "Diameter"
              ? `${value} km`
              : label === "Population"
              ? shortenNumber(
                  parseInt(Array.isArray(value) ? value.join("") : value)
                )
              : value}
          </p>
        )}
      </div>
    </div>
  );
}
