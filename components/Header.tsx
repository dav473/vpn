import { Text } from "@gluestack-ui/themed"

interface Props {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "2xs" | "4xl" | "5xl" | "6xl" | undefined,
    bold: boolean,
    title: string
}
// const HomeHeader = ({ navigationHandler }: Props) => {
const Header = ({ size, bold, title }: Props) => {

    return (
        <Text size={size} bold={bold} color="white">{title}</Text>
    );
}


export default Header

