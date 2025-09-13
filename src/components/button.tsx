

type ButtonProps = {
    text: React.ReactNode;
    size?: "default" | "big";
    icon?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    const {
        text,
        icon,
        // size="default"
    } = props;

    return <button className="btn">{text} {icon}</button>;
}