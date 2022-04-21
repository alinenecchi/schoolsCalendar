import css from "./container.module.scss";

export default function Container(props) {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={`${css["container-main"]} ${className}`}>
      {children}
    </div>
  );
}
