import { Box } from "@chakra-ui/react"

interface Props {
  color: string
}

const ColorCircle = ({ color }: Props) => {
  return (
    <Box
      bgColor={color}
      height="7px"
      width="7px"
      borderRadius="full"
      mr="7px"
    />
  )
}

export default ColorCircle
