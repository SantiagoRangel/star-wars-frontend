import Spline from "@splinetool/react-spline";

export default function Scene({
  className,
  ...props
}: { className?: string } & React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      <Spline scene="https://prod.spline.design/64CaEUi3rvLvzu-g/scene.splinecode" />
    </div>
  );
}
